# AIM-PRO Website

Source of the AIM-PRO project website, built with [Astro](https://astro.build) and [Vue](https://vuejs.org), content managed via [Decap CMS](https://decapcms.org).

## Project Structure

```text
/
├── public/
│   └── admin/            # Decap CMS admin UI (/admin)
├── oauth-worker/         # Cloudflare Worker: GitHub OAuth proxy for Decap CMS login
├── src/
│   ├── components/       # Vue components (Navbar, Footer, FaqAccordion, ...)
│   ├── content/           # Content collections (sections, partners, workpackages,
│   │                      # blog, newsletters, faq, privacy-policy)
│   ├── content/config.ts  # Zod schemas for each content collection
│   ├── layouts/
│   └── pages/             # File-based routing
└── package.json
```

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |

## Content editing (Decap CMS)

Non-technical content (partners, work packages, blog posts, newsletters, FAQ, privacy policy) is editable at `/admin` without touching code. Configuration lives in `public/admin/config.yml`.

Login uses GitHub OAuth via a proxy Worker, since GitHub Pages can't hold a client secret server-side to complete the OAuth exchange itself. See `oauth-worker/README.md` for how that proxy is deployed and configured.

## Learn more

- [Astro documentation](https://docs.astro.build)
- [Decap CMS documentation](https://decapcms.org/docs/intro/)
