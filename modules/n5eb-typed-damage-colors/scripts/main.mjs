const MODULE_ID = "n5eb-typed-damage-colors";
const VERSION = "1.0.0";

const DEFAULTS = Object.freeze({
  enabled: true,
  colorize: true,
  showSummary: true,
  warnUntyped: true,
  normalizeTypes: true,
  colorizeApplication: true,
  debug: false
});

const TYPE_ALIASES = Object.freeze({
  flame: "fire",
  flames: "fire",
  burning: "fire",
  frost: "cold",
  ice: "cold",
  electric: "lightning",
  electricity: "lightning",
  mental: "psychic"
});

const warned = new Set();

function registerSettings() {
  const defs = {
    enabled: {
      name: "Enable Typed Damage Guard",
      hint: "Master switch for runtime damage-type normalization and validation.",
      type: Boolean, default: true
    },
    colorize: {
      name: "Color damage types in chat",
      hint: "Color each N5EB damage breakdown using the system's own configured damage-type color.",
      type: Boolean, default: true
    },
    showSummary: {
      name: "Show typed damage summary",
      hint: "Adds Fire 18, Psychic 11, etc. chips below the combined damage total.",
      type: Boolean, default: true
    },
    warnUntyped: {
      name: "Warn about untyped damage",
      hint: "Warn the GM when damage reaches the roll pipeline without a valid damage/healing type.",
      type: Boolean, default: true
    },
    normalizeTypes: {
      name: "Repair obvious missing types",
      hint: "At roll time, repairs an omitted type when N5EB data provides exactly one unambiguous damage type. This never rewrites the Jutsu or compendium.",
      type: Boolean, default: true
    },
    colorizeApplication: {
      name: "Color resistance/vulnerability indicators",
      hint: "Colors N5EB's native resistance, immunity, vulnerability and modification indicators by damage type.",
      type: Boolean, default: true
    },
    debug: {
      name: "Debug logging",
      hint: "Write detailed typed-damage information to the browser console.",
      type: Boolean, default: false
    }
  };
  for (const [key, data] of Object.entries(defs)) {
    game.settings.register(MODULE_ID, key, { scope: "world", config: true, ...data });
  }
}

function setting(key) {
  try { return game.settings.get(MODULE_ID, key); }
  catch (_) { return DEFAULTS[key]; }
}

function log(...args) {
  if (setting("debug")) console.log(`[${MODULE_ID}]`, ...args);
}

function allTypeConfig() {
  return { ...(CONFIG.DND5E?.damageTypes ?? {}), ...(CONFIG.DND5E?.healingTypes ?? {}) };
}

function isValidType(type) {
  return !!type && Object.prototype.hasOwnProperty.call(allTypeConfig(), String(type).toLowerCase());
}

function canonicalType(raw) {
  if (!raw) return "";
  let value = String(raw).trim().toLowerCase();
  value = TYPE_ALIASES[value] ?? value;
  return isValidType(value) ? value : "";
}

function typeLabel(type) {
  const cfg = allTypeConfig()[type];
  if (!cfg) return type ? String(type).capitalize?.() ?? String(type) : "Untyped";
  const label = cfg.labelShort ?? cfg.label ?? type;
  try { return game.i18n.localize(label); } catch (_) { return String(label); }
}

