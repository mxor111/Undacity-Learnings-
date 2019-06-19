const lotsOfElements = document.querySelectorAll('.quizzing-quizzby');
const element = lotsOfElements[2];

element.addEventListener('animationend', function () {
    const mainHeading = document.querySelector('h1');

    mainHeading.style.backgroundColor = 'purple';
});  ## the event Type would be animationend



This code sets up a listener only for when a key is pressed. If the document is clicked, no listener is set up for that, so the click is ignored.
document.addEventListener('keypress', function () {
    document.body.remove();
});

writing event listerner:


CREATING EVENT LISTNER

We're creating a <div> element, attaching two hundred paragraph elements and attaching an event listener with a respondToTheClick function to each paragraph as we create it. There are a number of ways we could refactor this code. For example, as of right now, we're creating two hundred different respondToTheClick functions (that all actually do the exact same thing!). We could extract this function and just reference the function instead of creating two hundred different functions:

const myCustomDiv = document.createElement('div');

for (let i = 1; i <= 200; i++) {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is paragraph number ' + i;

    newElement.addEventListener('click', function respondToTheClick() {
        console.log('A paragraph was clicked.');
    });

    myCustomDiv.appendChild(newElement);
}

document.body.appendChild(myCustomDiv);



BY ADDING A FUNCTION WE CAN REFACTOR WE CAN DO THE SAME THING FOR IT RUNNING 200 TIMES


const myCustomDiv = document.createElement('div');

function respondToTheClick() {
    console.log('A paragraph was clicked.'); \\ adding the function
}

for (let i = 1; i <= 200; i++) {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is paragraph number ' + i;

    newElement.addEventListener('click', respondToTheClick);

    myCustomDiv.appendChild(newElement);
}

document.body.appendChild(myCustomDiv);

\\ This is a great step in the right direction!
However, we still have two hundred event listeners. They're all pointing to the same listener function, but there are still two hundred different event listeners.
What if we moved all of the listeners to the <div> instead?


The code for this would look like:

const myCustomDiv = document.createElement('div');

function respondToTheClick() {
    console.log('A paragraph was clicked.');
}

for (let i = 1; i <= 200; i++) {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is paragraph number ' + i;

    myCustomDiv.appendChild(newElement);
}

myCustomDiv.addEventListener('click', respondToTheClick);

document.body.appendChild(myCustomDiv);

