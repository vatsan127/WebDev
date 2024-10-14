## CSS Cheat Sheet

### Background Images

- `background: url(../images/bg.jpg);`
- `background-repeat: no-repeat;`
- `background-position: 100px 100px;`
- `background-size: cover;`
- `background-attachment: fixed;`

### Clipping

- `clip-path: polygon(50% 0%, ...);`

### Filters

- Examples of filters:
  - `filter: grayscale(70%);`
  - `filter: blur(3px);`
  - `filter: brightness(0.5);`
  - `filter: contrast(200%);`
  - `filter: drop-shadow(10px 10px 10px grey);`
  - `filter: hue-rotate(90deg);`
  - `filter: invert(50%);`
  - `filter: saturate(25%);`
  - `filter: sepia(50%);`
  - `filter: opacity(50%);`
  - Combine filters: `filter: grayscale(70%) blur(3px);`

### Supporting High-Density Screens

```html
<img
  srcset="images/meal.jpg 1x, images/meal@2x.jpg 2x, images/meal@3x.jpg 3x"
  src="images/meal.jpg"
/>
```

- Use for fixed-size images. The browser selects the best image based on the device's pixel ratio.

### Resolution Switching

```html
<img
  srcset="
    images/meal.jpg     400w,
    images/meal@2x.jpg  800w,
    images/meal@3x.jpg 1200w
  "
  sizes="
    (max-width: 500px) 100vw, 
    (max-width: 700px) 50vw, 
    33vw"
  src="images/meal.jpg"
/>
```

- Use for flexible-size images. The browser downloads the optimal image based on the screen resolution and pixel ratio.

### Supporting Modern Image Formats

```html
<picture>
  <source srcset="..." type="image/webp" />
  <source srcset="..." type="image/jpeg" />
  <img src="fallback.jpg" alt="Description" />
</picture>
```

- Use the <picture> element to support formats like WebP with fallbacks.

### Art Direction

```html
<picture>
  <source media="(min-width: 800px)" srcset="large.jpg" />
  <source media="(min-width: 400px)" srcset="medium.jpg" />
  <img src="small.jpg" alt="Description" />
</picture>
```

- The browser selects the best source based on the specified media conditions.
