# N5EB / Foundry Module Catalog

This is the current project-side catalog recovered from our working Library. It is not a claim that every archive below is the newest possible future build; check this repository before deploying.

## Core system

### N5EB 3.1.1

Primary system target. The repository pins the official upstream source at `vendor/n5eb-3.1.1`.

## Current automation line

### N5EB All-Class Automation 3.1.1

Latest recovered build in the working archive:

- `v4.7.8 Homebrew Buff Runtime`
- same automation lineage/module ID as the earlier Jutsu/Full/All-Class automation work
- incorporates the modern Jutsu workflow, save/hit resolution, target-aware effects, class-feature automation, rank repair, Chakra-resource handling, and project-specific deterministic handlers developed across the v4.x line

Deployment rule: use **one** current build from this lineage. Do not also enable the older standalone Jutsu Automation or Save & Hit Resolver modules when their logic is already merged.

## Enemy generation

### N5EB Enemy Forge

Latest recovered build:

- `1.0.4 UI/Jutsu Fix`

Purpose:

- native N5EB Shinobi adversaries;
- native monster adversaries;
- group/encounter generation;
- party-aware scaling;
- real installed N5EB passives, traits, class-mods, Jutsu and token paths;
- runtime generation without bundling official N5EB compendium content.

## Campaign modules

### N5EB Chunin Exams Finals

Latest recovered build:

- `1.0.3`

Creates the three-court finals arena and a generated rival roster using native N5EB class/subclass/clan/class-mod/feature/Jutsu documents from the installed system.

## Other important project lines

The working archive also contains:

- N5EB Kingmaker / Dominion of the River Lands conversion work;
- world diagnostics and cleanup tooling;
- Naruto mission/event-table modules;
- Story Map Library tooling;
- actor conversion/repair exports;
- Typed Damage & Colors integration work;
- Tobirama's Legacy compatibility work.

As these are promoted into source control, each should receive its own folder, README, version notes, and validation report rather than dumping historical ZIPs into the root repository.
