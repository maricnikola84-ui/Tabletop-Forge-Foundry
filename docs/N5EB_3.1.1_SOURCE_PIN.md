# N5EB 3.1.1 Source Pin

This repository targets **N5EB / Naruto 5e Benni 3.1.1** as its primary Foundry system.

## Authoritative upstream

- Repository: `ImBenni/n5eb`
- Release tag: `release-3.1.1`
- Release commit: `32a64e7b36db7d6d6e63bc0f894cb0df475ea783`
- Official release asset: `n5eb.zip`
- Official ZIP SHA-256: `601159db6151963354bed55277b0bb8130f6d02fff768becc35559545b45a3a0`
- Foundry minimum: `13.347`
- Foundry verified: `14`
- System ID: `n5eb`
- System version: `3.1.1`

The exact source is pinned at `vendor/n5eb-3.1.1` as a Git submodule rather than copying a ~290 MB release ZIP into this repository.

## License

Upstream N5EB 3.1.1 includes an MIT license, copyright Andrew Clayton. The upstream license remains authoritative for the upstream source. Keep its license notice intact when redistributing or modifying upstream code.

## Project rule

When implementation notes, old exports, or memory disagree with the pinned 3.1.1 source, **the pinned 3.1.1 source wins**. Verify exact field names, document types, compendium IDs, activities, advancement data, conditions, and hooks against the source or the installed 3.1.1 world before changing automation.
