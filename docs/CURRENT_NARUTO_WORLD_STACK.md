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

The machine-readable copy is `config/current-naruto-world-modules.json`.

## Checked third-party pins

The versions shown in the current world are real published module versions. Where the source is on GitHub, the exact commits corresponding to the running version have been checked:

- Dice Tray 4.0.3 — `mclemente/fvtt-dice-tray` — `3b846ce68471522ba684d9c1ead76e2fc615d21d`
- Polyglot 2.9.2 — `mclemente/fvtt-module-polyglot` — `0702874f1c57238bc635d78045b5c791924262f6`
- Sequencer 4.2.3 — `fantasycalendar/FoundryVTT-Sequencer` — `09a1c5b5689a8a049057927562586d668c100d30`
- The Forge 1.14.10 — `ForgeVTT/fvtt-module-forge-vtt` — `1dbafc70eba05dd8600a0af5ae2842cf4ffa14d9`
- Dice So Nice! 6.2.9 is the published GitLab tag `6.2.9` (official source is GitLab rather than GitHub).
- Tokenizer 2 1.2.5 is a published Foundry VTT package build from MrPrimate's distribution infrastructure.

## Project module identity

The four project modules currently in actual play are:

### `n5eb-jutsu-automation` — 4.8.2

This is the current automation authority. Older v2/v3/v4.x builds are historical and must not be enabled beside it. The current display title explicitly identifies the **Eight Gates + Charlie Stage 3** build.

All durable automation rules in this repository still apply: native N5EB activities/effects first, no invented source mechanics, result-gated hostile conditions, per-target state, reversible generated effects, player prompts for optional resource spending, and no duplicate application of sheet-authored values.

### `n5eb-typed-damage-colors` — 1.0.0

Current source is preserved in `modules/n5eb-typed-damage-colors/`. It remains separate from the main automation module and should continue to let N5EB's native resistance/immunity/vulnerability engine own the actual damage modification.

### `n5eb-konoha-shops` — 2.1.2

This is part of the current live world stack. Its exact source archive has not yet been recovered into the working Library, so this repository records its current identity/version rather than fabricating source files.

### `n5eb-gm-qol` — 1.0.0

This is part of the current live world stack. Its exact source archive has not yet been recovered into the working Library, so this repository records its current identity/version rather than fabricating source files.

## Current-stack rule

When an older project README says to enable a module that is **not** in the table above, treat that instruction as historical unless the current stack is deliberately changed. In particular, old v4.7 documentation should not be used as the current enabled-module list.
