# Tabletop Forge / Foundry

Private-workbench-style repository for Foundry VTT / The Forge tools, modules, automation, conversion notes, and durable implementation rules.

## Primary target: N5EB / Naruto 5e 3.1.1

This repository is built first and foremost around **N5EB 3.1.1** on Foundry VTT / The Forge.

The exact upstream N5EB 3.1.1 source is pinned as a Git submodule at `vendor/n5eb-3.1.1` to the official `ImBenni/n5eb` release commit for **release-3.1.1**. The upstream system is MIT-licensed; its own license and attribution remain authoritative.

### Core rule

**Use the installed N5EB 3.1.1 system and compendiums as the source of truth.** Do not invent feat, clan, class, jutsu, item, activity, condition, or advancement data when the real N5EB document exists.

## Repository areas

- `vendor/n5eb-3.1.1/` — exact upstream N5EB 3.1.1 source, pinned by submodule.
- `docs/` — durable Foundry / Forge / N5EB implementation knowledge learned through the project.
- `modules/` — custom modules and automation source.
- `macros/` — reusable GM / repair / audit macros.
- `actors/` — project-authored Actor JSON and conversion examples only.
- `world-tools/` — import, cleanup, migration, and diagnostics tooling.

## Current module stack philosophy

For an N5EB world, prefer one authoritative module for each job rather than overlapping automation:

1. N5EB 3.1.1 system.
2. One current All-Class/Jutsu automation module.
3. Typed Damage & Colors when used by the campaign.
4. Enemy Forge for runtime adversary generation.
5. Tobirama's Legacy or other campaign modules only when their responsibilities do not duplicate the automation layer.

Old automation modules that overlap the current stack should stay disabled.

## Safety principles

- Never rewrite official compendium documents merely to automate them.
- Prefer runtime effects, enchantments, actor-owned copies, flags, and reversible overlays.
- Prefer native N5EB activities/effects before parsing prose.
- Optional/resource-spending features must prompt instead of silently spending resources.
- Multiple-choice native effects should never all auto-apply by default.
- Offensive conditions require the actual trigger: hit, failed save, critical failure, or other explicit rule condition.
- Generated effects must be identifiable and removable without touching manually-authored or upstream data.
- Every automation feature should have audit, resync, and cleanup/rollback paths.

## Forge note

The Forge is not a normal local filesystem. Do not design workflows that require manually editing `Data/systems/n5eb` on the hosted instance. Modules should resolve installed compendiums/assets at runtime or package their own project-authored assets.
