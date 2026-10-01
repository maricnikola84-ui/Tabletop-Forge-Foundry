# Validation Checklist

Use this before calling a Foundry/N5EB deliverable finished.

## Static checks

- JavaScript parses successfully.
- JSON parses successfully.
- `module.json` / `system.json` manifest parses and uses the intended IDs/versions.
- ZIP integrity passes.
- ZIP root is correct: the manifest is where Foundry/Forge expects it, not buried one directory too deep.
- Required scripts/styles/templates/assets listed in the manifest actually exist.
- Compatibility fields match the intended Foundry/N5EB versions.

## N5EB checks

- Target system is `n5eb`.
- Minimum N5EB version is appropriate; for this repository's primary stack, verify against 3.1.1.
- Real Jutsu/items/features come from installed/pinned N5EB documents.
- Native activities and effects are preserved.
- Jutsu rank and Chakra cost are not accidentally rewritten.
- Ordinary Jutsu are not accidentally classified as Classmod Arts.
- `sourceItem` is not abused for generic provenance.
- Conditions use native N5EB condition behavior where possible.
- ItemGrant/ItemChoice advancement is handled legally.

## Automation checks

- No hostile condition applies before its real hit/save trigger.
- AoE target-linked effects do not leak between targets.
- Optional resource-spending mechanics prompt instead of silently spending.
- Multi-profile/choice effects do not all fire at once.
- Concentration and duration cleanup works.
- Existing authored bonuses are not applied a second time.
- Module-created effects are flagged/identifiable.
- Cleanup removes only module-created state.
- Resync can rebuild state after actor item changes.
- Audit reports unsupported/ambiguous mechanics rather than inventing them.

## Actor/import checks

- Every imported feat/Jutsu/item resolves to an actual source document unless explicitly project-authored.
- Level/prerequisite filters are enforced.
- Mutually exclusive paths are not combined.
- Clan abilities and elemental restrictions do not contradict each other.
- Re-running an importer replaces only its own generated content and leaves unrelated actors alone.

## UI checks

- Dialog fits the expected viewport.
- Internal scrolling works.
- Text is readable under the active theme.
- Buttons remain clickable after rerender.
- No duplicate listeners/double execution.

## Live validation

Static validation and live validation are different statuses.

For live validation, actually test in Foundry/Forge:

- item/Jutsu use;
- attack rolls;
- save rolls;
- damage cards;
- resource consumption;
- conditions/effects;
- concentration expiration;
- rest recovery;
- prompts/buttons;
- import/update flow.

If live click-through was not performed, say so rather than treating static QA as equivalent.
