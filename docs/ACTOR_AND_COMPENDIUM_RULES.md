# Actor and Compendium Rules

## Golden rule

When building an N5EB 3.1.1 Actor, use real N5EB documents from the installed/pinned system whenever they exist. Hand-written substitutes are a last resort.

## Preferred actor construction workflow

1. Choose the correct native N5EB Actor type/template.
2. Resolve the real class, subclass, clan, class-mod, background, equipment, feats, Jutsu, passives, and traits from installed compendiums.
3. Clone/import those documents onto the actor.
4. Resolve automatic advancements and legal ItemChoice selections recursively.
5. Preserve native activities, Active Effects, advancement data, source identity, Chakra/rank data, and item flags.
6. Add project-authored custom material only after the native foundation is complete.
7. Run automation resync/audit after the actor is finished.

## Do not invent missing content

If a requested Jutsu/feat/item cannot be found:

- search exact and alternate names;
- inspect the relevant clan/class/class-mod source folder or compendium;
- check version mismatches;
- report the missing entry.

Do not silently create a plausible substitute and call it official N5EB content.

## UUID/document resolution

Prefer real document resolution:

```js
const doc = await fromUuid(uuid);
```

or direct pack access:

```js
const pack = game.packs.get(packId);
const doc = await pack.getDocument(id);
```

Use retry/fallback matching only when source IDs changed or imported data is known to be legacy.

## Advancements and legal choices

Do not stop at basic ItemGrant entries. N5EB actors can depend on ItemChoice and staged class/clan/class-mod advancement.

Selections must be legal for:

- actor level;
- class/subclass;
- clan;
- current class-mod stage;
- prerequisites;
- mutually-exclusive paths.

A generator/importer should not grant all choices just because they are present in an advancement pool.

## Preserve source documents

When copying a real source document, preserve its functional data rather than recreating only name/description:

- `system.activities`;
- effects;
- advancement;
- activation;
- targeting/range/duration;
- rank/Chakra/Jutsu metadata;
- resource/recovery data;
- compendium/source identity where useful.

## Actor export caveat

An Actor JSON export captures the actor's current embedded copies, not a promise that every embedded document matches the current upstream compendium version. For repairs, compare against the pinned N5EB source/installed pack and selectively replace stale documents while preserving campaign-specific state.

## NPC/adversary builds

Prefer the native N5EB adversary model rather than forcing player-class sheets onto enemies. Use N5EB adversary rank/class/role/discipline/passives/traits and real Jutsu. Only use player-character construction when the NPC genuinely needs a full character sheet.

## Import safety

Importers should identify documents they own with flags/version markers and replace only their own previous generated actors/items. Never delete unrelated world actors because an import is rerun.
