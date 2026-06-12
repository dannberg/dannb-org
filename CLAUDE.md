# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Personal website for Dann Berg (https://dannb.org) — a static site built with Hugo using a custom, in-repo theme called **danntheme**. There is no JS build step, no test suite, and no package manager; the entire site is Hugo templates + Markdown content.

## Commands

- **Run locally:** `hugo server -D --disableFastRender` — `-D` renders drafts; `--disableFastRender` forces a full rebuild on every change (still fast) so you see accurate output.
- **New blog post:** `hugo new blog/YYYY/post-name.md` — scaffolds from `archetypes/default.md` with `draft: true` and `tags: [TKTK]` placeholders.
- **Production build:** `hugo --gc --minify` — this is exactly what Netlify runs; use it to reproduce a production build locally.

## Deploy pipeline

Pushing/merging to `main` triggers a Netlify build (`netlify.toml`) that runs `hugo --gc --minify` and publishes `public/`. There is no staging step — **main is production**. PRs get a Netlify deploy preview; treat the `netlify/dannb/deploy-preview` check as the source of truth that a change actually builds before merging.

**Hugo version is pinned in two places that must stay in sync:** the local toolchain and `HUGO_VERSION` in `netlify.toml` (currently `0.161.1`, across all build contexts). A drift here is silent — production can keep building on an old pinned version while local builds fail (or vice versa). When upgrading Hugo, update both.

## Hugo version gotchas (0.158+)

This repo runs a modern Hugo, which removed APIs older Hugo theme code relied on. When editing templates:
- `.Site.Author.*` was **removed** in v0.158 — use `.Site.Params.*` instead (author/email live under `[params]` in `config.toml`, not an `[author]` table).
- `languageCode` / `.Site.LanguageCode` are deprecated in favor of `locale` / `.Site.Language.Locale` (currently emits a build warning, not an error).

## Architecture

**Theme override model.** Hugo merges project-root `layouts/` *over* `themes/danntheme/layouts/`. In practice:
- Page templates (`baseof.html`, `single.html`, `list.html`, `index.html`, `rss.xml`, partials) live in `themes/danntheme/layouts/`.
- All shortcodes live in the **project-root** `layouts/shortcodes/` (e.g. `callout.html`, `boxed.html`, `dann.html`).

`danntheme` is committed directly to the repo (not a git submodule), so editing theme files is normal and expected. The `themes/blank` and `themes/slick` submodule entries in `.gitmodules` are vestigial and unused — the active theme is set by `theme = "danntheme"` in `config.toml`.

**Content.** Blog posts live under `content/blog/YYYY/`. Front matter convention (see existing posts and `archetypes/default.md`):
- `url: /blog/YYYY/slug` sets the permalink explicitly (it does not derive from file path).
- `images:` drives the Open Graph share image; `categories:` and `tags:` feed navigation and related-posts.
- Related posts are configured in `config.toml` under `[related]`, weighted heavily by shared `tags`.

**Markdown rendering** uses Goldmark with `unsafe = true` (`config.toml`), so raw HTML in Markdown content is rendered — intentional, used by content and shortcodes.

## Conventions

- **`TKTK`** is a placeholder marker (journalism "to come") left in drafts where copy or a tag is unfinished. Don't treat it as a typo; it signals work the author still intends to fill in. Grep for it before considering a post done.
- **Callouts:** `{{< callout emoji="🔥" text="One paragraph of text." >}}` — styling in `layouts/shortcodes/callout.html`.
- **Images** are sized ~644px (up to 700px) wide. Main OG image: `https://dannb.org/dberg-main-og-image.jpg`.
- `public/` and `resources/_gen/` are generated build output (gitignored) — never edit by hand.
