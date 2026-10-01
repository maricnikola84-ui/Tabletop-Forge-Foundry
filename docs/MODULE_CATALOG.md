# N5EB / Foundry Module Catalog

This catalog distinguishes the **current live Naruto world stack** from older recovered development archives. The current enabled list is locked in `config/current-naruto-world-modules.json` and documented in `docs/CURRENT_NARUTO_WORLD_STACK.md`.

## Core system

### N5EB 3.1.1

Primary system target. The repository pins the official upstream source at `vendor/n5eb-3.1.1`.

## Current live project modules

### N5EB 3.1.1 All-Class Automation — 4.8.2

- Module ID: `n5eb-jutsu-automation`
- Current display build: **N5EB 3.1.1 All-Class Automation v4.8.2 — Eight Gates + Charlie Stage 3**
- This is the authoritative automation layer in the live world.
- Older Jutsu Automation, Full Automation, Save & Hit Resolver, and earlier All-Class v4.x builds are historical and must not be enabled beside it.
- The working Library currently contains source/archive material through the older v4.7.x line, but the exact 4.8.2 source ZIP has not yet been recovered into the Library. The repository therefore records the real live identity/version without fabricating v4.8.2 source.

### N5EB - Konoha Shops — 2.1.2

- Module ID: `n5eb-konoha-shops`
- Current live version: **2.1.2**
- Exact source archive has not yet been recovered into the working Library; identity/version are preserved here from the current live world.

### N5EB GM Quality of Life — 1.0.0

- Module ID: `n5eb-gm-qol`
- Current live version: **1.0.0**
- Exact source archive has not yet been recovered into the working Library; identity/version are preserved here from the current live world.

### N5EB Typed Damage & Colors — 1.0.0

- Module ID: `n5eb-typed-damage-colors`
- Current live version: **1.0.0**
- The exact project source recovered from the current module archive is now committed under `modules/n5eb-typed-damage-colors/`.
- It remains a separate companion to All-Class Automation and lets N5EB's native resistance/immunity/vulnerability engine own actual damage modification.

## Current live third-party / host modules

- Dice So Nice! **6.2.9** (`dice-so-nice`)
- Dice Tray **4.0.3** (`dice-calculator`)
- Polyglot **2.9.2** (`polyglot`)
- Sequencer **4.2.3** (`sequencer`)
- The Forge **1.14.10** (`forge-vtt`) — host integration
- Tokenizer 2 **1.2.5** (`tokenizer-2`)

Exact checked GitHub commit pins are recorded in the current-stack JSON for Dice Tray, Polyglot, Sequencer and The Forge. Dice So Nice's official source is on GitLab. Tokenizer 2 is distributed through MrPrimate's package/artifact infrastructure.

## Development/support modules not currently enabled in the screenshot

### N5EB Enemy Forge

Latest recovered build in the working Library: **1.0.4 UI/Jutsu Fix**.

Purpose:

- native N5EB Shinobi adversaries;
- native monster adversaries;
- group/encounter generation;
- party-aware scaling;
- real installed N5EB passives, traits, class-mods, Jutsu and token paths;
- runtime generation without bundling official N5EB compendium content.

### N5EB Chunin Exams Finals

Latest recovered build in the working Library: **1.0.3**.

Creates the three-court finals arena and generated rival roster using native N5EB class/subclass/clan/class-mod/feature/Jutsu documents from the installed system.

## Other project lines

The working archive also contains:

- N5EB Kingmaker / Dominion of the River Lands conversion work;
- world diagnostics and cleanup tooling;
- Naruto mission/event-table modules;
- Story Map Library tooling;
- actor conversion/repair exports;
- older All-Class/Jutsu automation builds;
- older Tobirama's Legacy compatibility work.

Historical files are useful as development evidence, but the current live stack above wins whenever an older README disagrees with it.
