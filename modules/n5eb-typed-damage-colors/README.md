# N5EB Typed Damage & Colors v1.0.0

A standalone module built for N5EB 3.1.1.

## What it does mechanically

N5EB's native resistance, immunity, vulnerability and damage-modification engine works from the **damage type attached to each DamageRoll**. This module does not replace that engine or multiply damage itself. Instead it keeps the roll pipeline explicitly typed so the native N5EB engine can resolve each component correctly.

At roll time it:

- preserves explicit N5EB damage types;
- repairs an omitted type when there is exactly one unambiguous type in the activity/roll data;
- preserves formula term flavors such as `[fire]` and `[psychic]` so N5EB can split mixed formulas during native damage aggregation;
- warns the GM if a component is genuinely untyped;
- does **not** guess when a Jutsu intentionally offers multiple alternative damage types.

This means a roll such as:

- 8d6 Fire
- 3d10 Psychic

remains two mechanically independent typed components. A creature with Fire Resistance but no Psychic Resistance has the Fire component reduced by N5EB while the Psychic component remains normal.

## Visual layer

The module reads the damage colors already configured by N5EB 3.1.1 and uses them in chat. It does not invent a second palette.

Examples include Fire, Psychic, Lightning, Necrotic, Cold, Poison, Earth, Wind, Chakra, and physical damage types.

The chat damage card gains:

- colored damage breakdown rows;
- a compact per-type summary such as `Fire 24` and `Psychic 16`;
- colored resistance/immunity/vulnerability indicators in the N5EB damage application tray;
- a red `Untyped` warning chip if a roll cannot be safely associated with a damage type.

## Compatibility with All-Class Automation

This is deliberately a **separate module ID** and does not require or modify the All-Class Automation module. The automation layer owns feature/Jutsu behavior; this module validates/presents the damage type and lets N5EB's native damage engine resolve resistance, immunity, vulnerability and damage modification.

Current live companion automation: `n5eb-jutsu-automation` **4.8.2**.

## Installation on Forge

Package this folder as a Foundry module ZIP with `module.json` at the ZIP root, import it through Forge, enable **N5EB Typed Damage & Colors**, then reload the world.

## Settings

Game Settings -> Configure Settings -> Module Settings contains switches for:

- master enable/disable;
- chat coloring;
- typed damage summary;
- untyped warnings;
- runtime type repair;
- damage-application indicator coloring;
- debug logging.

## Optional actor audit

From the browser console or a macro:

```js
game.n5ebTypedDamage.auditActor(canvas.tokens.controlled[0]?.actor);
```

This prints every damage part on the selected actor and labels it `typed`, `multiple-choice`, or `UNTYPED`.

## Non-destructive

The module does not edit official N5EB compendiums, actor Jutsu, or item damage data. Type repair is runtime-only.
