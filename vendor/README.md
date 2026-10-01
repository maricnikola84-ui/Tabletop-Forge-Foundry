# Vendored / Pinned Upstream Systems

## N5EB 3.1.1

`n5eb-3.1.1/` is a Git submodule pointing at the official `ImBenni/n5eb` repository, pinned to the commit used by upstream release `release-3.1.1`:

`32a64e7b36db7d6d6e63bc0f894cb0df475ea783`

Clone this repository with submodules:

```bash
git clone --recurse-submodules https://github.com/maricnikola84-ui/Tabletop-Forge-Foundry.git
```

For an existing clone:

```bash
git submodule update --init --recursive
```

The official packaged `n5eb.zip` for 3.1.1 is intentionally not committed here because it is ~290 MB and duplicates the pinned source. Its expected SHA-256 is:

`601159db6151963354bed55277b0bb8130f6d02fff768becc35559545b45a3a0`

Upstream repository and release remain the authoritative distribution source.
