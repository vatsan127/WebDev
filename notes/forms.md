# FORMS

## Terms

- Check boxes
- CSS frameworks
- Data validation
- Data lists
- Fieldsets
- Hidden fields
- HTTP method
- Input fields
- Input controls
- Radio buttons
- Sliders
- Text areas

## Summary

- **Label elements** make forms more accessible by associating labels with input fields. When a user clicks a label, the related input field gains focus.

- Use the **`<input>` element** to accept user data. The `type` attribute specifies the input field type (e.g., text, password, email, checkbox, radio, range, date, file).

- **Data lists** provide auto-complete suggestions.

- The **`<select>` element** creates drop-down lists, containing one or more `<option>` elements.

- Use the **`<fieldset>` element** with a `<legend>` to group related input fields. Alternatively, the `<section>` element can be used.

- **Hidden fields** are not visible but can store information such as the ID of the content being edited. Do not use them for sensitive data as they can be accessed in the source code.

- **Data validation** is essential to prevent security risks and data corruption. HTML5 provides built-in validation using attributes such as `required`, `minlength`, `maxlength`, `min`, and `max`.

- To submit a form, set the `action` and `method` attributes:

  - `action`: Specifies where to send the data.
  - `method`: Determines how the data is sent (`GET` or `POST`).
    - **GET**: Data is included in the URL. Suitable for bookmarking.
    - **POST**: Data is included in the request body. Used for updating data.

- Use [Formspree](https://formspree.io) to create a form backend.

## CSS Cheat Sheet

### Forms

```html
<form action="https://formspree.io/…" method="POST">
  <label for="name">Name:</label>
  <input type="text" id="name" />
  <button type="submit">Register</button>
</form>
```

### Inputs

```html
<input type="email" />
<input type="password" />
<input type="checkbox" />
<input type="radio" />
<input type="range" />
<input type="date" />
<input type="file" />
```

### Grouping Fields

```html
<fieldset>
  <legend>Contact Information</legend>
  <input type="text" placeholder="First Name" />
  <input type="text" placeholder="Last Name" />
</fieldset>
```

### Data Validation

```html
<input type="number" min="0" max="5" required />
<input type="text" minlength="3" maxlength="50" required />
```
