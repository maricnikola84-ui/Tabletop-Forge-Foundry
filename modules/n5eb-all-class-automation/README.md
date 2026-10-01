# N5EB 3.1.1 All-Class Automation

## Current live build

- Module ID: `n5eb-jutsu-automation`
- Version: **4.8.2**
- Display title: **N5EB 3.1.1 All-Class Automation v4.8.2 — Eight Gates + Charlie Stage 3**
- System target: **N5EB 3.1.1**
- Role: authoritative automation layer for the current Naruto world.

## Recovered source package

The exact current package was recovered on 2026-10-01:

`N5EB-All-Class-Automation-v4.8.2-Eight-Gates-FINAL.zip`

SHA-256:

`a75df489712768675c4de18abf414e39fdda3f444d1aa52f714d4289c291024e`

The archive contains 26 files, including the three runtime modules, the generated N5EB 3.1.1 feature and Jutsu-workflow registries, support macros, Charlie audit data, Source Integrity notes, and validation reports through v4.8.2. Per-file hashes are recorded in `../../config/current-project-module-source-archives.json`.

Static validation against the supplied archive passed: all JSON parses, all three `.mjs` files pass Node syntax validation, and the only `fetch()` calls load the module's own local registry files.

### Package README note

The ZIP's bundled `README.md` still begins with the older **v4.8.1 — Charlie Effect Race Hotfix** heading, then contains the v4.8.2 Eight Inner Gates section later in the file. This is a documentation-heading carry-over, not a package-version mismatch: `module.json`, `BUILD_REPORT.json`, the ZIP filename, and `VALIDATION_REPORT_v4.8.2.txt` all identify the recovered build as **4.8.2**. For deployment/version checks, `module.json` is authoritative.

## v4.8.2 focus

The recovered build confirms:

- staged Eight Inner Gates from Kaimon through Shimon;
- cumulative STR, CON, speed and AC changes;
- one-minute gate state with duration refresh on advancement;
- Ninjutsu/Genjutsu restrictions while a gate is active;
- Kyumon/Keimon optional Hit Dice recovery and repeat-use Hit Die locking;
- accumulated Fatigue and source-rate recovery;
- explicit Shimon warning with Actor preservation and HP set to 0 when Shimon ends;
- Charlie Twisted Cloak Stage 3;
- B/P/S Haki DR 25;
- direct 2:1 Twisted Chakra cost handling;
- retained enemy-Jutsu and Foundry 14 duration repairs;
- no rewriting of original Eight Gates feat documents.

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

See `../../docs/AUTOMATION_RULES.md`, `../../docs/N5EB_3.1.1_DEVELOPER_REFERENCE.md`, and `../../config/current-project-module-source-archives.json`.
