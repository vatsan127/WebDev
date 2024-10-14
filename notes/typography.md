# Typography

## Summary

- Typography involves making text visually appealing and easy to read across different screen sizes. Since text makes up a large part of web content, front-end developers should prioritize clear, legible typography.
- Fonts are categorized into three main types: **Serif**, **Sans-serif**, and **Monospace**.
  - **Serif fonts** have decorative strokes at character edges, giving a formal look.
  - **Sans-serif fonts** lack these strokes, appearing modern and approachable.
  - **Monospace fonts** feature characters with equal width, often used for code.

---

## CSS Cheat Sheet

### Styling Fonts

- `font-family: Arial, Helvetica, sans-serif;` — Set font family with fallbacks.
- `font-size: 1rem;` — Set font size using rem units.
- `font-weight: bold;` — Make text bold.
- `font-style: italic;` — Italicize the text.

### Vertical Spacing

- `margin: 3rem 0 1rem;` — Set vertical margins (top, right/left, bottom).
- `line-height: 1.5;` — Set line height to 1.5 times the font size.

### Horizontal Spacing

- `letter-spacing: -1px;` — Reduce spacing between letters.
- `word-spacing: 2px;` — Increase spacing between words.
- `width: 50ch;` — Set the width to approximately 60-70 characters.

### Formatting Text

- `text-align: center;` — Center-align text.
- `text-indent: 1rem;` — Indent the first line by 1 rem.
- `text-decoration: underline;` — Underline the text.
- `text-transform: uppercase;` — Convert text to uppercase.
- `white-space: nowrap;` — Prevent text from wrapping to a new line.
- `direction: rtl;` — Set text direction to right-to-left.

### Multi-column Text

- `column-count: 2;` — Split text into two columns.
- `column-gap: 2rem;` — Set the gap between columns.
- `column-rule: 3px dotted #999;` — Add a vertical rule between columns.
