# CSS Layout

## Box Model

- **Definition:** When rendering an HTML document, the browser places each element inside a rectangular box consisting of four areas:

  1. **Content Area:** Where the content (text, images) is displayed.
  2. **Padding Area:** Space between the content and border.
  3. **Border Area:** The boundary around the padding.
  4. **Margin Area:** Space outside the element, used to separate elements from each other.

- **Padding vs. Margin:**

  - **Padding:** Creates space inside the element, between the content and border.
  - **Margin:** Creates space outside the element to separate it from other elements.

- **Margin Collapsing:** When two margins meet (e.g., top and bottom margins of adjacent elements), they combine into a single margin, with the size equal to the largest of the two.

## HTML Elements: Block vs. Inline

- **Block-Level Elements:** Take up the full width available and start on a new line (e.g., `<p>`, `<div>`).
- **Inline Elements:** Do not start on a new line and occupy only the necessary width (e.g., `<span>`, `<a>`, `<img>`).

## Sizing Elements

- **Width and Height:** Applied to block-level elements; for inline elements, set the `display` property to `inline-block` to apply these properties.
- **Box-Sizing:** By default, width and height apply to the content area. To include padding and borders, use `box-sizing: border-box`.

## Handling Overflow

- **Overflow Property:** Manages what happens when content is too large to fit in an element:
  - `overflow: hidden;` – Hides the overflow.
  - `overflow: scroll;` – Always shows scrollbars.
  - `overflow: auto;` – Shows scrollbars only when needed.

## Measurement Units

- **Absolute Units:** Fixed units like px, pt, in, cm.
- **Relative Units:** Adaptable units like %, vw, vh, em, rem.

## Positioning Elements

- **Static Positioning (Default):** Elements follow the normal document flow.
- **Relative Positioning:** Positioned relative to its original position in the flow.
- **Absolute Positioning:** Positioned relative to its nearest positioned ancestor.
- **Fixed Positioning:** Positioned relative to the viewport, staying fixed during scrolling.
- **Z-Index:** Controls the stacking order of elements.

## Floating Elements

- **Float Property:** Pushes an element to the left or right, allowing other content to wrap around it.
- **Collapsing Parent Issue:** Floated elements are "invisible" to their parent container, causing layout issues. Fix this by clearing floated elements.

## Flexbox (Flexible Box Layout)

- **Usage:** Aligns items in a row or column.
- **Flex Container Properties:** _Applied to Flex Container_

  - `display: flex;` – Enables Flexbox on a container.
  - `flex-direction:` – Specifies direction (row, column).
  - `justify-content:` – Aligns items along the main axis.
  - `align-items:` – Aligns items along the cross axis.
  - `flex-wrap:` – Allows wrapping of items.

- **Flex Container Properties:** _Applied to Flex Items_
  - `flex-wrap:` – Allows wrapping of items.
  - `flex-basis:` – The Initial Size of the Flex item.
  - `flex-grow:` – The Growth Factor.
  - `flex-shrink:` – The Shrink Factor.
  - `flex: [flex-grow] [flex-shrink] [flex-basis]` – Flex Shorthand

## Grid Layout

- **Definition:** A two-dimensional layout system for arranging content in rows and columns.
- **Grid Template Properties:**
  - `grid-template-rows:` – Defines row sizes.
  - `grid-template-columns:` – Defines column sizes.
  - `grid-template-areas:` – Names areas of the grid for easier layout configuration.
- **Gaps and Alignment:**
  - `gap:` – Specifies spacing between rows and columns.
  - `justify-content:` and `align-content:` – Control overall grid alignment.
- **Placing Items:**
  - `grid-column:` – Specifies column placement.
  - `grid-row:` – Specifies row placement.
  - `grid-area:` – Assigns the item to a named grid area.

## Hiding Elements

- **`display: none;`** – Removes the element entirely from the document.
- **`visibility: hidden;`** – Hides the element but retains its space.

## Media Queries

- **Definition:** Allow different styles for different devices or screen sizes.
- **Examples:**
  - `@media screen and (min-width: 500px) {}` – Styles for screens wider than 500px.
  - `@media print {}` – Styles for printing.

## Cheat Sheet for Quick Reference

1. **Box Model:**

   - `padding: 10px 20px;` – Sets padding.
   - `margin: 1px 2px 3px 4px;` – Sets margin in shorthand (top, right, bottom, left).
   - `border: 1px solid black;` – Sets border.

2. **Sizing Elements:**

   - `width: 5rem;` – Relative to root font-size.
   - `height: 20%;` – Percentage of containing element.

3. **Overflowing:**

   - `overflow: auto;` – Shows scrollbars if content exceeds container.

4. **Positioning:**

   - `position: absolute;` – Positions relative to positioned ancestor.
   - `z-index: 1;` – Controls stack order.

5. **Floating:**

   - `float: left;` – Aligns element to the left.
   - `clear: both;` – Prevents floating elements from wrapping around.

6. **Flexbox:**

   - `display: flex;` – Enables flex layout.
   - `justify-content: center;` – Centers items horizontally.

7. **Grid:**

   - `display: grid;` – Enables grid layout.
   - `gap: 10px 20px;` – Sets row and column gaps.

8. **Media Queries:**
   - `@media screen and (min-width: 500px) {}` – Applies styles for screens wider than 500px.
