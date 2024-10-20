# CSS Concepts and Cheat Sheet

## 1. Stylesheets

- CSS can be written as embedded, external, or inline styles.
- Inline styles override embedded styles, which in turn override external styles.
- External stylesheets provide better separation and maintainability and can be reused across multiple documents.

## 2. Selectors

- Elements can be selected by type, class, attribute, or ID.
- Relational selectors select elements based on their position but can lead to fragile styles.
- Pseudo-classes (e.g., `:first-child`, `:nth-child`) target elements without specific classes.
- Pseudo-elements (e.g., `::first-letter`, `::before`) style parts of elements.
- Specificity determines which selector is applied when multiple selectors target the same element.

## 3. Colors

- Colors can be specified by name, hexadecimal, RGB/RGBA, or HSL/HSLA values.
- RGBA and HSLA include an alpha channel for transparency.

## 4. Gradients

- Gradients can be created using `linear-gradient()` or `radial-gradient()`.
- Gradients are treated as images and can be used with `background-image` or `background`.

## 5. Borders and Shadows

- The border property can be defined with thickness, style, and color.
- `border-width`, `border-style`, and `border-color` can set individual sides.
- `box-shadow` and `text-shadow` add shadows to elements and text with configurable distance, blur radius, and color.

---

# CSS Cheat Sheet

## Basic Selectors

- `article` — All `<article>` elements.
- `.product` — Elements with the class `product`.
- `#products` — The element with the ID `products`.
- `a[href="..."]` — Anchors with the given `href` attribute.
- `a[href*="google"]` — Anchors whose `href` contains "google".
- `a[href^="https"]` — Anchors whose `href` starts with "https".
- `a[href$=".com"]` — Anchors whose `href` ends with ".com".

## Relational Selectors

- `#products p` — All `<p>` elements inside `#products`.
- `#products > p` — Direct child `<p>` elements of `#products`.
- `#products + p` — The `<p>` element immediately after `#products` (sibling).
- `#products ~ p` — All `<p>` elements after `#products` (siblings).

## Pseudo-class Selectors

- `article :first-child` — The first child of `<article>` elements.
- `article :first-of-type` — The first occurrence of elements of different types.
- `article p:first-of-type` — The first `<p>` element inside `<article>` elements.
- `article :last-child` — The last child of `<article>` elements.
- `article :last-of-type` — The last occurrence of elements of different types.
- `article :nth-child(odd)` — Odd child elements of `<article>`.
- `article :nth-child(even)` — Even child elements of `<article>`.

## Pseudo-element Selectors

- `p::first-letter` — The first letter of every `<p>` element.
- `p::first-line` — The first line of every `<p>` element.
- `::selection` — Any selected element.
- `p::before` — Inserts content before the content of `<p>` elements.
- `p::after` — Inserts content after the content of `<p>` elements.

## Colors

- `#fcba03` — Hexadecimal value.
- `rgb(252, 186, 3)` — RGB value.
- `rgba(252, 186, 3, 0.5)` — Semi-transparent RGB value.
- `hsl(44, 98%, 50%)` — HSL value.
- `hsla(44, 98%, 50%, 0.5)` — Semi-transparent HSL value.

## Gradients

- `background: linear-gradient(blue, yellow);` — Linear gradient from blue to yellow.
- `background: linear-gradient(to bottom right, blue, yellow);` — Linear gradient to the bottom right.
- `background: linear-gradient(45deg, blue, yellow);` — Linear gradient at a 45-degree angle.
- `background: linear-gradient(45deg, blue, yellow 30%);` — Gradient with a color stop.
- `background: radial-gradient(white, yellow);` — Radial gradient from white to yellow.
- `background: radial-gradient(circle, white, yellow);` — Circular radial gradient.
- `background: radial-gradient(circle at top left, white, yellow);` — Radial gradient positioned at the top left.

## Borders

- `border: 10px solid blue;` — Solid blue border with 10px thickness.
- `border-width: 10px 20px 30px 40px;` — Different widths for each side (top, right, bottom, left).
- `border-radius: 5px;` — Rounded corners with a 5px radius.
- `border-radius: 100%;` — Full circle border.

## Shadows

- `box-shadow: 10px 10px;` — Box shadow with a 10px offset.
- `box-shadow: 10px 10px grey;` — Grey box shadow.
- `box-shadow: 10px 10px 5px grey;` — Grey box shadow with a 5px blur radius.
- `text-shadow: 3px 3px 5px rgba(0, 0, 0, 0);` — Text shadow with 3px offset and 5px blur radius.
