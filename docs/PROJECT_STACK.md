# Recommended N5EB Project Stack

The goal is one authoritative owner for each responsibility. Overlapping automation is a common source of duplicate effects and broken hooks.

## Core

1. **N5EB 3.1.1** — authoritative system and compendiums.
2. **Current All-Class / Jutsu Automation** — one module only from that automation line.
3. **N5EB Typed Damage & Colors** — when the campaign uses typed damage presentation/processing.
4. **Enemy Forge** — runtime native adversary/encounter generation.
5. **Tobirama's Legacy / campaign modules** — only when they do not duplicate core automation responsibilities.

## Disable overlapping predecessors

When the current All-Class Automation already includes Jutsu automation and the Save & Hit Resolver, older separate copies should remain disabled. Do not run two versions of the same hook family simultaneously.

## Upgrade rule

If a module is an in-place successor, keep the same module ID and migrate its own generated state. Do not create a second module ID just to represent a new version unless coexistence is intentional.

## Responsibility boundaries

### N5EB system

Owns:

- native Actor/Item schemas;
- compendium content;
- Jutsu ranks/costs/activities;
- standard rolls/conditions;
- base advancement/content rules.

### Automation module

Owns:

- deterministic runtime interpretation of missing/complex feature behavior;
- target/save/hit hooks;
- reversible runtime effects;
- prompts for optional mechanics;
- audit/resync/cleanup.

It does **not** own rewriting upstream compendium data.

### Enemy Forge

Owns:

- selecting real installed source content;
- constructing native adversary actors/encounters;
- role/theme/party-aware generation;
- generation UI/diagnostics.

It does **not** bundle N5EB compendium documents or the N5EB token library.

### Campaign/content modules

Own:

- project-authored actors/scenes/maps/journals/macros/assets;
- campaign-specific imported content;
- campaign setup/update routines.

They should resolve N5EB source documents at runtime when practical.
