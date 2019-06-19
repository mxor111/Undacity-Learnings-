This example uses an attribute selector to return a list of the <iframe> elements in the document that contain an attribute named data-src:
var matches = document.querySelectorAll("iframe[data-src]");

Here, an attribute selector is used to return a list of the list items contained within a list whose ID is "userlist" which have a "data-active" attribute whose value is "1":
var container = document.querySelector("#userlist");
var matches = container.querySelectorAll("li[data-active='1']");


The selector methods accept one or more comma-separated selectors to determine what element or elements should be returned. For example, to select all paragraph (p) elements in a document whose CSS class is either warning or note, you can do the following:
var special = document.querySelectorAll( "p.warning, p.note" );
You can also query by ID. For example:
var el = document.querySelector( "#main, #basic, #exclamation" );
After executing the above code, el contains the first element in the document whose ID is one of main, basic, or exclamation.
You may use any CSS selectors with the querySelector() and querySelectorAll() methods.
