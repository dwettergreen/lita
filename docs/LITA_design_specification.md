# Life in the Atacama — Website Design Specification
*For use as Claude Project knowledge. This document is authoritative for all website section drafting.*

---

## 1. Project Overview

**Full name:** Life in the Atacama (LITA)
**Duration:** 2002–2018
**Funder:** NASA (ASTEP and PSTAR programs)
**Lead institutions:** Carnegie Mellon University Robotics Institute; SETI Institute / Carl Sagan Center
**Principal Investigator (Robotics):** David Wettergreen, CMU
**Principal Investigator (Science):** Nathalie Cabrol, SETI Institute / NASA Ames
**Robot:** Zoë — autonomous, solar-powered, four-wheeled rover
**Mission:** Develop and field-test a terrestrial planetary rover prototype with autonomous navigation and life-detection instruments; search for microbial life in the Atacama Desert as a Mars analog study

**Five field deployments:** 2003, 2004, 2005, 2013, 2015–2018
*(Exact dates, locations, and key events for each deployment to be populated from source documents)*

**Predecessor rover:** Hyperion (used in early planning/first deployment context)
**Key instrument addition (2015–2018):** 1-meter autonomous drill by Honeybee Robotics

**Do not confuse with:** ARADS (Atacama Rover Astrobiology Drilling Studies) — a separate NASA Ames-led project that followed LITA and used the same Honeybee drill with a different robot (K-REX2), not Zoë.

---

## 2. Website Purpose

This website serves two distinct audiences simultaneously through a layered progressive-disclosure design:

### Layer 1 — General Public
Curious non-specialists, students, science enthusiasts. Narrative-driven, visually engaging, plain language. Answers: *What did you do? Where? Why does it matter?*

### Layer 2 — Researchers and Data Users
Scientists, roboticists, astrobiologists who want access to the underlying archive: raw imagery, panoramas, instrument data, traverse logs. Answers: *How do I get the data? What's in it? How is it organized?*

The website must serve both without compromising either. Public visitors should never feel overwhelmed by data; researchers should never have to wade through outreach prose to find what they need.

---

## 3. Sitemap

```
/                           Home — hook, three-panel intro, expedition strip
/question                   Why search for life? Why a rover? Why Earth first?
/atacama                    The desert as Mars analog
  /atacama/geography        Landscape, climate, Mars similarity
  /atacama/field-sites      Salar Grande, Yungay, Altiplano, etc.
  /atacama/gallery          Curated landscape photography
/zoe                        Meet Zoë
  /zoe/anatomy              Annotated photo/diagram of the rover
  /zoe/autonomy             How she navigated without human control
  /zoe/instruments          Science payload, by deployment era
  /zoe/drill                The Honeybee 1-meter drill (2015–2018)
/expeditions                Index — five deployments as five chapters
  /expeditions/2003         Deployment 1
  /expeditions/2004         Deployment 2
  /expeditions/2005         Deployment 3 — first microbial life map
  /expeditions/2013         Deployment 4
  /expeditions/2015-2018    Deployment 5 — drill added
/findings                   Scientific results in plain language
/archive                    Data archive hub (see Section 7)
  /archive/imagery          Traverse image collections
  /archive/panoramas        Full panoramic mosaics
  /archive/instruments      Instrument data by type and deployment
  /archive/downloads        Bulk data access, formats, licensing
/gallery                    Curated site-wide image gallery
/team                       People and institutions
/legacy                     Project impact, what came after
/learn-more                 Publications, press, links, citation guide
```

---

## 4. Voice and Tone

### Guiding principles
- **Plain language first.** Write for a curious 16-year-old, not a conference audience. If a term needs explaining, explain it in the same sentence.
- **Concrete before abstract.** Lead with the specific thing (a robot the size of a small car, a desert where it rains less than a millimeter per decade) before the category (rover, extreme environment).
- **Story over summary.** Where source documents contain specific events, moments, or surprises from the field, use them. Specificity is what makes outreach memorable.
- **Active voice.** "Zoë detected fluorescence" not "fluorescence was detected."
- **Earned authority.** Don't oversell. If a result was preliminary, say so. If a question is still open, say so. The project's credibility is an asset; don't risk it with overclaiming.
- **Human presence.** The team matters. Name people. Describe moments. Science is done by humans in real places.

