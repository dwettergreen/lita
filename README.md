# Life in the Atacama — Website Prototype

A prototype website for the **Life in the Atacama (LITA)** project, a NASA-funded 
robotic astrobiology research project (2002–2018) that developed the autonomous 
rover Zoë to search for microbial life in Chile's Atacama Desert.

**Principal Investigators:**  
- Robotics: David Wettergreen, Carnegie Mellon University Robotics Institute  
- Science: Nathalie Cabrol, SETI Institute / NASA Ames Research Center  

Funded by NASA ASTEP and PSTAR programs.

---

## Repository Structure

```
lita/
├── index.html                  ← Home page
├── assets/
│   ├── css/style.css           ← Main stylesheet
│   └── js/shared.js            ← Navigation & utilities
├── pages/
│   ├── atacama/index.html      ← The Atacama Desert
│   ├── zoe/index.html          ← Meet Zoë
│   ├── expeditions/
│   │   ├── index.html          ← Expeditions overview
│   │   ├── 2003.html           ← Deployment 1
│   │   ├── 2004.html           ← Deployment 2
│   │   ├── 2005.html           ← Deployment 3 (template/most developed)
│   │   ├── 2013.html           ← Deployment 4
│   │   └── 2015-2018.html      ← Deployment 5
│   ├── archive/index.html      ← Data archive hub
│   └── gallery/index.html      ← Curated image gallery
└── docs/
    ├── LITA_design_specification.md    ← Authoritative design spec
    ├── LITA_glossary.md                ← Project terminology
    └── LITA_new_chat_prompt_template.md ← Claude session template
```

---

## Development Status

This is a **prototype** — structure and design are established, content is placeholder.

### What's complete
- Full page structure and navigation
- Design system: typography, color palette, components
- All page templates with consistent layout patterns
- Archive layer design with "Go Deeper" pattern
- Docs folder with Claude Project reference documents

### What needs content
All `[PLACEHOLDER]` and `[SOURCE NEEDED]` markers indicate content to be 
drafted from project source files. These are:

- Narrative text for each expedition page (from field notes, reports, emails)
- "At a Glance" factual details (exact dates, distances, team sizes)
- Image replacements (placeholder divs → real `<img>` tags)
- Archive volume figures (image counts, panorama counts)
- Traverse maps (Leaflet.js with real GPS GeoJSON data)
- Zenodo DOIs once data is deposited

---

## Deploying to GitHub Pages

1. Push this repository to `github.com/dwettergreen/lita`
2. Go to **Settings → Pages**
3. Source: **Deploy from a branch** → `main` branch → `/ (root)`
4. Site will be live at `https://dwettergreen.github.io/lita/`

For a custom domain, add a `CNAME` file to the repo root containing 
your domain name (e.g., `lifeintheatacama.org`) and configure your 
DNS registrar to point to GitHub Pages.

---

## Working with Claude to Add Content

See `docs/LITA_new_chat_prompt_template.md` for the session template.  
See `docs/LITA_design_specification.md` for authoritative style and structure.

**Recommended workflow per page:**
1. Start new Claude chat in the LITA Project
2. Paste the prompt template with the target page specified
3. Upload the 10–15 most relevant source documents
4. Request specific tasks (narrative draft, timeline, "At a Glance" table)
5. Replace placeholder content in the HTML with drafted content
6. Replace `img-placeholder` divs with real `<img>` tags pointing to actual images

---

## Image Guidelines

- Web-optimized images: max 2000px wide, compressed JPEG or WebP
- Hero images: 16:9 or wider, high quality, min 1600px wide
- Gallery thumbnails: square crops at 600×600px
- Full-resolution originals: host externally (Flickr, S3, or Zenodo)
- Always include `alt` text and a `<figcaption>` with date, location, credit

---

*Prototype generated April 2026. Design specification version 1.0.*
