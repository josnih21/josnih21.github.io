# José Ángel Nieda — personal site

A small, static personal site built with [Astro](https://astro.build) and plain CSS. No client-side JavaScript, no UI framework, no webfonts.

## Requirements

- Node.js 22.23.4 or newer
- npm 9 or newer

## Run it locally

```bash
npm install
npm run dev
```

Open <http://localhost:4321>.

To check the production build:

```bash
npm run build
npm run preview
```

## Where things live

```text
src/
├─ pages/
│  ├─ index.astro        The whole site
│  └─ 404.astro          Not-found page
├─ layouts/
│  └─ Base.astro         <head>, metadata, page wrapper
├─ components/           Small pieces of markup
├─ data/                 Your content lives here
│  ├─ site.ts            Name, intro, links, About copy
│  ├─ experience.ts      Jobs and client work
│  ├─ education.ts       Schools and programs
│  ├─ projects.ts        Selected projects
│  └─ writing.ts         Articles and talks
└─ styles/
   └─ global.css         Colors, type, layout, responsive rules
```

`public/` contains files copied as-is: the hero portrait, favicon, social preview image, `robots.txt`, and `sitemap.xml`.

## Add a project

Open `src/data/projects.ts` and add an object to the `projects` array:

```ts
{
  name: "My project",
  description: "One or two sentences about what it does and why it is interesting.",
  tags: ["TypeScript", "Node.js"],
  href: "https://github.com/josnih21/my-project",
},
```

`href` is optional. If you omit it, the project is still listed but has no link. The projects are rendered in the order of the array.

## Add a job or client engagement

Open `src/data/experience.ts`.

A normal job:

```ts
{
  company: "Company name",
  role: "Role title",
  period: "2026 — Present",
  location: "Tenerife, Spain",
  current: true,
  summary: "Optional sentence about the work.",
},
```

A job with client engagements:

```ts
{
  company: "Lean Mind",
  role: "Software Developer",
  period: "2020 — Feb 2026",
  location: "Tenerife, Spain",
  clients: [
    {
      client: "Client name",
      context: "Optional context",
      description: "What you worked on.",
      tags: ["Flutter", "Dart"],
    },
  ],
},
```

Client work is nested under its parent role. That is how the Lean Mind period is presented: one role, four client engagements.

## Edit the intro and About section

Open `src/data/site.ts`:

- `tagline` is the short line under your name.
- `intro` is the paragraph in the hero.
- `about` is the array of paragraphs in the About section.
- `current` is the line with the green dot at the top.
- `photo` and `photoAlt` control the hero portrait and its alt text.
- `links` contains LinkedIn, GitHub, and the source link in the footer.

There is intentionally no email address on the site. The contact section points to LinkedIn.

## Change the design

Everything visual is in `src/styles/global.css`.

The colors are CSS variables at the top:

```css
:root {
  --bg: #faf9f6;
  --text: #1c1b19;
  --muted: #6b6862;
  --line: #e6e2d9;
  --accent: #2f5d50;
}
```

Dark mode uses the same variables under `@media (prefers-color-scheme: dark)`. Change those values and the whole site follows.

The content column is controlled by `--max` (currently `720px`). Fonts use the operating system's default sans and monospace fonts.

## Add a CV link

1. Put the PDF in `public/`, for example `public/cv.pdf`.
2. Add a list item in the Contact section of `src/pages/index.astro`:

```astro
<li>
  <a href="/cv.pdf" target="_blank" rel="noreferrer">
    CV <span aria-hidden="true">↗</span>
  </a>
</li>
```

## Replace the portrait

The hero portrait is `public/portrait.jpg`. It is a square image, currently 280 × 280, and it is displayed at 200 × 200 on desktop and 160 × 160 on mobile. Replace it with another square image and keep the filename, or update `photo` in `src/data/site.ts` if you use a different filename.

Also update `photoAlt` in `src/data/site.ts` if the new image needs different alt text.

## Replace the social preview image

`public/og.png` is the 1200×630 image used by LinkedIn, X, and other previews. Replace it with another PNG of the same size if you want a different image. Keep the filename `og.png`.

## Deploy to GitHub Pages

The site is configured for `https://josnih21.github.io`.

The workflow in `.github/workflows/deploy.yml` builds on every push to `main` and publishes `dist/` to the `html` branch. GitHub Pages serves that branch.

For a fresh repository:

1. Create a **public** repository named `josnih21.github.io`.
2. Push this project to the repository's `main` branch.
3. In the repository, go to **Settings → Pages → Build and deployment** and set **Source** to **Deploy from a branch**, then choose the `html` branch and the `/ (root)` folder.
4. Run the deploy workflow from the **Actions** tab (or push to `main`) to publish the first build.

If you later use a custom domain, update the `site` value in `astro.config.mjs`, the URLs in `src/data/site.ts`, `public/robots.txt`, and `public/sitemap.xml`, then add the domain in GitHub Pages settings.

## Notes

- `Depth Squat` currently has no public repository link. Add `href` in `src/data/projects.ts` after publishing it.
- The date in the footer is generated automatically.
- The site has no analytics and no tracking.