### Reading level
Target: grade 8–10 for public-facing narrative sections. Technical archive pages may assume more background.

### What to avoid
- Jargon without explanation (biosignatures, hyperarid, fluorescence imager — all need a one-clause definition on first use)
- Passive constructions
- Academic hedging in public-facing prose ("it may be possible that...")
- Oversimplification that sacrifices accuracy
- Hype ("revolutionary," "groundbreaking") without specific evidence

### Tone words
Curious. Precise. Grounded. Occasionally wry. Never breathless.

---

## 5. Visual Style

### Palette
Drawn from the Atacama itself and from the NASA/aerospace design tradition.

| Role | Color | Rationale |
|---|---|---|
| Background (primary) | Near-white: `#F7F4F0` | Warm, not clinical |
| Background (dark sections) | Deep charcoal: `#1C1C1E` | Night-sky depth |
| Text (primary) | Near-black: `#1A1A1A` | High contrast, warm |
| Accent 1 | Atacama ochre: `#C4822A` | Desert sand, warm authority |
| Accent 2 | Solar blue: `#2A5FA5` | Sky, instrument readouts, links |
| Accent 3 (data/archive) | Instrument green: `#3A7D44` | Data, science layer |
| Alert / highlight | Salt white: `#EEEAE3` | Panel backgrounds |

### Typography
- **Display / headings:** A serif with character — suggests scientific authority and permanence (e.g., Playfair Display, Cormorant Garamond, or similar). *Avoid Inter, Roboto, Arial.*
- **Body:** A clean, readable sans-serif with warmth (e.g., Source Sans 3, Lato, or similar)
- **Data / code / captions:** Monospace for data displays, instrument readouts, coordinates, file listings

### Photography treatment
- Full-bleed hero images for section leads — Atacama landscapes, Zoë on traverse, team in the field
- Inline images: generous sizing, left or right float with adequate text wrap space, always captioned
- Captions: italic, smaller size, include date, location, and credit (photographer name or "LITA Project")
- Gallery grids: square crops for browsing thumbnails; full aspect ratio on expand
- Never stretch or crop subject-critical images (rover detail, instrument close-ups, life detections)

### Layout principles
- Wide margins on desktop; full-width on mobile
- Section leads with a large image and a short introductory paragraph before the body begins
- "Go deeper" affordances: visually distinct cards or buttons that signal the transition from public narrative to archive
- Data archive pages: utilitarian, clear, prioritize legibility of metadata over visual drama

---

## 6. Deployment Page Template

Each of the five deployment pages follows this consistent structure:

```
[Hero image — specific to this deployment]
[Deployment N — Year]
[Evocative subtitle: e.g., "First Map of Microbial Life"]

AT A GLANCE
  Dates | Location | Traverse distance | Team size | What was new

THE STORY
  3–6 paragraphs narrative. Draw from field notes, emails, reports.
  Include: goal, execution, a moment of surprise or difficulty, outcome.
  [Inline image: team at camp or in field]
  [Inline image: Zoë mid-traverse]

TRAVERSE MAP
  Static or interactive map of the route with key waypoints

FIELD GALLERY
  20–30 curated images, captioned
  "See all [year] images in the archive" → /archive/imagery/[year]

WHAT WE LEARNED
  2–3 paragraphs on scientific results
  Links to published papers and /findings

[← Previous Deployment] [Next Deployment →]
```

---

## 7. Archive Layer Design

### Principle
The archive is a first-class part of the website, not an afterthought. It has its own navigation hub at `/archive` and its own visual language (more utilitarian, data-forward). Every archive page links back to the relevant public narrative page, and every public narrative page links forward into the relevant archive collections.

### Archive content types

