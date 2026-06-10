# Texas Lung Specialists — New Website

A modern, professional, mobile-responsive website for **Texas Lung Specialists** (Dr. Joe V M Devasahayam, MD), designed to feel premium, build trust, and attract new patients.

Built as a fast, dependency-free static site — just HTML, CSS, and a little vanilla JavaScript. No build tools, no frameworks. It runs anywhere.

---

## How to view it

Just **double-click `index.html`** to open it in your browser. That's it.

For the live Google Maps and Google Fonts to load, you need an internet connection (they're pulled from the web).

> Tip: For the smoothest experience while editing, use VS Code's **Live Server** extension, or run a quick local server:
> ```powershell
> # From inside the texas-lung-specialists folder:
> python -m http.server 8000
> # then open http://localhost:8000
> ```

---

## Pages

| File | Page |
|------|------|
| `index.html` | **Home** — hero, services, why-choose-us, conditions, doctor spotlight, stats, process, testimonials, FAQ, CTA |
| `about.html` | **About** — full doctor bio, education & training, philosophy |
| `services.html` | **Services & Conditions** — detailed service cards + conditions treated + process |
| `contact.html` | **Contact** — appointment request form + both office locations with maps |

Shared files: `css/styles.css` (full design system) and `js/main.js` (nav, scroll animations, FAQ, form).

---

## ✅ Real information used (pulled from the current live site)

- Practice name & tagline: *"Your respiratory health is our foremost priority"*
- Dr. Joe V M Devasahayam, MD — board-certified Pulmonary & Critical Care, 23+ years
- Education: Stanley Medical College (Chennai), Internal Medicine residency at St. Mary's (St. Louis), Pulmonary/Critical Care fellowship at University of Missouri
- Services: sleep studies, PFT, CPAP/BiPAP, bronchoscopy & EBUS, asthma/COPD/fibrosis/lung-cancer management, smoking cessation, pulmonary rehab
- Phone **(469) 299-4800** · Fax **(469) 788-7546**
- Locations: **Denton** (3537 S I-35E, Ste 320) and **Flower Mound** (3311 Yucca Dr, Ste 100)

## ⚠️ Placeholder content to replace (once the doctor sends his input)

Search the code for these — each is marked with a `PLACEHOLDER` comment or *(italic note)*:

1. **Photos** — currently using stock images from Unsplash. Replace with:
   - A professional headshot of Dr. Devasahayam (used on Home + About)
   - Real clinic / care photos (hero, why-us, philosophy sections)
   - Drop final images into the `assets/` folder and update the `<img src="...">` tags.
2. **Office hours** — currently shown as *Mon–Fri 8:00am–5:00pm (to be confirmed)*. Confirm real hours.
3. **Insurance list** — FAQ says "most major plans incl. Medicare (to be confirmed)". Add the real accepted-plans list.
4. **Testimonials** — the 3 patient quotes on the Home page are **samples**. Replace with verified, consented patient reviews (or pull from Google reviews).
5. **Stats** — "5,000+ patients" and "4.9★ rating" are illustrative. Update with real numbers.
6. **Social links** — footer Facebook/Instagram/LinkedIn icons point to `#`. Add real profile URLs.
7. **Appointment form** — the form is front-end only and does **not send data yet**. Before launch, connect it to:
   - an email service / form handler (e.g. Formspree, Netlify Forms), or
   - the practice's patient-scheduling/portal system.
8. **Bio details** — About page has room for more biography; add anything the doctor wants highlighted (hospital affiliations, awards, languages spoken, etc.).

---

## What's new vs. the old site (the "appealing" upgrades)

- Clean, premium visual design with a calming clinical color palette and elegant typography
- Sticky navigation + clear "Request Appointment" call-to-action on every page
- Animated hero with trust badges and key stats
- Service cards with icons, "why choose us" benefits, treated-conditions explorer
- Doctor spotlight with credentials and training timeline
- Patient testimonials section, "how it works" steps, and an FAQ accordion
- Dedicated contact page with a real appointment form and embedded maps for both offices
- Fully responsive (looks great on phones, tablets, desktops) and accessibility-minded

---

## Deploying it live

Because it's a plain static site, you can host it for free/cheap almost anywhere:
- **Netlify** or **Vercel** — drag-and-drop the folder (Netlify Forms can power the appointment form instantly)
- **GitHub Pages**, **Cloudflare Pages**, or any standard web host (upload via FTP)

Point the existing domain (`texaslungspecialists.com`) at the new host when you're ready to go live.