function typeColor(type) {
  const cfg = allTypeConfig()[type];
  const color = cfg?.color;
  if (!color) return "#808080";
  try {
    if (typeof color.css === "string") return color.css;
    const s = String(color);
    if (/^(#|rgb|hsl)/i.test(s)) return s;
    const n = Number(color.valueOf?.());
    if (Number.isFinite(n)) return `#${Math.trunc(n).toString(16).padStart(6, "0").slice(-6)}`;
  } catch (_) {}
  return "#808080";
}

function typeIcon(type) {
  return allTypeConfig()[type]?.icon ?? "icons/svg/explosion.svg";
}

function toArray(value) {
  if (!value) return [];
  if (Array.isArray(value)) return value;
  if (value instanceof Set) return Array.from(value);
  try { return Array.from(value); } catch (_) { return []; }
}

function formulaFlavorTypes(parts=[]) {
  const found = new Set();
  for (const part of parts ?? []) {
    const text = String(part ?? "");
    for (const match of text.matchAll(/\[\s*([a-zA-Z][a-zA-Z -]*)\s*\]/g)) {
      const type = canonicalType(match[1].replace(/\s+damage$/i, ""));
      if (type) found.add(type);
    }
  }
  return found;
}

function nativePartTypes(subject, index) {
  const part = subject?.damage?.parts?.[index];
  if (!part) return [];
  return toArray(part.types).map(canonicalType).filter(Boolean);
}

function normalizeDamageConfig(config) {
  if (!setting("enabled") || !setting("normalizeTypes")) return;
  const rolls = config?.rolls;
  if (!Array.isArray(rolls)) return;
  const subject = config?.subject;

  rolls.forEach((roll, index) => {
    roll.options ??= {};
    const rawTypes = toArray(roll.options.types).map(canonicalType).filter(Boolean);
    const explicit = canonicalType(roll.options.type);
    const flavored = Array.from(formulaFlavorTypes(roll.parts));
    const native = nativePartTypes(subject, index);

    const candidates = [...new Set([...rawTypes, ...flavored, ...native])];
    if (explicit) {
      roll.options.type = explicit;
      if (!rawTypes.includes(explicit)) roll.options.types = [...new Set([explicit, ...rawTypes])];
    } else if (candidates.length === 1) {
      roll.options.type = candidates[0];
      roll.options.types = candidates;
      roll.options.n5ebTypedDamageRepaired = true;
      log("Repaired missing damage type", subject?.item?.name ?? subject?.name ?? "Damage Roll", candidates[0]);
    } else if (candidates.length > 1) {
      roll.options.types = candidates;
      if (!roll.options.type && flavored.length === 0) roll.options.type = candidates[0];
    } else {
      roll.options.n5ebTypedDamageUnresolved = true;
    }
  });
}

function collectTermFlavors(term, out=new Set()) {
  if (!term) return out;
  const flavor = canonicalType(term.flavor ?? term.options?.flavor);
  if (flavor) out.add(flavor);
  for (const key of ["terms", "rolls"]) {
    const children = term[key];
    if (!children) continue;
    for (const child of children) collectTermFlavors(child, out);
  }
  if (term.roll) collectTermFlavors(term.roll, out);
  return out;
}

function rollHasMechanicalType(roll) {
  if (canonicalType(roll?.options?.type)) return true;
  for (const term of roll?.terms ?? []) {
    if (collectTermFlavors(term).size) return true;
  }
  return false;
}

function subjectName(subject) {
  return subject?.item?.name ?? subject?.name ?? "damage roll";
}

function validateRolls(rolls, { subject }={}) {
  if (!setting("enabled") || !setting("warnUntyped")) return;
  const bad = (rolls ?? []).filter(r => !rollHasMechanicalType(r));
  if (!bad.length) return;
  const key = `${subject?.uuid ?? subjectName(subject)}|${bad.map(r => r.formula).join("|")}`;
  if (warned.has(key)) return;
  warned.add(key);
  const name = subjectName(subject);
  ui.notifications?.warn?.(`${name}: ${bad.length} damage component${bad.length === 1 ? " is" : "s are"} UNTYPED. Type-specific resistance/vulnerability cannot be matched safely.`);
  console.warn(`[${MODULE_ID}] Untyped N5EB damage detected`, { subject, rolls: bad });
}

function normalizePath(src) {
  try { return new URL(src, window.location.href).pathname; }
  catch (_) { return String(src ?? ""); }
}

function identifyTooltipType(part) {
  const img = part.querySelector(".total img");
  const label = part.querySelector(".total .label")?.textContent?.trim()?.toLowerCase();
  const entries = Object.entries(allTypeConfig());

  if (img?.src) {
    const path = normalizePath(img.src);
    const byIcon = entries.find(([, cfg]) => cfg.icon && path.endsWith(String(cfg.icon).replace(/^\//, "")));
    if (byIcon) return byIcon[0];
  }

  if (label) {
    for (const [type] of entries) {
      const labels = [typeLabel(type), allTypeConfig()[type]?.labelShort, allTypeConfig()[type]?.label]
        .filter(Boolean)
        .map(v => {
          try { return game.i18n.localize(v).trim().toLowerCase(); } catch (_) { return String(v).trim().toLowerCase(); }
        });
      if (labels.includes(label)) return type;
    }
  }
  return "";
}

function decorateTooltipPart(part) {
  const type = identifyTooltipType(part);
  const color = typeColor(type);
  part.classList.add("n5eb-typed-damage-part");
  part.dataset.n5ebDamageType = type || "untyped";
  part.style.setProperty("--n5eb-damage-color", color);
  const total = part.querySelector(".total");
  total?.style.setProperty("--n5eb-damage-color", color);
  return {
    type,
    label: type ? typeLabel(type) : "Untyped",
    value: Number(part.querySelector(".total .value")?.textContent?.trim()),
    icon: typeIcon(type),
    color
  };
}

function buildSummary(html, infos) {
  if (!setting("showSummary") || !infos.length) return;
  const roll = html.querySelector(".dice-roll");
  const total = roll?.querySelector(".dice-total");
  if (!roll || !total) return;
  roll.querySelector(".n5eb-typed-damage-summary")?.remove();

  const groups = new Map();
  for (const info of infos) {
    const key = info.type || "untyped";
    const existing = groups.get(key) ?? { ...info, value: 0 };
    existing.value += Number.isFinite(info.value) ? info.value : 0;
    groups.set(key, existing);
  }

  const summary = document.createElement("div");
  summary.className = "n5eb-typed-damage-summary";
  summary.setAttribute("aria-label", "Typed damage breakdown");
  for (const info of groups.values()) {
    const chip = document.createElement("span");
    chip.className = `n5eb-typed-damage-chip${info.type ? "" : " untyped"}`;
    chip.dataset.damageType = info.type || "untyped";
    chip.style.setProperty("--n5eb-damage-color", info.color);
    chip.title = info.type
      ? `${info.label}: N5EB will resolve this component separately against ${info.label} resistance, immunity, vulnerability and damage modification.`
      : "Untyped damage cannot safely match a type-specific resistance, immunity or vulnerability.";
    chip.innerHTML = `<img src="${info.icon}" alt=""><span class="type">${info.label}</span><strong>${info.value}</strong>`;
    summary.appendChild(chip);
  }
  total.insertAdjacentElement("afterend", summary);
}

function decorateApplication(html) {
  if (!setting("colorizeApplication")) return;
  for (const el of html.querySelectorAll("damage-application .change-source[data-type], .damage-application .change-source[data-type]")) {
    const type = canonicalType(el.dataset.type);
    if (!type) continue;
    el.classList.add("n5eb-typed-damage-change");
    el.style.setProperty("--n5eb-damage-color", typeColor(type));
  }
}

function decorateMessage(message, htmlLike) {
  if (!setting("enabled") || !setting("colorize")) return;
  const html = htmlLike instanceof HTMLElement ? htmlLike : htmlLike?.[0];
  if (!(html instanceof HTMLElement)) return;
  const rollType = message?.getFlag?.("n5eb", "roll.type") ?? message?.system?.roll?.type;
  const damageLike = ["damage", "healing"].includes(String(rollType ?? ""));
  const parts = [...html.querySelectorAll(".dice-tooltip .tooltip-part")];
  if (!parts.length && !damageLike) return;

  const infos = parts.map(decorateTooltipPart);
  buildSummary(html, infos);
  decorateApplication(html);
  html.classList.add("n5eb-typed-damage-message");
}

function scheduleDecoration(message, html) {
  try { decorateMessage(message, html); } catch (err) { log("Immediate decoration failed", err); }
  queueMicrotask(() => {
    try { decorateMessage(message, html); } catch (err) { log("Microtask decoration failed", err); }
  });
  setTimeout(() => {
    try { decorateMessage(message, html); } catch (err) { log("Deferred decoration failed", err); }
  }, 60);
}

function auditActor(actor) {
  const rows = [];
  if (!actor) return rows;
  for (const item of actor.items ?? []) {
    const activities = item.system?.activities;
    let list = [];
    try { list = Array.from(activities?.values?.() ?? []); } catch (_) { list = Object.values(activities ?? {}); }
    for (const activity of list) {
      const parts = activity?.damage?.parts ?? [];
      parts.forEach((part, index) => {
        const types = toArray(part.types).map(canonicalType).filter(Boolean);
        rows.push({
          actor: actor.name,
          item: item.name,
          activity: activity.name,
          part: index + 1,
          formula: part.formula ?? part.custom?.formula ?? part.scaledFormula?.() ?? "",
          types: types.join(", "),
          status: types.length === 1 ? "typed" : types.length > 1 ? "multiple-choice" : "UNTYPED"
        });
      });
    }
  }
  console.table(rows);
  return rows;
}

Hooks.once("init", () => {
  registerSettings();
  console.log(`[${MODULE_ID}] Initializing v${VERSION}.`);
});

Hooks.once("ready", () => {
  if (game.system.id !== "n5eb") return;
  game.n5ebTypedDamage = { version: VERSION, auditActor, normalizeDamageConfig, validateRolls };
  console.log(`[${MODULE_ID}] Ready v${VERSION} for N5EB ${game.system.version}.`);
});

Hooks.on("dnd5e.preRollDamageV2", config => normalizeDamageConfig(config));
Hooks.on("dnd5e.preRollDamage", config => normalizeDamageConfig(config));
Hooks.on("dnd5e.rollDamageV2", (rolls, data={}) => validateRolls(rolls, data));

Hooks.on("renderChatMessageHTML", (message, html) => scheduleDecoration(message, html));
Hooks.on("renderChatMessage", (message, html) => scheduleDecoration(message, html));
