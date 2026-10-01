# Known Failure Modes

These are recurring problems encountered during N5EB / Foundry work and the rule that prevents each one.

## Jutsu imported with the wrong rank

**Symptom:** Jutsu appears under the wrong rank, casts with the wrong rank, or Clash/dispel math is wrong.

**Prevention:** preserve the actual 3.1.1 Jutsu rank/category and its native activities. Do not reconstruct rank from where an item was dropped or from old legacy fields.

## Ordinary Jutsu becomes a Classmod Art

**Symptom:** a normal Jutsu displays/behaves as an Art or receives Art rank rules.

**Cause seen before:** using a source/classmod field such as `system.sourceItem` for unrelated provenance.

**Prevention:** preserve N5EB-owned semantic fields; use project flags for project provenance.

## Formula works but sheet displays blank

**Symptom:** a class-mod attack/save formula computes but the visible numeric field is blank.

**Prevention:** when 3.1.1 UI expects a numeric `.value`, preserve the formula and synchronize the visible value rather than assuming formula text will render.

## Condition applies on cast instead of on failure/hit

**Symptom:** Burned, Corroded, Stunned, Slowed, etc. appears before the target rolls or before an attack hits.

**Prevention:** gate hostile effects on actual attack/save/damage results.

## AoE target leakage

**Symptom:** victim-specific Pain/mark/curse bonus is added to other creatures hit by the same AoE.

**Prevention:** store target identity and calculate per damaged actor/token.

## Duplicate bonuses

**Symptom:** AC/DR/damage/DC is larger than authored because automation adds a bonus already present on the custom actor or native Active Effect.

**Prevention:** inspect the actor/item/effects first and snapshot authored values before toggling replacements.

## Double resource spending

**Symptom:** Chakra or another resource is consumed by the native activity and again by custom automation.

**Prevention:** let native consumption own deterministic standard costs; custom code handles only alternative resource systems or explicit missing behavior.

## Every option is applied

**Symptom:** a choose-one Jutsu grants all Active Effect profiles.

**Prevention:** multi-profile native effects remain user/GM choices unless an exact deterministic handler selects one.

## Stale generated effects survive upgrades

**Symptom:** old module effects stack with new module behavior.

**Prevention:** stable module IDs, versioned migrations, flags on generated state, resync, and targeted cleanup.

## Cleanup destroys real content

**Symptom:** upstream/manual Active Effects or actor items disappear.

**Prevention:** cleanup only documents/effects bearing the module's own generation flags/IDs.

## Hand-built Actor JSON imports but does not work

**Symptom:** sheet appears populated, but buttons, activities, attacks, saves, advancement, Chakra, or effects fail.

**Prevention:** clone/import native 3.1.1 templates/documents and preserve activities/effects rather than recreating surface-level JSON.

## Forge file-path instructions fail

**Symptom:** user cannot find `Data/systems/n5eb` or cannot edit it.

**Prevention:** Forge is hosted; deploy modules/imports through Forge and resolve system content at runtime.

## Importer duplicates actors every run

**Symptom:** rerunning setup creates another complete roster.

**Prevention:** mark generated actors with stable project/version flags and replace/update only those actors.

## Static QA mistaken for playtest

**Symptom:** build is declared fully working after JSON/JS validation but fails on actual button/roll flow.

**Prevention:** record static QA and live Foundry/Forge click-through as separate validation states.
