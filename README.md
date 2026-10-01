# Tabletop Forge / Foundry

Workbench repository for Foundry VTT / The Forge tools, modules, automation, conversion notes, and durable implementation rules learned through our campaigns and development work.

## Primary target: N5EB / Naruto 5e 3.1.1

This repository is built first and foremost around **N5EB 3.1.1** on Foundry VTT / The Forge.

The exact upstream N5EB 3.1.1 source is pinned as a Git submodule at `vendor/n5eb-3.1.1` to the official `ImBenni/n5eb` release commit for **release-3.1.1**:

`32a64e7b36db7d6d6e63bc0f894cb0df475ea783`

The official 3.1.1 release ZIP has SHA-256:

`601159db6151963354bed55277b0bb8130f6d02fff768becc35559545b45a3a0`

The upstream system is MIT-licensed; its own license and attribution remain authoritative.

### Clone with pinned sources

```bash
git clone --recurse-submodules https://github.com/maricnikola84-ui/Tabletop-Forge-Foundry.git
```

For an existing clone:

```bash
git submodule update --init --recursive
```

### Core rule

**Use the installed/pinned N5EB 3.1.1 system and compendiums as the source of truth.** Do not invent feat, clan, class, Jutsu, item, activity, condition, advancement, rank, or Chakra-cost data when the real N5EB document exists.

## Repository areas

- `vendor/n5eb-3.1.1/` — exact upstream N5EB 3.1.1 source, pinned by submodule.
- `vendor/modules/` — exact source pins for current GitHub-hosted third-party modules.
- `config/` — machine-readable current world/module snapshots.
- `docs/` — durable Foundry / Forge / N5EB implementation knowledge learned through the project.
- `modules/` — custom modules and automation source/current module identities.
- `macros/` — reusable GM / repair / audit macros.
- `actors/` — project-authored Actor JSON and conversion examples only.
- `world-tools/` — import, cleanup, migration, and diagnostics tooling.
- `LICENSES/` — third-party license notices relevant to pinned/derived source.

## Current Naruto world — 2026-10-01

Core: **Foundry 14.367 + N5EB 3.1.1**.

Current enabled modules:

1. Dice So Nice! **6.2.9**
2. Dice Tray **4.0.3**
3. N5EB - Konoha Shops **2.1.2**
4. **N5EB 3.1.1 All-Class Automation v4.8.2 — Eight Gates + Charlie Stage 3**
5. N5EB GM Quality of Life **1.0.0**
6. N5EB Typed Damage & Colors **1.0.0**
7. Polyglot **2.9.2**
8. Sequencer **4.2.3**
9. The Forge **1.14.10**
10. Tokenizer 2 **1.2.5**

The exact module IDs and checked upstream commits are stored in `config/current-naruto-world-modules.json`. The readable explanation is `docs/CURRENT_NARUTO_WORLD_STACK.md`.

The current All-Class Automation **4.8.2** is the sole automation authority. Older Jutsu Automation, Full Automation, separate Save & Hit Resolver, and earlier All-Class v4.x builds must remain disabled when 4.8.2 is active.

## Key documentation

Start here:

- `docs/CURRENT_NARUTO_WORLD_STACK.md` — actual current enabled module stack.
- `docs/N5EB_3.1.1_SOURCE_PIN.md` — exact upstream release/version/checksum.
- `docs/N5EB_3.1.1_DEVELOPER_REFERENCE.md` — schema/hooks/activity notes learned from 3.1.1.
- `docs/AUTOMATION_RULES.md` — source integrity, hit/save gating, target linking, prompts, rollback.
- `docs/ACTOR_AND_COMPENDIUM_RULES.md` — how to build/import legal N5EB actors.
- `docs/ENEMY_FORGE_RULES.md` — adversary and encounter generation rules.
- `docs/FORGE_DEPLOYMENT_RULES.md` — Forge-specific deployment/import rules.
- `docs/UI_RULES.md` — DialogV2 / responsive UI lessons.
- `docs/KNOWN_FAILURE_MODES.md` — recurring bugs and their prevention.
- `docs/VALIDATION_CHECKLIST.md` — static QA versus real Foundry/Forge testing.
- `docs/PROJECT_STACK.md` — current responsibility boundaries.
- `docs/MODULE_CATALOG.md` — current and historical project module lines.

## Safety principles

- Never rewrite official compendium documents merely to automate them.
- Prefer runtime effects, enchantments, actor-owned copies, flags, and reversible overlays.
- Prefer native N5EB activities/effects before parsing prose.
- Optional/resource-spending features must prompt instead of silently spending resources.
- Multiple-choice native effects should never all auto-apply by default.
- Offensive conditions require the actual trigger: hit, failed save, critical failure, or other explicit rule condition.
- Target-specific effects must stay linked to the correct target and never leak across AoE victims.
- Generated effects must be identifiable and removable without touching manually-authored or upstream data.
- Every automation feature should have audit, resync, and cleanup/rollback paths.
- Static validation and live Forge/Foundry click-through are separate validation states.

## Forge note

The Forge is not a normal local filesystem. Do not design workflows that require manually editing `Data/systems/n5eb` on the hosted instance. Modules should resolve installed compendiums/assets at runtime or package their own project-authored assets. Use Forge's module/import workflow and Import Wizard for deployment/repair work.
