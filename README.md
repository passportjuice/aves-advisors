# AVES Strategic Advisors — Website

Static marketing site for AVES Strategic Advisors (AVES INC): enterprise risk governance, forensic audit, trade finance, procurement, and shipping/logistics/aviation advisory.

## Stack

Plain HTML, CSS, and JavaScript. No build step, no dependencies. Hosted on GitHub Pages.

- `index.html` — homepage
- `services.html` — five practice areas (anchored sections)
- `about.html` — firm background (edit the bracketed placeholders before publishing)
- `contact.html` — contact form (Web3Forms)
- `privacy.html` — privacy policy
- `404.html` — not-found page
- `assets/css/style.css` — design tokens and all styles
- `assets/js/main.js` — mobile nav, header shadow, form submit
- `assets/img/` — logo (SVG), favicon, OG image (`og-image.png`, regenerate via `og.html`)

## Run locally

Open `index.html` in a browser. Everything works from `file://`.

## Deploy

Pushed to GitHub Pages: repo must be **public**, then Settings → Pages → Source: `main` / root.
Live at `https://passportjuice.github.io/aves-advisors/`.

## Before going live — TODO

1. **Contact form key**: sign up at [web3forms.com](https://web3forms.com) with the receiving email, then replace `YOUR-WEB3FORMS-ACCESS-KEY` in `contact.html`.
2. **Email address**: `contact@avesadvisors.com` appears in the footer, contact page, privacy page, and JSON-LD. Replace with the real address if different.
3. **About page placeholders**: fill in `[PRINCIPAL NAME]`, `[NUMBER]` years, credentials, and geographies in `about.html`.
4. **Custom domain** (optional): add a `CNAME` file + DNS, then configure the domain in repo Settings → Pages. Update canonical URLs, `sitemap.xml`, and `robots.txt` to the new domain.

## Design system

- Navy `#0C2340` · Gold `#C6A15B` · Text-gold `#8A6D2F` · Paper `#FAF8F4`
- Headings: Source Serif 4 · Body: Inter (Google Fonts)
- Breakpoints: 860px (split layouts), 820px (mobile nav), 620px (form rows)
