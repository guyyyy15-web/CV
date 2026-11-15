# Guy Aviv portfolio: rules for Claude sessions

One-page portfolio at https://guyaviv.pages.dev (Cloudflare Pages project `guyaviv`, connected to this repo,
output directory `site/`, no build step). Every push to `main` deploys.

```
site/index.html        the page
site/style.css         all styles (colors and fonts match the CV)
site/site.js           builds the mailto links, so the address is not plain text in the HTML
site/img/              overview tiles and the flow wireframe (WebP, each under 300 KB)
site/video/            muted looping clips (MP4, each under 500 KB) and their posters, loaded only when in view
site/Guy-Aviv-CV.pdf   the one-page CV behind "Download CV"
site/og.png            link preview for WhatsApp and LinkedIn (1200x630)
site/_headers          noindex, CSP, caching
site/_redirects        /r/<company> shows the home page (see below)
scripts/check.mjs      house rules for the copy, plus local links: node scripts/check.mjs
```

## Per-company links

Cloudflare Web Analytics does not record query strings, so `?ref=wix` would not show up in the dashboard.
Send `https://guyaviv.pages.dev/r/wix` instead: it shows the same page, and Web Analytics lists `/r/wix`
under Paths. `?ref=` still works (the page ignores it), it just is not counted separately.

## Rules for the copy

- Every claim matches the CV. No invented numbers.
- No long dashes, en dashes, middle dots or semicolons in visible text.
- No client people's names, phone numbers or real prices, in text or in images.
- `noindex` stays until Guy decides the site should be searchable (meta tag and `X-Robots-Tag` in `_headers`).

Run `node scripts/check.mjs` before every commit.

Before writing or changing any English copy (site, CV, LinkedIn), follow `.claude/skills/copy-translator/SKILL.md`:
it catches literal translations from Hebrew and keeps every fact matched to the CV.
