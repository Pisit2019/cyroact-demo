# CYROACT — Cycloidal Gearbox 3D Configurator

Free, browser-based 3D configurator for cycloidal gearboxes. Adjust the geometry,
inspect every part, animate the drive, and export STL / 3MF / G-code — all computed
locally in the browser with WebGL. No install, no account, no backend.

**Live demo:** https://cyroact-demo.pages.dev/
**Mirror:** https://pisit2019.github.io/cyroact-demo/

## Features

- Parametric single-stage cycloidal drive: pin circle Ø, pin count, eccentricity,
  housing size, disc count, print clearance, and more
- 68 individual parts with a per-part parameter panel and visibility toggles
- Standard ball / needle bearing catalog sizes (6902, 6810, HK series)
- Mode 1 (inverted, housing rotates) and Mode 2 (output rotates) with live animation
- Share any configuration by URL — values are stored only in the link fragment
  (`#p=...`), never sent to a server
- Export: STL (per part), OBJ, 3MF, and CNC G-code
- English UI, dark sidebar, keyboard shortcuts, section / x-ray / explode views

## Preset configurations

| Preset | Link |
|---|---|
| Default 9:1 (N = 10, Ø80 pin circle, Ø108 housing) | https://cyroact-demo.pages.dev/ |
| FDM print — 0.3 mm hole clearance | https://cyroact-demo.pages.dev/#p=eyJ2IjoxLCJwIjp7InByaW50X2NsZWFyYW5jZSI6MC4zfX0 |
| Mode 2 — output rotates | https://cyroact-demo.pages.dev/#p=eyJ2IjoxLCJwIjp7Im1vZGVfZmlnIjoxfX0 |
| Two discs — higher torque | https://cyroact-demo.pages.dev/#p=eyJ2IjoxLCJwIjp7Im51bV9wbGF0ZXMiOjJ9fQ |

## Theory

How the cycloidal profile, contact normal, and reduction ratio are derived:
https://cyroact-demo.pages.dev/theory/

## Third-party notices

Bundled open-source licenses: [THIRD_PARTY_NOTICES.txt](THIRD_PARTY_NOTICES.txt)

## Notes

This repository contains the built static site only. The viewer is a single
`index.html` plus a hashed JS bundle; everything else is static assets.
