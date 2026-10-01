# The Forge Deployment Rules

## Forge is not a normal local filesystem

A Forge-hosted world should not be treated like a local Foundry install where the GM can freely browse and edit `Data/systems`, `Data/modules`, and `Data/worlds`.

Do not design instructions that require the user to manually replace files inside the hosted N5EB system directory.

## Preferred deployment model

- Package project code as normal Foundry modules.
- Install/update custom modules through Forge's module/import workflow.
- Resolve official N5EB compendiums and system assets at runtime.
- Package only project-authored assets that the custom module actually owns.
- Put custom uploaded art in the Forge Assets Library when appropriate.

## World imports and repairs

For large world/module imports, use Forge's Import Wizard rather than assuming filesystem access.

When updating or repairing an existing imported world:

- prefer repair/update/merge behavior;
- do not tell the user to delete the world unless a destructive reset is explicitly desired;
- preserve actor IDs and world references when possible;
- keep a backup/export before large migrations.

## Module upgrades

When a new build replaces an older module:

- keep the same module ID when it is intended as an in-place upgrade;
- disable older overlapping modules;
- avoid running cleanup before an upgrade if the new module contains migration logic for the old generated state;
- reload the world as GM after installing/updating;
- run the module's resync/diagnostic macro after migration when supplied.

## Assets

Generated actors may reference assets already installed under paths such as `systems/n5eb/...` when those assets are part of N5EB. Do not copy the whole upstream token library into a custom module just to make paths work.

For project-owned art, use module assets or the Forge Assets Library and use stable URLs/paths.

## Debugging on Forge

Useful debugging surfaces include:

- Foundry browser console;
- module diagnostics/audit functions;
- exported Actor/Item JSON;
- world/module export ZIPs;
- Forge Import Wizard reports;
- exact module/system manifests.

A successful static build does not prove Forge click-through behavior. Record live-session validation separately.
