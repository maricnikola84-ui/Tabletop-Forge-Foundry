# N5EB GM Quality of Life

Current live version: **1.0.0** for N5EB 3.1.1.

## Recovered source package

Exact supplied archive:

`N5EB_GM_QOL_v1.0.0_COMPLETE_Module.zip`

SHA-256:

`d6f9d30a0f4ed6fcca084bffc85b7e32945e0168b1cc1f2207a3c95a9274b0e9`

The archive contains exactly three files: `module.json`, `README.md`, and `scripts/main.js`. ZIP integrity, JSON parsing, and JavaScript syntax validation passed. Per-file hashes are recorded in `../../config/current-project-module-source-archives.json`.

## Tools

Version 1.0.0 provides three deliberately small GM tools:

- **N5EB — QA Audit Characters** checks player actors for ownership gaps, level mismatches, invalid resources, duplicate identifiers, malformed Activities/effects, partial automation, and mechanical-looking features without executable automation. It writes a dated QA journal and does not rewrite sheets.
- **N5EB — Session Dashboard** creates a GM launch page linking campaign folders, the shop directory, Charlie encounters, and the QA report.
- **N5EB — Rest & Resource Assistant** handles short/full-rest resource recovery plus optional HP, Chakra, and temporary-HP handling after the GM chooses actors and options.

The module remains a GM utility layer and should not duplicate the current All-Class Automation engine.
