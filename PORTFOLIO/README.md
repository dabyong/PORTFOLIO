# Allan Dave Cabanlong — Portfolio

A responsive, single-page portfolio site for a Data Analyst / Machine Learning
profile. Built with plain HTML, CSS, and JavaScript — no build step, no
dependencies, so it works out of the box on GitHub Pages.

## Structure

```
.
├── index.html          # all page content
├── css/
│   └── style.css        # all styling (design tokens at the top)
├── js/
│   └── script.js         # mobile nav toggle + active-section highlighting
├── resume.pdf            # ← add your real resume file here (referenced by the buttons)
└── README.md
```

## Running it locally

No build tools needed. Either:

- Open `index.html` directly in your browser, **or**
- Serve it locally so relative paths behave exactly like they will in
  production:

  ```bash
  # Python
  python3 -m http.server 8000

  # Node (if you have it)
  npx serve .
  ```

  Then visit `http://localhost:8000`.

## Customizing content

Everything is in `index.html` — no CMS or data file, so search-and-replace is
the fastest way to make it yours:

- **Name / header** — `ALLAN_DAVE_CABANLONG` appears in the nav logo and
  footer.
- **Hero copy** — the `<section class="hero">` block.
- **Profile photo** — the hero currently shows a placeholder silhouette
  inside `.frame-inner`. Replace the `<svg class="placeholder-avatar">`
  block with an `<img src="assets/your-photo.jpg" alt="Your name">`.
- **About** — bio text and the six-item skill list in `#about`.
- **Projects** — duplicate a `.project-card` block in `#projects` for each
  project; update the filename label, description, tags, and links.
- **Resume** — timeline entries in `#resume`, plus drop your actual PDF in
  the project root as `resume.pdf` (both download buttons link to it).
- **Certifications** — cards in `#certifications`.
- **Contact links** — email/GitHub/LinkedIn links in the `<footer>`.

Colors, fonts, and spacing are all defined as CSS custom properties at the
top of `css/style.css` under `:root` — change a value there and it updates
everywhere.

## Deploying with GitHub Pages

1. Create a new repository on GitHub (or use an existing one) and push this
   project to it:

   ```bash
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```

2. On GitHub, go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **Deploy from a branch**.
4. Under **Branch**, choose `main` and folder `/ (root)`, then **Save**.
5. GitHub will publish the site at:

   ```
   https://<your-username>.github.io/<your-repo>/
   ```

   (First deploy can take a minute or two.)

   If you want the site at the root of `https://<your-username>.github.io`
   (no repo name in the path), name the repository exactly
   `<your-username>.github.io` instead.

## Notes

- Fully responsive: the nav collapses to a hamburger menu and the layout
  restacks for mobile below ~700px.
- Respects `prefers-reduced-motion` (disables the marquee/cursor animations
  for users who request reduced motion).
- No frameworks or build tools — safe to edit directly and commit.
