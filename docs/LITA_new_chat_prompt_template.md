# LITA Website — New Chat Prompt Template
*Copy and paste this at the start of each new drafting session. Fill in the bracketed sections.*

---

## Prompt to paste at the start of each chat

```
I'm working on the Life in the Atacama (LITA) website. 
This Project contains the design specification and glossary — please treat both as authoritative.

Today I'm drafting: [NAME OF SECTION / PAGE]
This corresponds to the sitemap entry: [e.g., /expeditions/2005]

I'm attaching the following source files for this section:
[LIST THE FILES YOU'RE UPLOADING — e.g., "2005_field_report.pdf, deployment3_emails.txt, paper_cabrol2006.pdf"]

Please read all attached documents before responding.

My request for this session:
[CHOOSE ONE OR MORE FROM THE TASK MENU BELOW]
```

---

## Task Menu — choose what you need

Paste one or more of these into the prompt above.

**To produce a timeline:**
```
Produce a detailed chronological timeline of events for [DEPLOYMENT / PERIOD], 
drawn strictly from the attached documents. 
Format: Date | Event | Source document
Flag any gaps or ambiguities as [SOURCE NEEDED: description].
```

**To draft a narrative page:**
```
Draft the public-facing narrative for the [PAGE NAME] page.
Follow the voice and tone guidelines in the design specification.
Use the glossary for all defined terms.
Where the source documents contain specific events, moments, or direct 
observations, use them — specificity matters.
Flag any claims you are uncertain about or that lack source support.
Target length: [e.g., 600–800 words for the main narrative, plus an 
"At a Glance" table].
```

**To extract a technical description:**
```
From the attached documents, extract and synthesize a description of 
[INSTRUMENT / SYSTEM / ALGORITHM].
Produce two versions:
1. Public-facing (2–3 paragraphs, plain language, with an analogy 
   that explains how it works)
2. Technical summary (bullet points, precise terminology, suitable 
   for the archive page)
Flag any technical details you are uncertain about.
```

**To identify archive content:**
```
From the attached documents, identify all references to:
- Images or image collections (traverse imagery, panoramas, specific photographs)
- Instrument data collections (spectra, readings, logs)
- Maps or traverse route data
For each, note: what it is, approximate volume/size if mentioned, 
where it was collected, and which deployment it belongs to.
Format as a table.
```

**To extract anecdotes and stories:**
```
From the attached documents, identify the 5–10 most compelling specific 
moments, events, or observations that would work well as short outreach 
anecdotes — things that are concrete, surprising, or that reveal 
something about how science or robotics actually works in the field.
For each, provide: a one-sentence summary, the relevant passage or 
paraphrase from the source, and the source document.
```

**To populate the "At a Glance" panel:**
```
From the attached documents, extract the following factual details for 
[DEPLOYMENT YEAR]:
- Exact dates of field deployment
- Geographic location(s) within the Atacama
- Total traverse distance (km)
- Number of team members / key personnel names
- What was new or different about this deployment vs. prior ones
- Key scientific objectives
- Key results
Format as a structured table.
Flag any items not clearly supported by the documents.
```

**To produce a "Go Deeper" archive panel:**
```
Based on the attached documents, draft a "Go Deeper" archive panel for 
the [PAGE NAME] page. 
This panel introduces researchers to the data available from this 
deployment/section.
Include: what data types are available, approximate volumes, 
what a researcher might use them for.
Follow the "Go Deeper" visual specification from the design document.
```

---

## Reminders for every session

- LITA (2002–2018, Zoë) and ARADS (separate project, K-REX2) are distinct. Do not conflate them.
- Source files are authoritative. Web knowledge is background context only.
- Flag every uncertain claim with [VERIFY] or [SOURCE NEEDED: description].
- Use the glossary definitions on first use of every defined term.
- Do not invent specific facts (dates, distances, measurements) not in source documents.
- End each session by producing a brief "session summary" — decisions made, open questions, what still needs sourcing.
```

---

## Tips for efficient sessions

**Before the chat:**
- Pre-select 10–20 most relevant source documents for this section (not everything in the folder)
- Strip email headers and signatures from email exports before uploading
- Convert heavily formatted PDFs to plain text if possible to reduce token use
- Have the task menu choice ready before starting

**During the chat:**
- Work one task at a time — don't try to draft an entire page and populate a timeline in one prompt
- After a major output (a drafted section, a timeline), ask for a summary before continuing: "Before we continue, please summarize what we've established and any open questions."
- Save all outputs before closing the chat — there is no automatic save

**After the chat:**
- Append the session summary to your running LITA_project_state.md file
- Note which source files were most useful for this section
- Log any [VERIFY] or [SOURCE NEEDED] flags in a separate issues list

---

## Session summary request

At the end of every chat, paste this:

```
Before we finish: please produce a session summary containing:
1. What page/section we drafted
2. Key decisions made (terminology, framing, what was included/excluded)
3. All [VERIFY] and [SOURCE NEEDED] flags from this session
4. Source documents used
5. What remains to be done for this section
```

---

*Template version: 1.0 — April 2026*
