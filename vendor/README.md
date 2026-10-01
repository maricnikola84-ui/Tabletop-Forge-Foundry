# Vendored / Pinned Upstream Sources

These are source-reference submodules for the exact versions used by the current Naruto/Foundry stack. They are here for debugging and compatibility work; the normal Foundry/Forge package manager remains the deployment path for third-party modules.

## N5EB 3.1.1

`n5eb-3.1.1/` points at the official `ImBenni/n5eb` release-3.1.1 commit:

`32a64e7b36db7d6d6e63bc0f894cb0df475ea783`

The official packaged `n5eb.zip` is intentionally not committed because it is ~290 MB and duplicates the pinned source. Expected SHA-256:

`601159db6151963354bed55277b0bb8130f6d02fff768becc35559545b45a3a0`

## Current GitHub-hosted Foundry modules

- `modules/dice-tray-4.0.3/` — `mclemente/fvtt-dice-tray` at `3b846ce68471522ba684d9c1ead76e2fc615d21d`
- `modules/polyglot-2.9.2/` — `mclemente/fvtt-module-polyglot` at `0702874f1c57238bc635d78045b5c791924262f6`
- `modules/sequencer-4.2.3/` — `fantasycalendar/FoundryVTT-Sequencer` at `09a1c5b5689a8a049057927562586d668c100d30`
- `modules/forge-vtt-1.14.10/` — `ForgeVTT/fvtt-module-forge-vtt` at `1dbafc70eba05dd8600a0af5ae2842cf4ffa14d9`

## Current external sources not pinned as GitHub submodules

- Dice So Nice! **6.2.9** — official source is the `6.2.9` tag of Simone Ricciardi's GitLab project (`riccisi/foundryvtt-dice-so-nice`), not GitHub.
- Tokenizer 2 **1.2.5** — distributed by MrPrimate through the Foundry package/artifact infrastructure rather than an upstream GitHub repository used here.

## Clone

Clone this repository with submodules:

```bash
git clone --recurse-submodules https://github.com/maricnikola84-ui/Tabletop-Forge-Foundry.git
```

For an existing clone:

```bash
git submodule update --init --recursive
```

Upstream licenses and repositories remain authoritative for all third-party source.
