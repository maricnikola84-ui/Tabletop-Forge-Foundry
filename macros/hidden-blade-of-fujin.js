(async () => {
  const ITEM_NAME = "Hidden Blade of Fūjin";
  const ITEM_IDENTIFIER = "hidden-blade-of-fujin";
  const NORMAL_ACTIVITY_ID = "FujinStrike00001";
  const UNSEEN_ACTIVITY_ID = "FujinUnseen00001";
  const VERSION = "1.0.0";
  const FLAG_SCOPE = "tabletop-forge-foundry";
  const ITEM_IMG = "icons/weapons/thrown/dagger-ringed-steel.webp";
  const WIND_IMG = "icons/magic/air/wind-vortex-swirl-blue.webp";

  const damagePart = (number, denomination, type) => ({
    number,
    denomination,
    bonus: "",
    types: [type],
    custom: { enabled: false, formula: "" },
    scaling: { mode: "", number: 1, formula: "" }
  });

  const attackActivity = (id, name, unseen = false) => {
    const parts = [damagePart(1, 4, "wind")];
    if (unseen) parts.push(damagePart(6, 6, "piercing"));

    return {
      _id: id,
      type: "attack",
      name,
      img: ITEM_IMG,
      sort: unseen ? 100000 : 0,
      activation: {
        type: "action",
        value: null,
        override: false,
        condition: unseen ? "Only while Invisible or unseen by the target." : ""
      },
      consumption: {
        scaling: { allowed: false },
        spellSlot: false,
        targets: []
      },
      description: {
        chatFlavor: unseen
          ? "Hidden Fang: +6d6 piercing because the wielder is Invisible or unseen."
          : "A normal strike with the Hidden Blade of Fūjin."
      },
      duration: {
        units: "inst",
        concentration: false,
        override: false
      },
      effects: [],
      range: { override: false },
      target: {
        template: { contiguous: false, units: "ft", type: "" },
        affects: { choice: false, type: "creature", count: "1", special: "" },
        override: false,
        prompt: true
      },
      uses: {
        spent: 0,
        recovery: [],
        max: ""
      },
      attack: {
        critical: { threshold: null },
        flat: false,
        type: { value: "melee", classification: "weapon" },
        ability: "",
        bonus: ""
      },
      damage: {
        critical: { bonus: "" },
        includeBase: true,
        parts
      },
      appliedEffects: []
    };
  };

  const buildItemData = () => ({
    name: ITEM_NAME,
    type: "weapon",
    img: ITEM_IMG,
    system: {
      description: {
        value:
          "<h2>Hidden Blade of Fūjin</h2>" +
          "<p><strong>Level 9 unique weapon.</strong> A concealed wind-tempered blade carrying three intrinsic seals.</p>" +
          "<p><strong>Base Strike:</strong> 3d6 piercing damage. N5EB adds the normal weapon ability modifier through its native attack activity.</p>" +
          "<p><strong>Hidden Fang:</strong> If you hit while <strong>Invisible</strong> or otherwise <strong>unseen by the target</strong>, the strike deals an additional <strong>6d6 piercing damage</strong>.</p>" +
          "<h3>Three Intrinsic Seals</h3>" +
          "<ul>" +
          "<li><strong>Elemental Seal (Greater) — Wind:</strong> fixed to Wind Release on this unique blade; each strike deals an additional <strong>1d4 Wind damage</strong>.</li>" +
          "<li><strong>Extending Seal (Greater):</strong> increases the melee reach by 10 feet, for a total reach of <strong>15 feet</strong>.</li>" +
          "<li><strong>Phantom Seal (Minor):</strong> the blade can harm creatures without a physical form, such as ghosts and phantoms.</li>" +
          "</ul>" +
          "<h3>Fūjin Effects</h3>" +
          "<p><strong>Fūjin's Step:</strong> while this weapon is equipped, your walking speed increases by <strong>10 feet</strong>.</p>" +
          "<p><strong>Veil of Fūjin:</strong> once per short rest, the blade wraps you in silent wind, making you <strong>Invisible</strong> until the start of your next turn. The veil ends immediately after you make an attack.</p>" +
          "<p><em>Use this macro to attack so Hidden Fang is selected only when its condition is valid and Veil of Fūjin is removed after the attack.</em></p>",
        chat: ""
      },
      source: {
        custom: "Tabletop-Forge-Foundry custom content",
        rules: "n5eb",
        book: "Naruto 5e"
      },
      identifier: ITEM_IDENTIFIER,
      prerequisites: { level: 9 },
      identified: true,
      unidentified: { description: "" },
      container: null,
      quantity: 1,
      weight: { value: 1, units: "bulk" },
      price: { value: 0, denomination: "ryo" },
      rarity: "",
      attunement: "",
      attuned: false,
      equipped: true,
      armor: { value: null },
      cover: null,
      crewed: false,
      hp: { value: null, max: null, dt: null, conditions: "" },
      ammunition: {},
      ammunitionDie: "d8",
      damage: {
        base: {
          number: 3,
          denomination: 6,
          bonus: "",
          types: ["piercing"],
          custom: { enabled: false, formula: "" },
          scaling: { mode: "", number: 1, formula: "" }
        },
        versatile: {
          number: null,
          denomination: null,
          bonus: "",
          types: [],
          custom: { enabled: false, formula: "" },
          scaling: { mode: "", number: null, formula: "" }
        }
      },
      magicalBonus: null,
      properties: ["fin", "lgt", "mgc"],
      proficient: null,
      range: {
        value: null,
        long: null,
        reach: 15,
        units: "ft"
      },
      mastery: "",
      type: {
        value: "martialM",
        baseItem: ""
      },
      uses: {
        spent: 0,
        max: "1",
        recovery: [
          { period: "sr", type: "recoverAll", formula: "" }
        ]
      },
      activities: {
        [NORMAL_ACTIVITY_ID]: attackActivity(NORMAL_ACTIVITY_ID, "Hidden Blade Strike", false),
        [UNSEEN_ACTIVITY_ID]: attackActivity(UNSEEN_ACTIVITY_ID, "Hidden Fang — Unseen Strike", true)
      }
    },
    effects: [
      {
        _id: "FujinGaleStep001",
        name: "Fūjin's Step",
        img: WIND_IMG,
        type: "base",
        system: {},
        changes: [
          {
            key: "system.attributes.movement.walk",
            mode: 2,
            value: "10",
            priority: 20
          }
        ],
        disabled: false,
        duration: {
          startTime: null,
          seconds: null,
          combat: null,
          rounds: null,
          turns: null,
          startRound: null,
          startTurn: null
        },
        description: "<p>While the Hidden Blade of Fūjin is equipped, the wielder's walking speed increases by 10 feet.</p>",
        origin: null,
        tint: "#ffffff",
        transfer: true,
        statuses: [],
        sort: 0,
        flags: {
          [FLAG_SCOPE]: {
            hiddenBladeOfFujinEffect: "fujins-step"
          }
        }
      }
    ],
    flags: {
      [FLAG_SCOPE]: {
        hiddenBladeOfFujin: true,
        version: VERSION,
        level: 9,
        seals: [
          "Elemental Seal (Greater) — Wind",
          "Extending Seal (Greater)",
          "Phantom Seal (Minor)"
        ]
      }
    }
  });

  const resolveActor = () => {
    if (canvas?.tokens?.controlled?.length === 1) return canvas.tokens.controlled[0].actor;
    if (game.user.character) return game.user.character;
    return null;
  };

  const findItem = actor =>
    actor.items.find(i => i.system?.identifier === ITEM_IDENTIFIER)
    ?? actor.items.find(i => i.name === ITEM_NAME);

  const findVeil = actor =>
    actor.effects.find(e => e.getFlag?.(FLAG_SCOPE, "hiddenBladeOfFujinVeil"))
    ?? actor.effects.find(e => e.flags?.[FLAG_SCOPE]?.hiddenBladeOfFujinVeil);

  const isInvisible = actor => {
    if (actor.statuses?.has?.("invisible")) return true;
    const effects = actor.appliedEffects ?? actor.effects ?? [];
    return Array.from(effects).some(e => e.statuses?.has?.("invisible"));
  };

  const installItem = async actor => {
    let item = findItem(actor);
    if (item) return item;

    const created = await actor.createEmbeddedDocuments("Item", [buildItemData()]);
    item = created?.[0];
    if (!item) throw new Error("Foundry did not return the created Hidden Blade item.");

    ui.notifications.info(ITEM_NAME + " installed on " + actor.name + ".");
    return item;
  };

  const activateVeil = async (actor, item) => {
    if (findVeil(actor)) {
      ui.notifications.warn("Veil of Fūjin is already active.");
      return;
    }

    const max = Number(item.system.uses?.max || 1);
    const spent = Number(item.system.uses?.spent || 0);
    if (spent >= max) {
      ui.notifications.warn("Veil of Fūjin has no uses remaining. It recovers on a short rest.");
      return;
    }

    await item.update({ "system.uses.spent": spent + 1 });

    await actor.createEmbeddedDocuments("ActiveEffect", [{
      name: "Veil of Fūjin",
      img: WIND_IMG,
      type: "base",
      system: {},
      changes: [],
      disabled: false,
      duration: {
        startTime: game.time.worldTime,
        seconds: null,
        combat: game.combat?.id ?? null,
        rounds: 1,
        turns: 0,
        startRound: game.combat?.round ?? null,
        startTurn: game.combat?.turn ?? null
      },
      description: "<p>Silent wind bends sight around the wielder. You are Invisible until the start of your next turn or until you make an attack.</p>",
      tint: "#ffffff",
      statuses: ["invisible"],
      flags: {
        [FLAG_SCOPE]: {
          hiddenBladeOfFujinVeil: true
        }
      }
    }]);

    await ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor }),
      content: "<p><strong>Veil of Fūjin:</strong> " + actor.name + " vanishes inside a mantle of silent wind.</p>"
    });
  };

  const makeAttack = async (actor, item) => {
    let unseen = isInvisible(actor);

    if (!unseen) {
      unseen = await foundry.applications.api.DialogV2.confirm({
        window: {
          title: "Hidden Blade of Fūjin — Hidden Fang",
          icon: "fa-solid fa-wind"
        },
        content:
          "<p>Is the wielder <strong>unseen by the target</strong> for this attack?</p>" +
          "<p><strong>Yes:</strong> use Hidden Fang and add 6d6 piercing on the hit.<br>" +
          "<strong>No:</strong> use the normal strike.</p>",
        rejectClose: false
      });
    }

    const activityId = unseen ? UNSEEN_ACTIVITY_ID : NORMAL_ACTIVITY_ID;
    const activity = item.system.activities?.get?.(activityId)
      ?? item.system.activities?.contents?.find(a => a.id === activityId);

    if (!activity) {
      ui.notifications.error("The Hidden Blade attack activity is missing. Delete the item and run the macro again to rebuild it.");
      return;
    }

    const veil = findVeil(actor);
    const result = await activity.use();

    if (result && veil) {
      await veil.delete();
      ui.notifications.info("Veil of Fūjin ends after the attack.");
    }
  };

  try {
    const actor = resolveActor();
    if (!actor) {
      ui.notifications.warn("Select exactly one token or assign a user character before using the Hidden Blade of Fūjin macro.");
      return;
    }

    const item = await installItem(actor);

    if (!item.system.equipped) {
      ui.notifications.warn(ITEM_NAME + " is not equipped. Fūjin's Step will not apply until it is equipped.");
    }

    const useVeil = await foundry.applications.api.DialogV2.confirm({
      window: {
        title: ITEM_NAME,
        icon: "fa-solid fa-wind"
      },
      content:
        "<p><strong>Yes:</strong> activate <strong>Veil of Fūjin</strong> (1/short rest).</p>" +
        "<p><strong>No:</strong> make a weapon attack now.</p>",
      rejectClose: false
    });

    if (useVeil) await activateVeil(actor, item);
    else await makeAttack(actor, item);
  } catch (err) {
    console.error("Hidden Blade of Fūjin macro failed", err);
    ui.notifications.error("Hidden Blade of Fūjin failed. Check the console for details.");
  }
})();
