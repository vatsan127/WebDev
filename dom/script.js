alert("Welcome to HomePage");

let heading = document.getElementById("heading");
heading.innerText = "Welcome";

// get all elements by class Name
let paragraphs = document.getElementsByClassName("paragraph-1");
for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].textContent = "this data is changed";
}

// querySelector() finds the first element that matches a CSS selector.
let firstParagraph = document.querySelector("p");
console.log("querySelector: " + firstParagraph.textContent);

// querySelectorAll() finds all elements that match a CSS selector.
let allParagraphs = document.querySelectorAll("p");
allParagraphs.forEach((lines) => console.log(lines));

// Create new element
let newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new paragraph.";
document.body.appendChild(newParagraph);

// Styling Elements
heading.style.color = "blue";
heading.style.fontSize = "24px";

// adds a specified class to an element's list of classes. If the class already exists on the element, it won't be added again.
// document.querySelector("<element>").classlist.add("<className>");

// removes a specified class from an element's list of classes. If the class doesn't exist, it does nothing.
// document.querySelector("<element>").classlist.remove("<className>");

// method adds the specified class if it is not present, or removes it if it is present. It essentially switches the class on or off.
// document.querySelector("<element>").classlist.toggle("<className>");

// Event Listener
// Mouse events: click, dblclick, mousedown, mouseup, mouseenter, mouseleave, mouseover, mouseout, etc.
// Keyboard events: keydown, keyup, keypress
// Form events: submit, focus, blur, change, input
// Window events: load, resize, scroll, unload
// Touch events (on mobile): touchstart, touchend, touchmove

// element.addEventListener(event, function);
// element: The DOM element to which you want to attach the listener.
// event: A string representing the type of event to listen for (e.g., "click").
// function: The function to run when the event occurs.

function handleClick() {
  alert("heading was clicked!");
}

heading.addEventListener("click", handleClick);

// heading.removeEventListener("click", handleClick);

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.print = function () {
    alert("Welcome " + name + "!");
  };
}

let steve = new Person("steve", 22);
steve.print();
