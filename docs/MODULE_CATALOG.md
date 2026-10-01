# N5EB / Foundry Module Catalog

This catalog distinguishes the **current live Naruto world stack** from older recovered development archives. The current enabled list is locked in `config/current-naruto-world-modules.json`; exact recovered project-package hashes are locked in `config/current-project-module-source-archives.json`.

## Core system

### N5EB 3.1.1

Primary system target. The repository pins the official upstream source at `vendor/n5eb-3.1.1`.

## Current live project modules

### N5EB 3.1.1 All-Class Automation — 4.8.2

- Module ID: `n5eb-jutsu-automation`
- Display build: **N5EB 3.1.1 All-Class Automation v4.8.2 — Eight Gates + Charlie Stage 3**
- Authoritative automation layer in the live world.
- Exact recovered package SHA-256: `a75df489712768675c4de18abf414e39fdda3f444d1aa52f714d4289c291024e`.
- Package contains the current runtime scripts, feature/Jutsu registries, v4.7.8 support macros, Charlie feature audit, Source Integrity notes, and validation reports through v4.8.2.
- v4.8.2 validation specifically confirms ordered Kaimon→Shimon progression, cumulative STR/CON/speed/AC, gate-duration refresh, casting restrictions, Kyumon/Keimon optional Hit Dice recovery, repeat-use Hit Die locking, accumulated Fatigue/recovery, explicit Shimon confirmation/death handling, and no rewriting of original feat documents.
- Older Jutsu Automation, Full Automation, Save & Hit Resolver, and earlier All-Class v4.x builds are historical and must not be enabled beside it.

### N5EB - Konoha Shops — 2.1.2

- Module ID: `n5eb-konoha-shops`
- Current live version: **2.1.2**
- Exact recovered package SHA-256: `3a71bbe50c65a85d9c267e18cbacf8b62ec12d03ff4008c9a9d3e1e3c1e07108`.
- Package contains `module.json`, README, `scripts/main.js`, and `styles/shop.css`.
- 2.1.2 registers its player-to-GM socket channel so player purchases can be validated and completed by the active GM without the prior Access Denied failure.

### N5EB GM Quality of Life — 1.0.0

- Module ID: `n5eb-gm-qol`
- Current live version: **1.0.0**
- Exact recovered package SHA-256: `d6f9d30a0f4ed6fcca084bffc85b7e32945e0168b1cc1f2207a3c95a9274b0e9`.
- Package contains `module.json`, README, and `scripts/main.js`.
- Provides the Character QA audit, Session Dashboard, and Rest & Resource Assistant while keeping the toolset non-destructive and GM-focused.

### N5EB Typed Damage & Colors — 1.0.0

- Module ID: `n5eb-typed-damage-colors`
- Current live version: **1.0.0**
- Project source is committed under `modules/n5eb-typed-damage-colors/`.
- It remains a separate companion to All-Class Automation and lets N5EB's native resistance/immunity/vulnerability engine own actual damage modification.

## Validation of recovered project packages

The three newly recovered packages were inspected directly:

- ZIP integrity: passed.
- All JSON files: parse successfully.
- `n5eb-konoha-shops/scripts/main.js`: Node syntax validation passed.
- `n5eb-gm-qol/scripts/main.js`: Node syntax validation passed.
- All-Class `scripts/main.mjs`, `scripts/charlie-complete.mjs`, and `scripts/feature-engine-v47.mjs`: Node syntax validation passed.
- All-Class network-call review found only local `fetch()` calls for its own two data registries.

Per-file SHA-256 values for the packages are recorded in `config/current-project-module-source-archives.json`.

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

The working archive also contains Kingmaker/Dominion conversion work, world diagnostics and cleanup tooling, Naruto mission/event-table modules, Story Map Library tooling, actor repair exports, older All-Class/Jutsu builds, and older Tobirama's Legacy compatibility work.

Historical files are useful as development evidence, but the current live stack above wins whenever an older README disagrees with it.
