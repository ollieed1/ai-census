# AI Census

**Domain:** ai-census.org (connected via Namesco DNS, pending propagation)
**Repo:** github.com/ollieed1/ai-census
**Netlify:** ai-census.netlify.app (site ID: a73d9293-70ad-4299-81be-423357bf2e86)
**Stack:** Static HTML/CSS/JS, no build step, Netlify Forms, Netlify Functions
**Paper:** file 01M2G2VH7R2P8PBB0TQBZDJ9KD (page 1-0)

---

## What is this?

An informal census to understand how people use AI and whether that usage is responsible. Not marketing, not legal. A conversation about whether AI tools are serving humanity well.

---

## Pages

- **index.html** -- Census form (the homepage, single page)
- **thanks.html** -- Confirmation page ("You are part of something.")
- **404.html** -- Not yet built (designed in Paper)
- **contact.html** -- Not yet built (designed in Paper)

---

## Form fields

### About you
- **What should we call you?** (text)
- **Country** (dropdown, 30 countries + Other)
- **GitHub** (URL, optional, validated against github.com)
- **LinkedIn** (URL, optional, validated against linkedin.com)
- **I am a** (dropdown): Student / Personal use / Company
- **Industry** (dropdown): Design / Engineering / Finance / Healthcare / Education / Research / Science / Media / Law / Government / Non-profit / Other

### Company fields (revealed when Company selected)
- **Company size** (dropdown): 1-10 / 11-50 / 51-200 / 201-1,000 / 1,001-5,000 / 5,001+
- **How many use AI at work?** (dropdown): Just me / A few people / Most of the team / Company-wide / Not sure

### AI usage
- **Which LLM do you use?** (dropdown + Other text input): ChatGPT / Claude / Gemini / Copilot / Llama / Midjourney / Stable Diffusion / Local / Multiple / Other
- **How often do you use AI?** (dropdown): Daily / Weekly / Monthly / Rarely
- **What do you mainly create?** (icon card multi-select): Code / Image / Video / 3D Models / Data / Research / Other (with text input)

### Reflection
- **Do you feel that what you create is worth the energy it consumes?** (card select): Yes, absolutely / Sometimes / Not sure / Probably not
- **Is what you do for the greater good of humanity?** (card select): Yes, directly / Indirectly / I'm not sure yet / Honestly, no

### Email
- **Your email** (text input, optional)
- **Sharing preference** (radio tiles): I'd rather not share / I'm happy to share

---

## Design system

- **Background:** #FFFFFF (white)
- **Primary accent:** #1B4332 (deep evergreen)
- **Secondary green:** #2D6A4F
- **Selected/tint:** #D8F3DC (mint)
- **Surface:** #FAFAFA
- **Trust tint:** #F0FFF4
- **Borders:** #E9ECEF
- **Text:** #212529
- **Muted text:** #6C757D
- **Error:** #DC2626 / #FEF2F2
- **Font:** System stack (-apple-system, BlinkMacSystemFont, system-ui)
- **All font sizes in rem** for accessibility
- **Max width:** 720px, single column, centred
- **Border radius:** 10px inputs, 12px cards, 14px containers
- **Focus states:** focus-visible outlines, focus-within on card labels
- **Keyboard nav:** All inputs focusable (no display:none on hidden radios/checkboxes)

---

## Infrastructure

- **Forms:** Netlify Forms with honeypot spam protection (bot-field)
- **Data storage:** Netlify managed (US, DPA in place)
- **Submission counter:** Netlify Function at /.netlify/functions/submission-count (shows after 1,000 submissions, needs NETLIFY_ACCESS_TOKEN env var)
- **Spam protection:** Honeypot field. Cloudflare rate limiting planned for when custom domain is active
- **GDPR:** Privacy notice in footer (collapsible). Controller: AI Census project (EU). Lawful basis: consent. Deletion via hello@ai-census.org

---

## Paper artboards

1. **AI Census Form** -- Empty state (default placeholders)
2. **Confirmation Page** -- "You are part of something."
3. **Form -- Filled State** -- Maria Santos example, Company selected, multiple outputs
4. **Form -- Error State** -- Red error banner, field validation errors, disabled submit
5. **404 Page** -- Centred error with actions
6. **Contact Page** -- Name, email, subject dropdown, message textarea
7. **Desktop Browser Mockup** -- White/green theme in browser chrome

---

## TODO

- [ ] DNS propagation (Namesco A record -> 75.2.60.5, CNAME www -> ai-census.netlify.app)
- [ ] Set up hello@ai-census.org email
- [ ] Add NETLIFY_ACCESS_TOKEN env var for submission counter function
- [ ] Build 404.html from Paper design
- [ ] Build contact.html from Paper design
- [ ] Email Netlify for signed DPA copy
- [ ] Consider Netlify Analytics ($9/mo) for visitor counts
- [ ] Unique census ID system (future -- for repeat user tracking)
- [ ] Certificate/licence generation (future)

---

## Data promise

This data will not be sold or shared. It exists solely to understand how AI is being used and whether that usage is responsible. Not for waste. Not for harm. For the future.