Now there is only:
a single event listener
a single listener function
Now the browser doesn't have to store in memory two hundred different event listeners and two hundred different listener functions. That's a great for performance`!
However, if you test the code above, you'll notice that we've lost access to the individual paragraphs. There's no way for us to target a specific paragraph element.So how _do_ we combine this efficient code with the access to the individual paragraph items that we did before?
We use a process called event delegation.
Event Delegation
Remember the event object that we looked at in the previous section? That's our ticket to getting back the original functionality!
The event object has a .target property. This property references the target of the event. Remember the capturing, at target, and bubbling phases?...these are coming back into play here, too!
Let's say that you click on a paragraph element. Here's roughly the process that happens:
a paragraph element is clicked
the event goes through the capturing phase
it reaches the target
it switches to the bubbling phase and starts going up the DOM tree
when it hits the <div> element, it runs the listener function
inside the listener function, event.target is the element that was clicked
So event.target gives us direct access to the paragraph element that was clicked. Because we have access to the element directly, we can access its .textContent, modify its styles, update the classes it has - we can do anything we want to it!



So event.target gives us direct access to the
 paragraph element that was clicked. Because we
  have access to the element directly, we can access its .textContent,
  modify its styles, update the classes it has - we can do anything we want to it!

  const myCustomDiv = document.createElement('div');

function respondToTheClick(evt) {
    console.log('A paragraph was clicked: ' + evt.target.textContent);
}

for (let i = 1; i <= 200; i++) {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is paragraph number ' + i;

    myCustomDiv.appendChild(newElement);
}

document.body.appendChild(myCustomDiv);

myCustomDiv.addEventListener('click', respondToTheClick);

In the code snippet we used above, we added the event listener directly to the <div> element. The listener function logs a message saying that a paragraph element was clicked (and then the text of the target element). This works perfectly! However, there is nothing to ensure that it was actually a <p> tag that was clicked before running that message. In this snippet, the <p> tags were direct children of the <div> element, but what happens if we had the following HTML:

<article id="content">
  <p>Brownie lollipop <span>carrot cake</span> gummies lemon drops sweet roll dessert tiramisu. Pudding muffin <span>cotton candy</span> croissant fruitcake tootsie roll. Jelly jujubes brownie. Marshmallow jujubes topping sugar plum jelly jujubes chocolate.</p>

  <p>Tart bonbon soufflé gummi bears. Donut marshmallow <span>gingerbread cupcake</span> macaroon jujubes muffin. Soufflé candy caramels tootsie roll powder sweet roll brownie <span>apple pie</span> gummies. Fruitcake danish chocolate tootsie roll macaroon.</p>
</article>

In this filler text, notice that there are some <span> tags. If we want to listen to the <article> for a click on a <span>, you might think that this could would work:

document.querySelector('#content').addEventListener('click', function (evt) {
    console.log('A span was clicked with text ' + evt.target.textContent);
});

This will work, but there's a major flaw. The listener function will still fire when either one of the paragraph elements is clicked, too! In other words, this listener function is not verifying that the target of the event is actually a <span> element. Let's add in this check:

document.querySelector('#content').addEventListener('click', function (evt) {
    if (evt.target.nodeName === 'SPAN') {  // ← verifies target is desired element
        console.log('A span was clicked with text ' + evt.target.textContent);
    }
});

Remember that every element inherits properties from the Node Interface. One of the properties of the Node Interface that is inherited is .nodeName. We can use this property to verify that the target element is actually the element we're looking for. When a <span> element is clicked, it will have a .nodeName property of "SPAN", so the check will pass and the message will be logged. However, if a <p> element is clicked, it will have a .nodeName property of "P", so the check will fail and the message will not be logged.

he nodeName's Capitalization ⚠️
The .nodeName property will return a capital string, not a lowercase one. So when you perform your check make sure to either:
check for capital letters
convert the .nodeName to lowercase

// check using capital letters
if (evt.target.nodeName === 'SPAN') {
    console.log('A span was clicked with text ' + evt.target.textContent);
}

> // convert nodeName to lowercase
if (evt.target.nodeName.toLowerCase() === 'span') {
    console.log('A span was clicked with text ' + evt.target.textContent);
}

Recap
In this section, we looked at Event Delegation. Event Delegation is the process of delegating to a parent element the ability to manage events for child elements. We were able to do this by making use of:
the event object and its .target property
the different phases of an event


The event delegation may be used to optimize event handling. We use a single handler for similar actions on many elements. Like we did it for highlighting <td>.
But we can also use a single handler as an entry point for many different things.
For instance, we want to make a menu with buttons “Save”, “Load”, “Search” and so on. And there’s an object with methods save, load, search….
The first idea may be to assign a separate handler to each button. But there’s a more elegant solution. We can add a handler for the whole menu and data-action attributes for buttons that has the method to call:

<button data-action="save">Click to Save</button>

LOOK AT THE CODE IN HTLM

<!doctype html>
<body>
<div id="menu">
  <button data-action="save">Save</button>
  <button data-action="load">Load</button>
  <button data-action="search">Search</button>
</div>

<script>
  class Menu {
    constructor(elem) {
      this._elem = elem;
      elem.onclick = this.onClick.bind(this); // (*)
    }

    save() {
      alert('saving');
    }

    load() {
      alert('loading');
    }

    search() {
      alert('searching');
    }

    onClick(event) {
      let action = event.target.dataset.action;
      if (action) {
        this[action]();
      }
    };
  }

  new Menu(menu);
</script>
</body>
Please note that this.onClick is bound to this in (*). That’s important, because otherwise this inside it would reference the DOM element (elem), not the menu object, and this[action] would not be what we need.
So, what the delegation gives us here?

e don’t need to write the code to assign a handler to each button. Just make a method and put it in the markup.
The HTML structure is flexible, we can add/remove buttons at any time.
We could also use classes .action-save, .action-load, but an attribute data-action is better semantically. And we can use it in CSS rules too.


We can also use event delegation to add “behaviors” to elements declaratively, with special attributes and classes.
The pattern has two parts:
We add a special attribute to an element.
A document-wide handler tracks events, and if an event happens on an attributed element – performs the action.
Counter
For instance, here the attribute data-counter adds a behavior: “increase on click” to buttons:

<!doctype html>
<body>
Counter: <input type="button" value="1" data-counter>
One more counter: <input type="button" value="2" data-counter>

<script>
  document.addEventListener('click', function(event) {

    if (event.target.dataset.counter != undefined) { // if the attribute exists...
      event.target.value++;
    }

  });
</script>
</body>

If we click a button – its value is increased. Not buttons, but the general approach is important here.
There can be as many attributes with data-counter as we want. We can add new ones to HTML at any moment. Using the event delegation we “extended” HTML, added an attribute that describes a new behavior.


For document-level handlers – always addEventListener
When we assign an event handler to the document object, we should always use addEventListener, not document.onclick, because the latter will cause conflicts: new handlers overwrite old ones.
For real projects it’s normal that there are many handlers on document set by different parts of the code.



ne more example. A click on an element with the attribute data-toggle-id will show/hide the element with the given id:

<!doctype html>
<body>
<button data-toggle-id="subscribe-mail">
  Show the subscription form
</button>

<form id="subscribe-mail" hidden>
  Your mail: <input type="email">
</form>

<script>
  document.addEventListener('click', function(event) {
    let id = event.target.dataset.toggleId;
    if (!id) return;

    let elem = document.getElementById(id);

    elem.hidden = !elem.hidden;
  });
</script>
</body>

LOOK ABOVE USING DATA_TOGGLE
Let’s note once again what we did. Now, to add toggling functionality to an element – there’s no need to know JavaScript, just use the attribute data-toggle-id.
That may become really convenient – no need to write JavaScript for every such element. Just use the behavior. The document-level handler makes it work for any element of the page.
We can combine multiple behaviors on a single element as well.
The “behavior” pattern can be an alternative of mini-fragments of JavaScript.

implifies initialization and saves memory: no need to add many handlers.
Less code: when adding or removing elements, no need to add/remove handlers.
DOM modifications: we can mass add/remove elements with innerHTML and alike.

First, the event must be bubbling. Some events do not bubble. Also, low-level handlers should not use event.stopPropagation().
Second, the delegation may add CPU load, because the container-level handler reacts on events in any place of the container, no matter if they interest us or not. But usually the load is negligible, so we don’t take it into account.


<!DOCTYPE HTML>
<html>

<head>
  <meta charset="utf-8">
  <style>
    body {
      height: 2000px;
      /* make body scrollable, the tooltip should work after the scroll */
    }

    .tooltip {
      position: fixed;
      padding: 10px 20px;
      border: 1px solid #b3c9ce;
      border-radius: 4px;
      text-align: center;
      font: italic 14px/1.3 sans-serif;
      color: #333;
      background: #fff;
      box-shadow: 3px 3px 3px rgba(0, 0, 0, .3);
    }
  </style>
</head>

<body>

  <p>LaLaLa LaLaLa LaLaLa LaLaLa LaLaLa LaLaLa LaLaLa LaLaLa LaLaLa</p>
  <p>LaLaLa LaLaLa LaLaLa LaLaLa LaLaLa LaLaLa LaLaLa LaLaLa LaLaLa</p>

  <button data-tooltip="the tooltip is longer than the element">Short button</button>
  <button data-tooltip="HTML<br>tooltip">One more button</button>

  <p>Scroll the page to make buttons appear on the top, check if the tooltips show up correctly.</p>


  <script>
    let tooltipElem;

    document.onmouseover = function(event) {
      let target = event.target;

      // if we have tooltip HTML...
      let tooltipHtml = target.dataset.tooltip;
      if (!tooltipHtml) return;

      // ...create the tooltip element

      tooltipElem = document.createElement('div');
      tooltipElem.className = 'tooltip';
      tooltipElem.innerHTML = tooltipHtml;
      document.body.append(tooltipElem);

      // position it above the annotated element (top-center)
      let coords = target.getBoundingClientRect();

      let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
      if (left < 0) left = 0; // don't cross the left window edge

      let top = coords.top - tooltipElem.offsetHeight - 5;
      if (top < 0) { // if crossing the top window edge, show below instead
        top = coords.top + target.offsetHeight + 5;
      }

      tooltipElem.style.left = left + 'px';
      tooltipElem.style.top = top + 'px';
    };

    document.onmouseout = function(e) {

      if (tooltipElem) {
        tooltipElem.remove();
        tooltipElem = null;
      }

    };
  </script>

</body>
</html>
