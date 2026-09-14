# AI Census - Tokens for Good

**Domain:** ai-census.org
**Repo:** github.com/ollieed1/ai-licence
**Netlify:** ai-census.netlify.app (custom domain TBD - add in Netlify dashboard)
**Stack:** Static HTML/CSS/JS, no build step, dark theme

---

## What is this?

An informal census about responsible AI usage. Not a legal document. A conversation about whether your AI use is worth the natural resources it consumes.

If you qualify, you receive a licence (certificate) that signals you are a trusted person using AI tools for good.

---

## Core concept: Tokens for Good

AI runs on real energy. This project treats AI compute as a natural resource that should be allocated responsibly.

### Encouraged use (green)
- Coding to build something useful for others
- Research and science that benefits humanity
- Students learning (AI as tutor, not shortcut)
- Creative exploration (not for resale as your own work)

### Needs scrutiny (amber)
- Business use: write your business plan without AI first. If it has merit, a licence may grant resources to help build it for the greater good

### Not permitted (red)
- AI-generated social media content (floods feeds, wastes energy, erodes trust)
- Generating harmful imagery of people
- Fake news / narrative-pushing journalism
- Selling AI output as human-made work

### Abuse consequences
If you abuse your licence, it creates issues with your usage - outputs may be watermarked or tainted. Creates a token budget that prevents misuse.

---

## Census form fields

### About you
- **Full name** (text)
- **Email** (text, optional)
- **Nationality** (text)
- **Role** (dropdown): Student / Professional / Researcher / Hobbyist / Other
- **Industry** (dropdown): Design / Engineering / Finance / Healthcare / Education / Research / Science / Media & Journalism / Law / Government / Non-profit / Other

### Your AI usage
- **Primary LLM** (dropdown): ChatGPT / Claude / Gemini / Copilot / Llama / Midjourney / Stable Diffusion / Local model / Multiple / Other
- **Frequency** (radio pills): Daily / A few times a week / A few times a month / Rarely
- **Main output** (checkboxes): Code / Images / Video / 3D Models / Data & Analysis / Research & Writing / Music & Audio

### Reflection
- **"Do you feel that what you create with AI is beneficial relative to the energy it consumes?"** (radio): Yes absolutely / Mostly yes / I'm not sure / Probably not
- **"Is what you do with AI for the greater good of humanity?"** (radio): Yes / I think so / It's mostly personal / No, it's just convenient
- **Free text:** Briefly describe what you use AI for

### Submit
- Button: "Apply for your AI Licence"
- Note: data will not be sold or shared, exists solely for issuing a certificate

---

## Design

- Dark theme (near-black background #0A0A0F)
- Indigo accent (#6366F1)
- 720px max-width, single column
- System font stack
- Manifesto section with green/amber/red principle icons
- Toggle-style checkboxes, pill-style radios
- Clean, informal, not corporate

---

## Current state

- [x] index.html built with full form UI (no backend)
- [x] GitHub repo created and pushed
- [x] Netlify site created (ai-census.netlify.app)
- [ ] Custom domain (ai-census.org) needs adding in Netlify dashboard > Domain management
- [ ] Design iteration in Paper (connection needs fixing)
- [ ] Backend / form submission (future)
- [ ] Licence/certificate generation (future)

---

## Data promise

> I will not sell or use this data for any other reason than giving you a certificate that says you are a good human being using tools for good - not wasting human resources and not destroying the future for children or the development of humanity.
