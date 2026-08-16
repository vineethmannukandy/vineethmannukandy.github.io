# vineethmannukandy.github.io

Personal profile website — bio, career timeline, skills, and a survey form that
stores responses in a Google Sheet. Built with plain HTML/CSS/JS, no build step
required, and hosted for free on GitHub Pages.

## Structure

```
.
├── index.html            Page markup (all sections)
├── css/style.css         Styling (dark theme, gradients, responsive)
├── js/data.js            EDIT ME — your bio facts, career timeline, skills
├── js/main.js            Rendering + form submission logic
└── apps-script/Code.gs   Google Apps Script webhook (Sheets backend)
```

## Customize your content

Everything you'd want to change lives in two places:

1. **`js/data.js`** — career timeline entries, skills list, typed hero roles,
   and the survey endpoint URL.
2. **`index.html`** — hero name/tagline, About Me bio, social links, contact email.

No build tools, npm, or frameworks needed — just edit and refresh the page in
your browser (or open `index.html` directly).

## Connect the survey form to Google Sheets

The form posts to a small Google Apps Script "web app" that appends each
submission as a row in a spreadsheet.

1. Create a new Google Sheet (sheets.new).
2. Open **Extensions > Apps Script**.
3. Replace the starter code with the contents of `apps-script/Code.gs`.
4. Click **Deploy > New deployment**, choose type **Web app**.
   - Execute as: **Me**
   - Who has access: **Anyone**
5. Click **Deploy** and authorize when prompted.
6. Copy the Web App URL it gives you.
7. Paste that URL into `SURVEY_ENDPOINT_URL` in `js/data.js`.
8. Submit the form once on your live site to confirm a row appears in the sheet.

Each response is stored with a timestamp, name, email, role, rating, message,
and the page URL it was submitted from.

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
