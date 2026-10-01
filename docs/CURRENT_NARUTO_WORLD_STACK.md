# Current Naruto World Stack — 2026-10-01

This file is the **authoritative current enabled-module snapshot** for the Naruto/N5EB world. It supersedes older README/module-stack notes when those notes list older automation builds or modules that are no longer enabled.

## Core

- Foundry VTT: **14.367**
- System: **N5EB 3.1.1** (`n5eb`)

## Enabled modules

| Module ID | Display name | Current version | Role |
|---|---|---:|---|
| `dice-so-nice` | Dice So Nice! | **6.2.9** | 3D dice presentation |
| `dice-calculator` | Dice Tray | **4.0.3** | chat dice tray / calculator |
| `n5eb-konoha-shops` | N5EB - Konoha Shops | **2.1.2** | campaign/N5EB shop content |
| `n5eb-jutsu-automation` | N5EB 3.1.1 All-Class Automation v4.8.2 — Eight Gates + Charlie Stage 3 | **4.8.2** | authoritative N5EB automation layer |
| `n5eb-gm-qol` | N5EB GM Quality of Life | **1.0.0** | N5EB GM convenience tools |
| `n5eb-typed-damage-colors` | N5EB Typed Damage & Colors | **1.0.0** | typed damage validation/presentation |
| `polyglot` | Polyglot | **2.9.2** | language/chat handling |
| `sequencer` | Sequencer | **4.2.3** | visual/audio sequencing API |
| `forge-vtt` | The Forge | **1.14.10** | Forge host integration; supplied by hosting environment |
| `tokenizer-2` | Tokenizer 2 | **1.2.5** | token image editor |

The machine-readable enabled-module copy is `config/current-naruto-world-modules.json`.

## Recovered project source archives

The exact current ZIPs for the three previously missing project modules were supplied and validated on **2026-10-01**. Their package SHA-256 hashes are now locked in `config/current-project-module-source-archives.json`:

- `n5eb-konoha-shops` 2.1.2 — `3a71bbe50c65a85d9c267e18cbacf8b62ec12d03ff4008c9a9d3e1e3c1e07108`
- `n5eb-gm-qol` 1.0.0 — `d6f9d30a0f4ed6fcca084bffc85b7e32945e0168b1cc1f2207a3c95a9274b0e9`
- `n5eb-jutsu-automation` 4.8.2 — `a75df489712768675c4de18abf414e39fdda3f444d1aa52f714d4289c291024e`

All JSON files in the supplied archives parsed successfully. JavaScript syntax validation passed for Konoha Shops, GM QoL, and all three All-Class Automation modules. The only `fetch()` use found in All-Class Automation loads its own local `data/feature-registry.json` and `data/jutsu-workflow-registry.json` files.

## Checked third-party pins

Where the source is on GitHub, the exact commits corresponding to the running version are pinned:

- Dice Tray 4.0.3 — `mclemente/fvtt-dice-tray` — `3b846ce68471522ba684d9c1ead76e2fc615d21d`
- Polyglot 2.9.2 — `mclemente/fvtt-module-polyglot` — `0702874f1c57238bc635d78045b5c791924262f6`
- Sequencer 4.2.3 — `fantasycalendar/FoundryVTT-Sequencer` — `09a1c5b5689a8a049057927562586d668c100d30`
- The Forge 1.14.10 — `ForgeVTT/fvtt-module-forge-vtt` — `1dbafc70eba05dd8600a0af5ae2842cf4ffa14d9`
- Dice So Nice! 6.2.9 is the published GitLab tag `6.2.9`.
- Tokenizer 2 1.2.5 is a published Foundry package build from MrPrimate's distribution infrastructure.

## Project module identity

### `n5eb-jutsu-automation` — 4.8.2

This is the current automation authority. Older v2/v3/v4.x builds are historical and must not be enabled beside it. The exact recovered manifest confirms the display title **N5EB 3.1.1 All-Class Automation v4.8.2 — Eight Gates + Charlie Stage 3**.

The recovered build includes staged Eight Inner Gates runtime automation, cumulative gate bonuses, Fatigue and Hit Dice handling, Ninjutsu/Genjutsu restrictions while gated, Shimon safety, Charlie Twisted Cloak Stage 3, B/P/S Haki DR 25, direct 2:1 Twisted Chakra routing, enemy-Jutsu automation, and Foundry 14 effect-duration handling.

All durable automation rules in this repository still apply: native N5EB activities/effects first, no invented source mechanics, result-gated hostile conditions, per-target state, reversible generated effects, player prompts for optional resource spending, and no duplicate application of sheet-authored values.

### `n5eb-typed-damage-colors` — 1.0.0

Current source is preserved in `modules/n5eb-typed-damage-colors/`. It remains separate from the main automation module and should continue to let N5EB's native resistance/immunity/vulnerability engine own the actual damage modification.

### `n5eb-konoha-shops` — 2.1.2

The exact current package has now been recovered and validated. Its manifest confirms the player-accessible Konoha marketplace, GM-validated socket purchases, official priced N5EB/T7 catalog support, and the 2.1.2 player-purchase permission fix.

### `n5eb-gm-qol` — 1.0.0

The exact current package has now been recovered and validated. It contains the Character QA audit, Session Dashboard, and Rest & Resource Assistant and is intentionally a GM utility layer rather than a second automation engine.

## Current-stack rule

When an older project README says to enable a module that is **not** in the table above, treat that instruction as historical unless the current stack is deliberately changed. In particular, old v4.7 documentation should not be used as the current enabled-module list.
