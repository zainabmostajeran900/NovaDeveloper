# NovaDev Portfolio (Next.js)

A 6-page dark-themed developer portfolio built with **Next.js (App Router)** and **Tailwind CSS**, inspired by the layout and sections of geekdeveloper.ir (Home, About, Resume, Services, Portfolio, Contact). All text, images, and contact details are **placeholder data** — replace them with your own before publishing.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Project structure

```
app/                 → pages (App Router)
  page.js            → Home
  about/page.js       → About
  resume/page.js       → Resume
  services/page.js     → Services
  portfolio/page.js    → Portfolio
  contact/page.js      → Contact
  layout.js           → shared layout (header + footer + fonts)
  globals.css          → Tailwind + base styles

components/          → reusable UI pieces (Header, Footer, cards, forms, etc.)

data/                 → ALL editable content lives here
  site.js             → name, contact info, social links
  profile.js           → hero name/role + About bio & info grid
  skills.js            → skill progress bars
  interests.js         → "I'm interested in" cards
  testimonials.js       → testimonial carousel content
  resume.js            → summary, education, skills, work experience
  services.js          → services grid
  portfolio.js          → portfolio projects + categories
```

## Replacing the placeholder content

You don't need to touch any component code to update the site — just edit the files in `data/`:

- **Your name, role, photo, bio** → `data/profile.js`
- **Contact info & social links** → `data/site.js`
- **Skill bars** → `data/skills.js`
- **Resume (education/experience)** → `data/resume.js`
- **Services you offer** → `data/services.js`
- **Portfolio projects** → `data/portfolio.js` (swap the `image` URLs for your own screenshots, e.g. files placed in `public/` and referenced as `/your-image.png`)
- **Testimonials** → `data/testimonials.js`

All placeholder photos/avatars currently come from `picsum.photos` and `i.pravatar.cc` (random placeholder image services) — swap these for real images whenever you're ready.

## Notes

- The contact form is UI-only for now (it just shows a "Message Sent" confirmation). Wire it up to an email service (e.g. Resend, Formspree, or an API route) when you're ready to receive real messages.
- Color theme and fonts (Poppins for headings, Inter for body) are defined in `tailwind.config.js` and `app/layout.js` — change the `accent` color there to re-theme the whole site.
