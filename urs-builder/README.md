# URS Builder - Bioreactor

A questionnaire that customers fill in to produce a **User Requirements
Specification (URS)** for a bioreactor. Each answer shows the design solution
we recommend and the industry standards behind it. The answers are compiled
into a printable URS document.

It is a static page with no build step and no server. Open `index.html` in a
browser or host the `urs-builder/` folder on any static web server.

## What the customer does

1. Fills in project information and answers the questions section by section
   (49 questions in 11 sections; questions that don't apply are hidden, e.g.
   CIP/SIP questions for single-use systems).
2. Reviews the generated **URS document** (requirements table with IDs,
   design basis and standards, open items, items needing our clarification,
   referenced standards, approval block).
3. Clicks **Download answers** (JSON) and **Print / PDF**, then sends both to us.
   We load the JSON with **Load answers** to see exactly what they entered.

Answers are also kept in the browser's local storage, so a half-finished
questionnaire survives a page reload on the same computer.

## Files

| Path | Purpose |
| --- | --- |
| `index.html`, `styles.css`, `app.js` | The questionnaire and URS document view |
| `data/bioreactor.js` | Question bank: questions, answer options, recommended solutions, scope status |
| `data/standards.js` | Register of the standards and guidelines the questions cite |
| `tools/build-review.mjs` | Validates the question bank and generates the scope review sheet |
| `docs/scope-review.md` | Generated review sheet (one entry per answer option) |

## Scope review

Every answer option has a `scope` field that records whether it is within our
supply scope:

| `scope` | Meaning | Shown to the customer as |
| --- | --- | --- |
| `tbd` | Not reviewed yet | nothing |
| `in` | Standard supply | "Standard" |
| `conditional` | Possible on request / after engineering review | "On request" + note |
| `out` | We do not supply this | "Outside standard scope" + note |

Number questions (working volumes) have a `scopeRange: { min, max }` instead.
Answers that are `conditional` or `out` appear in the URS under "Items for
supplier clarification".

All options start as `tbd`. To review:

1. Read `docs/scope-review.md` section by section.
2. Set `scope` (and optionally `scopeNote`) for each option in
   `data/bioreactor.js`, and adjust any `solution` text that doesn't match
   what we actually offer.
3. Regenerate the sheet:

   ```sh
   node tools/build-review.mjs          # validate + regenerate docs/scope-review.md
   node tools/build-review.mjs --check  # validate only
   ```

## Editing questions

- Keep question `id`s stable. They are the requirement IDs in issued URS
  documents and the keys in customers' saved answer files.
- `showIf: { q: 'VES-01', in: ['ss'] }` hides a question unless that answer
  is selected.
- Standards are referenced by key from `data/standards.js`; the validator
  reports unknown keys.
