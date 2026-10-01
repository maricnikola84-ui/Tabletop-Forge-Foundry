# N5EB 3.1.1 All-Class Automation

## Current live build

- Module ID: `n5eb-jutsu-automation`
- Version: **4.8.2**
- Display title: **N5EB 3.1.1 All-Class Automation v4.8.2 — Eight Gates + Charlie Stage 3**
- System target: **N5EB 3.1.1**
- Role: authoritative automation layer for the current Naruto world.

## Source status

The exact **4.8.2** package/source has not yet been recovered into the working Library. Older v4.7.x packages and documentation are available as development history, but they are **not** copied here and relabeled as 4.8.2.

When the live 4.8.2 ZIP/source is exported, place the real source in this directory and validate it against `vendor/n5eb-3.1.1` before changing behavior.

## Non-negotiable implementation rules

- Native N5EB 3.1.1 activities/effects before prose parsing.
- No invented official Jutsu/features/conditions/ranks/costs.
- Hit/save/critical-failure conditions wait for the real result.
- Target-specific effects remain target-specific in AoE damage.
- Optional resource spending and player choices prompt rather than silently firing.
- Actor-authored values are not double-applied.
- Generated state is flagged and reversible.
- Audit, resync and cleanup paths remain available.
- Typed Damage & Colors remains a separate companion module.

See `docs/AUTOMATION_RULES.md` and `docs/N5EB_3.1.1_DEVELOPER_REFERENCE.md` for the durable rule set.
