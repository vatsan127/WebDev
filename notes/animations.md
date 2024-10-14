# Animations

## Summary

- Using the `transform` property, we can apply one or more transformations to an element.
- The most common transformation functions are `rotate()`, `skew()`, `translate()`, and `scale()`.
- The `transition` property is used to animate one or more properties.
- To create a custom animation, first, we need to define the keyframes. Each keyframe includes the list of styles to be applied at a given moment in time. Once we define the keyframes, we can use the `animation` property to animate an element.

---

# CSS Cheat Sheet

## Transformations

- `transform: rotate(15deg);` — Rotate the element 15 degrees clockwise.
- `transform: rotate(-15deg);` — Rotate the element 15 degrees counterclockwise.
- `transform: scale(1.3);` — Scale the element to 1.3 times its original size.
- `transform: skew(15deg);` — Skew the element by 15 degrees.
- `transform: translate(10px, 20px);` — Move the element 10px to the right and 20px down.
- `transform: translateX(10px);` — Move the element 10px to the right.
- `transform: translateY(20px);` — Move the element 20px down.
- `transform: rotate(15deg) scale(1.3);` — Apply multiple transformations (rotate and scale).

## Transitions

- `transition: transform .5s;` — Transition the `transform` property over 0.5 seconds.
- `transition: transform .5s ease-out;` — Apply an "ease-out" timing function to the transition.
- `transition: transform .5s ease-out 1s;` — Add a 1-second delay to the transition.
- `transition: transform .5s, color .3s;` — Transition both `transform` (0.5s) and `color` (0.3s) properties.

## Animations

```css
@keyframes pop {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  75% {
    transform: rotate(45deg);
    background: tomato;
  }
  100% {
    transform: rotate(0);
  }
}

.box {
  animation: pop 3s ease-out;
}
```
