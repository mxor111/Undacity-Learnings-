Each one of these sets the color to red. The only difference is in the selector; selecting by ID, selecting by class, and selecting by tag. Got it? Good!
You've already learned the DOM methods to select by ID, class, and tag, too:
.document.getElementById()
.document.getElementsByClassName()
.document.getElementsByTagName()
Three different methods that do almost the exact same thing. Wouldn't it be awesome if there were a way to do element selecting similar to how CSS does it?
Wait for it - there is!
#header {
    color: 'red';
}

.header {
    color: 'red';
}

header {
    color: 'red';
}

The querySelector Method
We can use the .querySelector() method to select elements just like we do with CSS. We use the .querySelector() method and pass it a string that's just like a CSS selector:

find and return the element with an ID of "header"
document.querySelector('#header');

// find and return the first element with the class "header"
document.querySelector('.header');

// find and return the first <header> element
document.querySelector('header');

⚠️ .querySelector() Returns A Single Element ⚠️
I want to point out one potentially tricky thing - the .querySelector() method only returns one element. This makes sense if you use it to search for an element by ID. However, even though .getElementsByClassName() and .getElementsByTagName() both return a list of multiple elements, using .querySelector() with a class selector or a tag selector will still only return the first item it finds.

he querySelectorAll Method
The .querySelector() method returns only one element from the DOM (if it exists). However, there are definitely times when you will want to get a list of all elements with a certain class or all of one type of element (e.g. all <tr> tags). We can use the .querySelectorAll() method to do this!

// find and return a list of elements with the class "header"
document.querySelectorAll('.header');

// find and return a list of <header> elements
document.querySelectorAll('header');

Here's the .querySelectorAll() method on MDN: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
