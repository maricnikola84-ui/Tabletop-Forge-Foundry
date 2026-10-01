# N5EB 3.1.1 Developer Reference

This file records implementation details that repeatedly mattered while building and repairing Foundry content against N5EB 3.1.1.

## System baseline

- System ID: `n5eb`
- Target version: `3.1.1`
- Foundry minimum: `13.347`
- Foundry verified by upstream: `14`
- N5EB is built on modern dnd5e-style document/activity infrastructure.

Always confirm behavior against `vendor/n5eb-3.1.1` before relying on these notes.

## Jutsu documents

Jutsu are Item documents, generally spell-like documents with N5EB-specific Jutsu fields plus modern `system.activities`.

Important concepts seen repeatedly:

- rank/level;
- Jutsu type: Ninjutsu, Genjutsu, Taijutsu, Bukijutsu, etc.;
- keywords/components;
- Chakra cost/scaling;
- activation/range/target/duration;
- one or more modern activities;
- Active Effects / applicable effects;
- concentration;
- compendium source identity.

Do not flatten a Jutsu to old `actionType + damage.parts + save` data if native 3.1.1 activities already exist.

## Activity/event hooks used by our automation work

The exact upstream source remains authoritative, but these hooks have been useful integration points:

- `dnd5e.postUseActivity` — post-use/cast integration.
- `dnd5e.preRollDamageV2` — shared/caster bonus damage preparation.
- `dnd5e.preCalculateDamage` — target-specific damage modification.
- `dnd5e.preRollSavingThrowV2` / save-result hooks — save-gated condition logic.
- `dnd5e.preRollAttackV2` / `dnd5e.postRollAttack` — hit-gated and one-shot attack logic.

Do not assume a hook signature from memory; inspect 3.1.1 and the active Foundry/dnd5e version before changing code.

## Native condition API

Prefer N5EB's condition APIs / condition documents instead of inventing parallel condition effects. Respect ranks/stacks when the native condition is ranked.

## Advancements

Actor/class/clan imports must account for more than simple ItemGrant entries.

Important advancement types include:

- automatic item grants;
- item choices;
- class/subclass advancement;
- clan progression;
- class-mod stages/choices;
- trait/proficiency choices.

Recursive imports should resolve only options legal for the actor's actual level and path. Never grant every ItemChoice option.

## Source identity

Preserve useful identity data such as:

- compendium source UUID;
- source pack/path/ID when present;
- original `_id` where needed for deterministic references;
- activity/effect IDs when cloning exact documents.

When resolving a real document, prefer `fromUuid()` or `pack.getDocument()` over rebuilding it by hand.

## Classmod Arts and rank hazards

N5EB has special handling for class-mod Arts. Do not abuse or populate `system.sourceItem` as a generic provenance field: doing so has previously caused ordinary Jutsu to be treated like Classmod Arts and disrupted rank, Clash, or dispel behavior.

Preserve real Jutsu rank/category fields and use neutral project flags for provenance.

## Formula/display split

Some 3.1.1 class-mod UI fields display a numeric `.value` even when another source/formula computes the number. A formula may calculate correctly while the visible field appears blank.

When a project needs both a computed formula and a visible numeric value, preserve the source formula and synchronize the displayed numeric field rather than replacing the rule with hard-coded text.

## Actor-owned copies

Runtime modifications belong on actor-owned Item copies or temporary effects unless the task is explicitly to author source content. This is especially important for enchantments and dynamic Chakra/damage/DC changes.

## Compendium-source rule

Official packs are immutable inputs for our automation. Modules may read/index/import documents from them, but should not rewrite the compendium documents in place.
