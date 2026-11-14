# Portfolio — James Jose

A section-wise portfolio site: Power BI, Microsoft Fabric, Python and Full Stack projects, plus a verifiable certifications table.

Built with **React 19 + Vite 8 + Tailwind CSS 4**. No backend, no database — it compiles to plain static files, which is why it hosts free on GitHub Pages and loads instantly.

---

## The one thing to know

**`src/data/portfolio.js` is the only file you need to edit.**

Your name, intro, skills, every project, and every certification come from that file. The React components just render whatever is in it. Add a project there and it appears on the page, gets counted in the hero chart, and updates the section count — automatically.

You do not need to understand React to maintain this site.

---

## 1. Run it on your computer

Install [Node.js](https://nodejs.org) (version 20 or newer), then open a terminal in this folder:

```bash
npm install     # once, the first time
npm run dev     # start the local preview
```

It prints a link like `http://localhost:5173` — open it in your browser. Edit `src/data/portfolio.js`, save, and the page refreshes as you type.

Press `Ctrl + C` in the terminal to stop.

---

## 2. Make it yours

Work through these in order. Everything is in `src/data/portfolio.js` unless stated.

### Your details

Find the `profile` block at the top and replace:

| Field | What to put |
|---|---|
| `name`, `role` | Your name and the job title you're targeting |
| `intro` | Two sentences on what you actually build. Resist "passionate about data" |
| `location`, `availability` | Where you are, and what you're looking for |
| `email`, `github`, `linkedin` | Real links — these are the whole point of the site |
| `resume` | Starts empty, so the "Download CV" button is hidden. Put your CV in `public/` as `resume.pdf`, then set this to `'resume.pdf'` |

### Your projects

Each of the four sections holds a list of projects. To **add** one, copy an existing `{ ... }` block, paste it inside the same section's `projects: [ ... ]`, and change the contents.

A few things worth getting right:

- **`summary`** — say what the question was, what you built, and what changed. Not a feature list.
- **`metrics`** — up to three real numbers. These catch the eye first, so make them concrete: `'1.2M rows'`, `'6 hrs → 5 min'`, `'0.87 ROC-AUC'`. If a project has no honest number, delete the whole `metrics` block rather than inventing one.
- **`featured: true`** — makes the tile span the full width. Use it for your single strongest project in each section, and delete the line from the others.
- **`links`** — delete any line you don't have. A dead link is worse than no link.

To **remove** a project, delete its whole `{ ... }` block including the trailing comma.

### Power BI reports people can actually open

A GitHub repo link proves less than a working report. In Power BI Service: **File → Embed report → Publish to web (public)**, then paste the link into `report:`. Only do this for data you are allowed to make public — use a sample or anonymised dataset otherwise.

### Your certifications

The `certifications` list renders as a table, newest first. `url` should be the verification link — the Credly badge, your Microsoft Learn credential page, or the Coursera certificate URL. Leave `url` out and the row shows "On request".

### Changing the look

Colours and fonts live in `src/index.css` under `@theme`. The four discipline accent colours are in `src/data/portfolio.js` next to each section (`accent: '#d08700'`), so one file stays the single place you edit.

---

## 3. Put it online (GitHub Pages)

### Step 1 — Pick your repo name

This decides one setting, so do it first.

- Repo named **`your-username.github.io`** → site lives at `https://your-username.github.io`. Leave `vite.config.js` alone.
- Repo named anything else, e.g. **`portfolio`** → site lives at `https://your-username.github.io/portfolio/`. Open `vite.config.js` and change `const BASE = '/'` to `const BASE = '/portfolio/'`.

Getting this wrong is the single most common cause of a blank white page after deploying.

### Step 2 — Push the code

Create an empty repo on GitHub (no README, no .gitignore — this folder has them), then:

```bash
git init
git add .
git commit -m "Portfolio site"
git branch -M main
git remote add origin https://github.com/your-username/your-repo.git
git push -u origin main
```

### Step 3 — Turn Pages on

In your repo on GitHub: **Settings → Pages → Build and deployment → Source → GitHub Actions**.

That's it. The workflow in `.github/workflows/deploy.yml` builds and publishes automatically. Watch it run under the **Actions** tab; it takes about a minute.

### Step 4 — From now on

```bash
git add .
git commit -m "Added new Fabric project"
git push
```

The live site updates itself. You never run a build command by hand.

---

## 4. Use a custom domain (optional)

A domain like `jamesjose.dev` costs a few dollars a year and looks sharper on a CV than a `github.io` URL.

1. Buy the domain.
2. In your DNS settings add four `A` records for `@` pointing at `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`, and a `CNAME` for `www` pointing at `your-username.github.io`.
3. In **Settings → Pages → Custom domain**, enter the domain and tick **Enforce HTTPS**.
4. Set `const BASE = '/'` in `vite.config.js` — a custom domain always serves from the root.

---

## Troubleshooting

| What you see | Fix |
|---|---|
| Blank white page after deploying | `BASE` in `vite.config.js` doesn't match your repo name. See Step 1 |
| Styles missing, text unstyled | Same cause as above |
| Actions tab shows a red ✗ | Open the failed run and read the log — it's almost always a missing comma or quote in `portfolio.js` |
| `npm run dev` fails | Delete `node_modules` and `package-lock.json`, then `npm install` again |
| Changes don't show on the live site | Give it a minute, then hard-refresh with `Ctrl + Shift + R` |
| Fonts look wrong offline | Archivo and Public Sans load from Google Fonts, so the dev preview needs internet |

---

## Project structure

```
portfolio/
├── index.html                  page title, description, fonts, favicon
├── vite.config.js              BASE path for GitHub Pages — read before deploying
├── package.json
├── .github/workflows/deploy.yml   auto-deploy on push
├── public/
│   ├── .nojekyll               stops GitHub Pages mangling the build
│   └── resume.pdf              ← add your CV here
└── src/
    ├── main.jsx
    ├── index.css               colours, fonts, base styles
    ├── App.jsx                 page order
    ├── data/
    │   └── portfolio.js        ★ ALL YOUR CONTENT LIVES HERE
    └── components/
        ├── Hero.jsx            name, intro, auto-generated summary chart
        ├── TabStrip.jsx        sticky section tabs
        ├── Skills.jsx          skill groups
        ├── Section.jsx         one discipline section
        ├── ProjectTile.jsx     one project tile
        ├── Certifications.jsx  certifications table
        └── Footer.jsx          closing call to action
```
