To obtain a NodeList of all of the <p> elements in the document:
var matches = document.querySelectorAll("p");

This example returns a list of all <div> elements within the document with a class of either note or alert:
var matches = document.querySelectorAll("div.note, div.alert");

Here, we get a list of <p> elements whose immediate parent element is a <div> with the class highlighted and which are located inside a container whose ID is test.
var container = document.querySelector("#test");
var matches = container.querySelectorAll("div.highlighted > p");
