# N5EB Enemy Forge Rules

Enemy Forge exists to generate legal native N5EB adversaries from the installed 3.1.1 content rather than fabricating approximate stat blocks.

## Native adversary model

Use the N5EB adversary fields for:

- level/rank;
- Minion / Standard / Elite / Solo class;
- combat role;
- discipline;
- clan/affiliation;
- special roles such as Iconic/Epic where supported;
- Tenacity / Elite Actions;
- adversary passives and traits.

## Common roles

Build around actual combat function rather than raw power:

- Caster
- Controller
- Defender
- Generalist
- Lurker
- Striker
- Supporter

Disciplines commonly include Ninjutsu, Genjutsu, and Taijutsu.

## Jutsu selection

Pull real Jutsu from the installed compendiums.

Selection should be coherent with level/rank, role, discipline, clan, affinity/theme, and class-mod path. Prefer a useful action economy before filling the rest of the kit:

1. a meaningful Action option;
2. a meaningful Bonus Action when appropriate;
3. a meaningful Reaction when appropriate;
4. then fill utility, defense, mobility, control, healing, setup, and damage according to role.

Extensive builds may carry large kits; Simple/Normal builds should reduce quantity without destroying the role identity.

## Trait composition

Use real adversary passives/traits from N5EB. Do not stack a pile of traits that all inflate the same axis.

As a design guard, avoid selecting more than roughly two independent chosen trait bonuses into the same broad statistic axis without a deliberate boss reason:

- damage;
- attack;
- AC/defense;
- DC;
- saves;
- HP;
- movement.

## Class-mod adversaries

Class-mod trait families such as Sage Mode, Sealed Beast, Cursed Seal, Mangekyo Sharingan, Rinnegan, Tenseigan, etc. must be discovered from the installed pack and validated against the current N5EB source. Do not hard-code a fake version because the name is familiar.

## Party-aware encounter mode

When party-aware generation is requested, compute the current player party average level and construct the encounter around that baseline. A group generator should create multiple complementary roles rather than cloning one damage profile.

Useful group presets include:

- Balanced
- Assault
- Ambush
- Control
- Attrition
- Boss + Guards
- Monster Pack
- Random

## Monster adversaries

For monsters, use the appropriate N5EB type passive and preserve useful native natural-action structure. Supported conceptual families include Aberration, Beast, Celestial, Construct, Demon, Monstrosity, Mutant, Plant, Sage Creature, and Undead when present in the installed system.

## Encounter Actor

When requested, create a native N5EB `encounter` Actor containing/generated from the generated NPC members rather than inventing a separate foreign encounter format.

## Token art

Do not bundle the N5EB token library. Link to the installed system's own token assets such as `systems/n5eb/tokens/...`, or use project-authored art.

## Validation

A generated actor must be checked for:

- legal level/rank content;
- real compendium source documents;
- valid activity/effect data;
- coherent action economy;
- no impossible clan/affinity/path conflicts;
- no invented feature names;
- no duplicated bonuses already supplied by native passives/traits.
