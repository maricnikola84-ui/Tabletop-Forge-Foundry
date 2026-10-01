# N5EB - Konoha Shops

Foundry VTT module for N5EB 3.1.1. Current live version: **2.1.2**.

## Recovered source package

Exact supplied archive:

`N5EB_Konoha_Shops_v2.1.2_COMPLETE_Module.zip`

SHA-256:

`3a71bbe50c65a85d9c267e18cbacf8b62ec12d03ff4008c9a9d3e1e3c1e07108`

The archive contains exactly four files: `module.json`, `README.md`, `scripts/main.js`, and `styles/shop.css`. ZIP integrity, JSON parsing, and JavaScript syntax validation passed. Per-file hashes are recorded in `../../config/current-project-module-source-archives.json`.

## Behavior

The module creates three player-visible shop actors, a searchable marketplace, a shop directory, and private shortcuts for player characters. It combines curated official stock, priced N5EB/T7 catalog items, and 45 project-authored Naruto-inspired specialty items while preserving native N5EB automation when official source documents are cloned.

### 2.1.2 purchase-permission fix

The manifest registers the module socket channel. Non-GM users can submit purchases for their assigned or explicitly owned characters; the active GM validates the purchase, deducts ryō, imports the item, and adjusts limited specialty stock. A full Foundry world restart is required after installing this version so the socket registration is active.

## Install

Import the original ZIP into Forge or place the module folder in Foundry's `Data/modules` directory, enable **N5EB - Konoha Shops**, and restart the world.

The GM can rerun the installer with:

```js
N5EBKonohaShops.install()
```

Open the market directly with:

```js
N5EBKonohaShops.open()
```