**Traverse Imagery**
- Organized by deployment, then by date/sol (field day), then by instrument (navcam, pancam, fluorescence imager, etc.)
- Browse interface: thumbnail grid with date/location/instrument metadata
- Movie generation: if possible, pre-rendered traverse timelapse movies; download links for raw frames
- Data format documentation: resolution, file format, coordinate system

**Panoramas**
- Full mosaic panoramas, zoomable (use OpenSeadragon or similar deep-zoom viewer)
- Metadata: location (GPS or named waypoint), date, instrument, number of constituent images, processing notes
- Download: full-resolution TIFF or JPEG, plus individual tiles

**Instrument Data**
- Organized by instrument type, then by deployment
- Each instrument has its own sub-page: what it measures, how it works (brief public explanation), data format documentation
- Download: raw data files, calibration data, README
- Example visualizations: one or two representative plots generated from actual data, with explanation

**Traverse Logs / Navigation Data**
- GPS tracks, autonomous navigation logs, waypoint records
- Downloadable as standard GIS formats (GeoJSON, KML, shapefile)

### "Go Deeper" UI Pattern
On every public-facing section, include a visually distinct panel — different background color (use `#3A7D44` instrument green), icon (archive/folder symbol), and clear label:

```
┌─ GO DEEPER ───────────────────────────────────────────┐
│ 🗄  The 2005 deployment archive contains:             │
│     • 14,000 traverse images                          │
│     • 23 panoramas                                    │
│     • Fluorescence spectra from 340 sample sites      │
│     → Browse the 2005 archive                         │
└───────────────────────────────────────────────────────┘
```

### External archive hosting
Large datasets (image archives, raw instrument data) should be hosted externally and linked from the site:
- **Zenodo** for datasets with DOIs (citable by researchers)
- **Flickr** or S3-backed gallery for full image browsing
- The website itself hosts curated web-resolution versions; external archives hold the originals

---

## 8. Content Sourcing Policy

**Authoritative sources (in priority order):**
1. Project source files: field notes, proposals, design documents, experimental logs, internal reports, communications
2. Published papers from the LITA project team
3. CMU and SETI Institute press releases and official communications
4. General web sources for contextual background only (Atacama geography, Mars exploration context, etc.)

**When source files conflict with web sources:** the project source files are authoritative.
**When source files are ambiguous or silent:** flag the gap explicitly; do not fill with inference or web-sourced detail.

---

## 9. Glossary of Key Terms

*(See companion LITA_glossary.md for full glossary)*

Key terms requiring explanation on first use in every public-facing page:
- Astrobiology
- Biosignature
- Autonomous navigation
- Fluorescence imager
- Hyperarid
- Mars analog
- Spectrometer
- Traverse

---

## 10. Technical Stack (Recommended)

- **Static site generator:** Astro
- **Styling:** Tailwind CSS utility classes or plain CSS with custom properties
- **Image handling:** Astro's built-in image optimization (astro:assets); responsive srcset for all images
- **Search:** Pagefind (client-side, no server required)
- **Maps:** Leaflet.js with OpenStreetMap tiles for traverse maps
- **Panorama viewer:** OpenSeadragon for deep-zoom panoramas
- **Hosting:** GitHub Pages with custom domain
- **Large data:** Zenodo (datasets), Flickr or S3 (image archive)
- **Video:** YouTube or Vimeo, embedded

---

## 11. What Claude Should and Should Not Do When Drafting

**Should:**
- Draw content strictly from provided source documents
- Flag uncertainties or gaps explicitly (e.g., "SOURCE NEEDED: exact traverse distance for this deployment")
- Use the glossary terms consistently
- Follow the voice, tone, and style guidelines in Section 4
- Produce text ready for human review and light editing — not a rough dump
- Suggest specific images by description if source documents reference photography

**Should not:**
- Invent specific facts (dates, distances, names, instrument readings) not in source documents
- Conflate LITA with ARADS
- Use passive constructions where active is possible
- Use unexplained jargon
- Overclaim results

---

*Document version: 1.0 — April 2026*
*Update this document as decisions are made during website development*
