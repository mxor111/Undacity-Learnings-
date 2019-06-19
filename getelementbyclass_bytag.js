The next two DOM methods that we'll be looking at that both return multiple elements are:
.getElementsByClassName()
.getElementsByTagName()
Accessing Elements By Their Class
The first method we'll look at is .getElementsByClassName():

document.getElementsByClassName();

imilarly to .getElementById(), if we ran the code above in the console, we wouldn't get anything, because we did not tell it the class to search for! Also just like .getElementById(), .getElementsByClassName() is expecting that we call it with a string of the class we want it to search for/return:

document.getElementsByClassName('brand-color');


so STEPS TO TAKE TO LOOK AT THIS IN CONSOLE:

open up web browser page -
1. click on whatever element on the page you want to inspect
2. open the console to the element page - you will see what you clicked on highlight
3. find the content that is shows CLASS Element; example
class='highlight-spanned'
3. in console below type ;
document.getElementsByClassName('highlight-spanned');

this will return what it finds ;
4. click the little arrow key to open up and see what it finds


Beware of the S!
I know we haven't looked at .getElementsByTagName() just yet, but there's something different about .getElementById() compared with both .getElementsByClassName() and .getElementsByTagName() that I want to point out because it can be easy to miss; both .getElementsByClassName() and .getElementsByTagName() have an extra "s" in their name.
The method's name is .getElementsByClassName(), not .getElementByClassName(). Notice the word right in the middle, it's "Elements" not "Element". If you think about it, this actually makes a lot of sense! Since both .getElementsByClassName() and .getElementsByTagName() could return multiple items, their method names tell us that directly. Now compare this with .getElementById() that will only ever return at most one element. Its name has the singular "Element" in it.

document.getElementByClassName('highlight-spanned');

This code above will not work, because there is no DOM method .getElementByClassName() (with singular "Element"). -  IT MISSING THE S in Elements

After looking at both .getElementById() and .getElementsByClassName(), the new .getElementsByTagName() method should seem quite easy on the eyes:

document.getElementsByTagName('p');


Selecting Multiple Elements At Once
As I'm sure you remember from learning both HTML structure and CSS styling, an ID should be unique - meaning two or more elements should never have the same ID. Since IDs are unique, and since there will be only one element in the HTML with that ID, document.getElementById() will only ever return at most one element. So how would we select multiple DOM elements?
The next two DOM methods that we'll be looking at that both return multiple elements are:
.getElementsByClassName()
.getElementsByTagName()
Accessing Elements By Their Class
The first method we'll look at is .getElementsByClassName():
document.getElementsByClassName();
Similarly to .getElementById(), if we ran the code above in the console, we wouldn't get anything, because we did not tell it the class to search for! Also just like .getElementById(), .getElementsByClassName() is expecting that we call it with a string of the class we want it to search for/return:
document.getElementsByClassName('brand-color');
If you'd like to read more about this method, check out its documentation page on MDN: https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName
Let's use this MDN documentation page to try out using this method.

Beware of the S!
I know we haven't looked at .getElementsByTagName() just yet, but there's something different about .getElementById() compared with both .getElementsByClassName() and .getElementsByTagName() that I want to point out because it can be easy to miss; both .getElementsByClassName() and .getElementsByTagName() have an extra "s" in their name.
The method's name is .getElementsByClassName(), not .getElementByClassName(). Notice the word right in the middle, it's "Elements" not "Element". If you think about it, this actually makes a lot of sense! Since both .getElementsByClassName() and .getElementsByTagName() could return multiple items, their method names tell us that directly. Now compare this with .getElementById() that will only ever return at most one element. Its name has the singular "Element" in it.
I just wanted to point this out because I've been bitten by that missing "s" many-a-time when running code like:
document.getElementByClassName('highlight-spanned');
This code above will not work, because there is no DOM method .getElementByClassName() (with singular "Element").
Accessing Elements By Their Tag
After looking at both .getElementById() and .getElementsByClassName(), the new .getElementsByTagName() method should seem quite easy on the eyes:
document.getElementsByTagName('p');
Let's use this MDN documentation page to try out using this method: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction
