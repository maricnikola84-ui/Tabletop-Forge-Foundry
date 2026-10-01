# Foundry / Forge UI Rules

## DialogV2 containment

Foundry/Forge dialog rendering may replace or restructure the outer form/container. Do not rely on styling an outer `<form>` that may disappear.

Use one persistent inner root owned by the module, for example:

```html
<div class="n5eb-enemy-forge">...</div>
```

Scope module CSS beneath that root.

## Readability

Set explicit foreground/background/border colors for custom controls instead of depending on the active Foundry theme. Verify both dark and light-ish theme conditions where possible.

Do not allow labels, option text, or buttons to become unreadable because they inherited theme variables unexpectedly.

## Layout

- Desktop: two-column layouts are fine when they materially reduce scrolling.
- Narrow dialogs: collapse to one column.
- Use internal scrolling for long panels rather than making the whole window exceed the viewport.
- Keep primary buttons/actions visible near the top where possible.
- Put long explanations in tooltips/details rather than permanently consuming half the window.

## Dynamic content

When rebuilding a UI after selections change:

- keep the root node stable;
- avoid duplicate event listeners;
- preserve user selections when valid;
- refresh only affected sections when practical;
- do not reset the form merely because one dropdown changed.

## Forge-specific check

A UI that renders correctly in a local static test is not automatically verified on Forge. Test the live hosted dialog, especially scrolling, focus, dropdowns, button clicks, and any browser-console APIs.
