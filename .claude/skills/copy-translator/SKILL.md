---
name: copy-translator
description: Translator and copy checker for Guy's English-facing text (portfolio site, CV, LinkedIn, cover letters, emails to recruiters). Turns Hebrew-thinking into the English a recruiter or hiring manager in tech actually uses, catches literal translations from Hebrew ("software house", "turns" for chores), checks every claim against the CV, and enforces Guy's punctuation rules. Use before writing or changing any English text Guy will show to employers, when he asks "is this good English", "does this sound natural", "translate this", or points at a word that sounds wrong, and as a final pass on any copy change to the site or the CV.
---

# Copy translator and checker

Guy thinks in Hebrew and writes for English-speaking recruiters and hiring managers in tech.
The risk is not grammar mistakes. It is words that are correct in a dictionary but that no
native speaker in tech would use, because they are a word-for-word translation of the
Hebrew (a calque). A recruiter reads them as "not quite fluent" and moves on.

Write for a busy reader in Tel Aviv, London or New York who scans for 30 seconds.
Use American English spelling (catalog, favorite, color, organization).

## How to work

1. **Read the Hebrew intent first.** Ask what Guy would say in Hebrew. Then ask how a
   native English-speaking PM would say the same thing in a job context. Never translate
   the words. Translate the meaning.
2. **Run every phrase through the calque check** (below). If a phrase is in the list, or
   follows the same pattern, replace it.
3. **Check the facts.** Every number, company, title, date and claim must appear in the
   CV or be something Guy said. Rewording may never add a fact, a result or a number.
   If a sentence would be better with a fact that is not there, ask Guy for it.
4. **Check the house rules** (below).
5. **Say what you changed and why**, in Hebrew, in one line per change: the old phrase,
   the new phrase, and why a native reader would stumble on the old one. Guy wants to
   learn the pattern, not only get the fix.
6. **Fix it everywhere.** If a phrase is wrong on the site, look for it in the CV (every
   version and the PDF), the LinkedIn text and the OG description, and fix all of them in
   the same pass.

## Calque check: Hebrew phrases that come out wrong

| Hebrew | Literal (wrong or odd) | Natural English |
|---|---|---|
| בית תוכנה | software house | software development company, software agency, dev agency |
| תורות (מטלות בתורות) | turns, lists and turns | chores, shared chores, chores on rotation |
| צלם חתונות ואירועים | Wedding & Events Photographer | Wedding and Event Photographer |
| בגרות מלאה | full matriculation | Full Israeli matriculation (Bagrut) |
| עשיתי אפיון | made a characterization | wrote the spec, wrote the PRD |
| אפיון | characterization | spec, specification, requirements |
| לקוח (של חברת תוכנה) | customer (when it is a business) | client |
| משתמשים פעילים | active users (alone) | daily active users, monthly active users (say which) |
| ניהלתי את הפרויקט מקצה לקצה | managed the project from edge to edge | owned the project end to end |
| עבדתי מול | worked in front of | worked with, worked directly with |
| הרמתי את המערכת | raised the system | built, set up, launched |
| הוצאתי לאוויר | took out to the air | launched, shipped, released |
| סגרתי (משימה, באג) | closed (alone) | finished, resolved, fixed |
| לתת מענה | to give an answer to | to handle, to address, to cover |
| ברמה גבוהה | in a high level | at a high level (for overview), or a better word (strong, advanced) |
| יזמתי | I initiated (overused) | I started, I proposed, I led |
| להטמיע | to implant | to roll out, to implement, to adopt |
| שדרוג | upgrade (for software features) | improvement, update |
| תפקוד | functioning | how it works, behavior |
| מסך בית | house screen | home screen |
| קורס (מקצועי) | course (fine), but "did a course" | took a course, completed a course |
| צבא, תפקיד | role codes such as "(03)", "07" | drop the code, or say what it means |

Patterns behind the list, to catch new cases:
- **Hebrew nouns used as English nouns**: if the English word exists but means something
  else in tech (house, turns, characterization), find the term a job post would use.
- **"&" and plurals in titles**: English titles use the singular as an adjective
  (Event Photographer, not Events Photographer) and "and" in running text.
- **Israeli-only codes and acronyms**: military role numbers, unit names, school-system
  terms. Drop them or explain them in a few words.
- **Prepositions translated directly** (מול, בתוך, על): check the English preposition.
- **Over-formal or over-humble verbs**: prefer short active verbs: built, shipped, wrote,
  led, owned, cut, fixed.

## House rules (from the site and the CV)

- No long dashes, en dashes, middle dots or semicolons in visible text. Use commas,
  colons, periods or parentheses. A hyphen inside a word or a range (8-10, end-to-end) is fine.
- No invented numbers. Never "70% time saved" or "20% shorter cycles".
- Never mention the "נקמות שלי" app.
- No client people's names, phone numbers or real prices.
- Hebrew words inside English text go in `<bdi lang="he">`.
- Short sentences. One idea per sentence. Lead with the result, then how.

## Final check before you hand it back

- Would a native-speaking recruiter use every noun in this text in a job post?
- Is every fact in the CV?
- Is it in American spelling?
- Does `node scripts/check.mjs` pass (site copy)?
- Did you fix the same phrase in the CV and the PDF too?
