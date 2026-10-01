# Current N5EB Project Stack

The goal is one authoritative owner for each responsibility. Overlapping automation is a common source of duplicate effects and broken hooks.

The exact current enabled snapshot is `config/current-naruto-world-modules.json`.

## Current Naruto world

1. **N5EB 3.1.1** — authoritative system and compendiums.
2. **N5EB 3.1.1 All-Class Automation 4.8.2 — Eight Gates + Charlie Stage 3** (`n5eb-jutsu-automation`) — sole authoritative automation layer.
3. **N5EB Typed Damage & Colors 1.0.0** (`n5eb-typed-damage-colors`) — typed-damage validation/presentation companion.
4. **N5EB - Konoha Shops 2.1.2** (`n5eb-konoha-shops`) — campaign shop/content layer.
5. **N5EB GM Quality of Life 1.0.0** (`n5eb-gm-qol`) — GM utility layer.
6. **Dice So Nice! 6.2.9**, **Dice Tray 4.0.3**, **Polyglot 2.9.2**, **Sequencer 4.2.3**, **Tokenizer 2 1.2.5** — current third-party UI/tooling stack.
7. **The Forge 1.14.10** (`forge-vtt`) — host integration supplied/enabled by The Forge.

Enemy Forge, Chunin Exams Finals, Kingmaker/Dominion and other content/development modules remain repository projects but are **not part of the enabled current-world snapshot unless deliberately enabled later**.

## Disable overlapping predecessors

Because current All-Class Automation 4.8.2 owns the Jutsu/save/hit/class-feature automation line, older separate copies must remain disabled, including:

- N5EB Jutsu Automation v2.x;
- N5EB Full Automation v3;
- old separate Jutsu Save & Hit Resolver builds;
- earlier All-Class v4.x builds when separately installed.

Do not run two generations of the same hook family simultaneously.

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

### All-Class Automation

Owns:

- deterministic runtime interpretation of supported Jutsu/class/feat mechanics;
- target/save/hit hooks;
- reversible runtime effects;
- optional-choice prompts;
- custom resource integration where explicitly authored;
- audit/resync/cleanup.

It does **not** own rewriting upstream N5EB compendium data.

### Typed Damage & Colors

Owns:

- preserving/repairing unambiguous runtime damage typing;
- damage-type presentation;
- warnings/audits for untyped components.

It does **not** multiply damage or replace N5EB resistance/immunity/vulnerability math.

### Konoha Shops

Owns campaign shop/content behavior. It should not take over Jutsu automation or mutate N5EB core compendium rules merely to implement shop behavior.

### GM Quality of Life

Owns GM convenience/workflow features. It should remain a utility layer, not a second automation engine.

### Enemy Forge

When enabled for development/generation, it owns:

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
