# vineethmannukandy.github.io

Personal profile website — bio, career experience, and skills. Built with
plain HTML/CSS/JS, no build step required, and hosted for free on GitHub Pages.

## Structure

```
.
├── index.html       Page markup (all sections)
├── css/style.css     Styling (dark theme, gradients, responsive)
├── js/data.js        EDIT ME — your bio facts, career timeline, skills
└── js/main.js        Rendering logic
```

## Customize your content

Everything you'd want to change lives in two places:

1. **`js/data.js`** — career timeline entries, skills list, typed hero roles.
2. **`index.html`** — hero name/tagline, About Me bio, social links, contact email.

No build tools, npm, or frameworks needed — just edit and refresh the page in
your browser (or open `index.html` directly).

## Deploy to GitHub Pages

This repo is already named `vineethmannukandy.github.io`, so GitHub Pages will
serve it automatically once Pages is enabled:

1. Push your changes to the `main` branch.
2. On GitHub: **Settings > Pages > Build and deployment > Source: Deploy from a branch**.
3. Branch: `main`, folder: `/ (root)`. Save.
4. Your site will be live at `https://vineethmannukandy.github.io/` within a
   minute or two.

## Local preview

Since there's no build step, you can just open `index.html` in a browser, or
serve it locally to avoid any file:// restrictions:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```
