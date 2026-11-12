# Baldev — Portfolio

Personal portfolio website for **Baldev**, final-year B.Tech (ECE – IIoT) student at NIT Kurukshetra, working on full-stack engineering and Generative AI.

**GitHub:** [github.com/NJ018](https://github.com/NJ018)
**Live site:** [nj018.github.io](https://nj018.github.io)

> **Status:** live at [nj018.github.io](https://nj018.github.io). Every push to `main` rebuilds and redeploys it.

---

## Goals

- Give recruiters a 30-second answer to *who is this, what has he built, how do I contact him*.
- Show each project with the problem it solves, the stack, and links to the code and a demo.
- Load fast, work on mobile, and stay accessible (keyboard navigation, visible focus, good contrast, reduced-motion support).
- Be easy to update: adding a project should mean editing one data file, not touching layout code.

## Site sections

| Section | Content |
|---|---|
| **Hero** | Name, one-line intro, headshot, buttons for Projects / GitHub / LinkedIn |
| **About** | Short summary: full-stack systems, REST APIs, RAG pipelines, fault tolerance and testing |
| **Projects** | Cards for featured projects (see below), each with stack tags, highlights, and links |
| **Skills** | Grouped: languages, backend/frontend, databases, GenAI, tools & testing |
| **Experience & Activities** | Positions of responsibility and hackathons |
| **Achievements** | 500+ DSA problems, NTSE Scholar, Smart India Hackathon top 25 |
| **Education** | NIT Kurukshetra, 2023–2027 |
| **Contact** | Email, LinkedIn, GitHub |

### Featured projects

| Project | What it does | Stack | Repo |
|---|---|---|---|
| **NoteLens** | Turns YouTube lectures into structured study guides with timestamped key points, code snippets and PDF export, plus a RAG chat that cites the exact video moment behind each answer | React, TypeScript, FastAPI, LangGraph, ChromaDB, Sentence Transformers, Groq | [Ytbuddy-main](https://github.com/NJ018/Ytbuddy-main) |
| **HeadsUp** | Live weather and safety alerts that answer "is anything happening here right now?" first, with a severity meter, timeline and alert map; reports "couldn't check" rather than a false "all clear" when the API fails. Built at the hyperDart Hackathon, 79 unit tests | React 19, MUI, Leaflet, Vitest, NWS API | [Hyperdart_Hackathon](https://github.com/NJ018/Hyperdart_Hackathon) |
| **Forever** | Full-stack e-commerce platform: storefront, admin panel and REST API, with JWT auth and Stripe / Razorpay / cash-on-delivery payments | React, Node.js, Express, MongoDB, Tailwind CSS | [forever](https://github.com/NJ018/forever) |
| **Face Analyzer** | Detects 468 facial landmarks with MediaPipe and scores facial proportions (Golden Ratio, Rule of Thirds, Rule of Fifths), with Streamlit, CLI and FastAPI interfaces and PDF/JSON reports | Python, MediaPipe, Streamlit, FastAPI | [Face-Analyzer](https://github.com/NJ018/Face-Analyzer) |

## Tech stack

Chosen to match the stack I already use in my projects:

- **[React](https://react.dev) + [TypeScript](https://www.typescriptlang.org)** for the UI
- **[Vite](https://vitejs.dev)** for dev server and builds
- **[Tailwind CSS v4](https://tailwindcss.com)** for styling
- **[Vitest](https://vitest.dev)** for component tests
- **Deployment:** GitHub Pages via GitHub Actions (static build, no backend)

The site is fully static. Content lives in typed data files, so the layout code never needs to change when content does.

## Project structure

```
Portfolio/
├── public/
│   ├── headshot.jpg        # profile photo (640×640)
│   ├── projects/           # project screenshots
│   └── og-image.jpg        # link-preview image (generated)
├── src/
│   ├── components/         # Nav, Hero, About, Projects, BrowserFrame, Skills, SkillIcon, Journey, Contact
│   ├── data/
│   │   ├── profile.ts      # name, bio, stats, social links
│   │   ├── projects.ts     # project list: title, summary, stack, links
│   │   ├── skills.ts
│   │   └── journey.ts      # education, positions, achievements
│   ├── index.css           # theme colours and shared styles
│   ├── App.tsx
│   └── main.tsx
├── scripts/og/            # link-preview image template + render script
├── .env                  # SITE_URL for link previews
├── index.html
├── package.json
└── README.md
```

## Getting started

**Prerequisites:** Node.js 20+ and npm.

```bash
# install dependencies
npm install

# start the dev server at http://localhost:5173
npm run dev

# run tests
npm test

# production build (output in dist/)
npm run build

# preview the production build locally
npm run preview

# regenerate the link-preview image (public/og-image.jpg)
npm run og
```

## Theme

Dark background with purple accents. All colours live in the `@theme` block at the top of [`src/index.css`](src/index.css):

| Token | Value | Used for |
|---|---|---|
| `ink-950` | `#07050d` | page background |
| `ink-900` / `ink-800` | `#0e0a19` / `#1a1430` | cards and surfaces |
| `accent-400` | `#b69bff` | links, labels, highlights |
| `accent-600` | `#7c3aed` | buttons, gradients |
| `glow` | `#c026d3` | gradient end and glow colour |

Change a value there and it updates across the whole site.

**Fonts:** [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) for headings, [Inter](https://fonts.google.com/specimen/Inter) for body text, [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) for labels and tags. **Texture:** a faint film grain sits behind all content (`body::before` in `src/index.css`); raise or lower its `opacity` to taste.

### Motion

- **Scroll reveal:** anything wrapped in `<Reveal>` fades and slides in the first time it scrolls into view.
- **Card spotlight:** every `.card` gets a purple glow and border rim that follow the cursor (mouse and trackpad only).
- **Rotating role:** the intro types out each entry in `roles` in `src/data/profile.ts`.

The code lives in `src/motion.ts` and `src/index.css`. For visitors who have *reduce motion* turned on in their OS, sections appear without the fade and the roles show as one static line.

## Updating content

- **Add a project:** add an entry to `src/data/projects.ts`.
- **Add a project screenshot:** put the image in `public/projects/` and set `image: 'projects/<file>.jpg'` (plus a short `imageAlt`) on that project. Landscape images around 1600px wide work best.
- **Add a skill:** add it to `src/data/skills.ts`. If [simple-icons](https://simpleicons.org) has its logo, map the name to it in `src/components/SkillIcon.tsx` (e.g. `Docker: siDocker`); otherwise it gets a purple sparkle icon, or you can map it to one of the outline icons there.
- **Change bio or links:** edit `src/data/profile.ts`.
- **Update photo:** replace `public/headshot.jpg` (square works best).
- **Highlight a phrase:** wrap it in `==double equals==` in any data file and it renders with the purple marker highlight.

## Link previews

When the site's link is pasted into LinkedIn, WhatsApp, Slack or X, it shows [`public/og-image.jpg`](public/og-image.jpg) (1200×630) with the title and description from `index.html`.

- **Set the site address before deploying.** These apps only load preview images from absolute URLs, so put the live address in `.env`:
  ```bash
  SITE_URL=https://your-site-address   # no trailing slash
  ```
  The build warns until this is set.
- **Change the image:** edit [`scripts/og/og-image.html`](scripts/og/og-image.html), then run `npm run og` to regenerate it (uses your installed Chrome; set `CHROME_PATH` if it isn't found).
- **Test it after deploying** with [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/). It also clears LinkedIn's cached preview if you change the image later.

## Roadmap

- [x] Write README and site plan
- [x] Scaffold React + TypeScript + Vite project
- [x] Copy assets into `public/` (`headshot.jpg`)
- [x] Dark + purple theme, responsive layout and navigation
- [x] Hero and About sections
- [x] Project cards driven by `projects.ts`
- [x] Skills, Journey (education, positions, achievements) and Contact sections
- [x] Add email and LinkedIn to `src/data/profile.ts`
- [x] Add screenshots for each project
- [x] Link-preview image and Open Graph / Twitter tags
- [x] Set `SITE_URL` in `.env`
- [ ] Accessibility and Lighthouse pass (target 90+ on all scores)
- [x] Deploy to GitHub Pages (`.github/workflows/deploy.yml`)

## Contact

- **GitHub:** [NJ018](https://github.com/NJ018)
- **LinkedIn:** [baldev-chhillar](https://www.linkedin.com/in/baldev-chhillar-3298a1424)
- **Email:** [baldevchhilllar@gmail.com](mailto:baldevchhilllar@gmail.com)

## License

Code is released under the MIT License. The photo and written content are mine and not covered by the license.
