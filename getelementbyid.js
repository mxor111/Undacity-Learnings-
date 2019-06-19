/*QUIZES: ANSWERS
answer: #footer {...} using the hastag

In CSS, you need to use the # at the beginning of the selector to target an element by its ID.*/

/*Which of the following will style an element by its class?

answer: .left-nav {...}  or .id {....}*/

/*Which of the following will style an element by targeting the tag name?

answer:  p{...}

In CSS, you target specific elements by their tag name.*/

/*.getElementById() method:

document.getElementById(); -If we ran the code above in the console, we wouldn't get anything, because we did not tell it the ID of any element to get! We need to pass a string to .getElementById() of the ID of the element that we want it to find and subsequently return to us:
document.getElementById('footer');

One thing to notice right off the bat, is that we're passing 'footer', not '#footer'. It already knows that it's searching for an ID (its name _is_ "getElementById", for a reason!).*/

/*To recap what we just did:
we opened the DevTools for the page we were looking at
we switched to the Console pane
we ran document.getElementById('content'); on the console
Running this code cause the document object to search through its entire tree-like structure for the element that has an ID of "content".
*/
