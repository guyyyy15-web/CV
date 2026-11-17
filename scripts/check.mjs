// House rules for the visible copy, plus local links. Run: node scripts/check.mjs
import { readFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

const SITE = fileURLToPath(new URL('../site/', import.meta.url))
let fail = 0
const bad = (msg) => { fail++; console.log('FAIL', msg) }

for (const page of ['index.html', '404.html']) {
  const html = readFileSync(join(SITE, page), 'utf8')
  // Visible text: drop head, scripts, comments and tags, keep alt text (screen readers read it).
  const body = html.replace(/<head>[\s\S]*?<\/head>/, '').replace(/<script[\s\S]*?<\/script>/g, '').replace(/<!--[\s\S]*?-->/g, '')
  const alts = [...body.matchAll(/alt="([^"]*)"/g)].map((m) => m[1]).join(' ')
  const meta = [...html.matchAll(/<(?:title|meta[^>]+content=")([^"<]*)/g)].map((m) => m[1]).join(' ')
  const text = (body.replace(/<[^>]+>/g, ' ') + ' ' + alts + ' ' + meta).replace(/&amp;/g, '&')
  for (const [ch, name] of [['—', 'em dash'], ['–', 'en dash'], ['·', 'middle dot'], [';', 'semicolon']]) {
    if (text.includes(ch)) bad(`${page}: ${name} in visible text: ...${text.slice(Math.max(0, text.indexOf(ch) - 40), text.indexOf(ch) + 20).replace(/\s+/g, ' ')}...`)
  }
  for (const banned of ['70%', '20% shorter', 'נקמות', 'revenge', 'guyyyy15@', 'gmail.com']) {
    if (html.includes(banned)) bad(`${page}: banned text "${banned}"`)
  }
  for (const m of html.matchAll(/(?:href|src|srcset)="(\/[^"#?]*)"/g)) {
    const f = m[1] === '/' ? 'index.html' : m[1].slice(1)
    if (!existsSync(join(SITE, f))) bad(`${page}: missing file ${m[1]}`)
  }
  for (const m of html.matchAll(/<img\b[^>]*>/g)) if (!/data-decorative/.test(m[0]) && !/alt="[^"]{12,}"/.test(m[0])) bad(`${page}: image without real alt text: ${m[0].slice(0, 80)}`)
}
if (!readFileSync(join(SITE, 'index.html'), 'utf8').includes('<meta name="robots" content="noindex">')) bad('noindex meta missing')
for (const m of readFileSync(join(SITE, 'index.html'), 'utf8').matchAll(/<video\b[^>]*>/g)) {
  if (!/aria-label="[^"]{20,}"/.test(m[0])) bad('video without a description: ' + m[0].slice(0, 80))
  const src = (m[0].match(/data-src="\/([^"]+)"/) || [])[1]
  if (!src || !existsSync(join(SITE, src))) bad('video file missing: ' + src)
}
console.log(fail ? `${fail} problem(s)` : 'all checks passed')
process.exit(fail ? 1 : 0)
