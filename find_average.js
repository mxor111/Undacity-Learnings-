/*arameters vs. Arguments
At first, it can be a bit tricky to know when something is either a parameter or an argument. The key difference is in where they show up in the code. A parameter is always going to be a variable name and appears in the function declaration. On the other hand, an argument is always going to be a value (i.e. any of the JavaScript data types - a number, a string, a boolean, etc.) and will always appear in the code when the function is called or invoked.
Try declaring and calling some functions on your own:*?

//Quiz
Use the following function to answer this question.//


function findAverage(x, y) {
  var answer = (x + y) / 2;
  return answer;
}

var avg = findAverage(5, 9);

What value will be stored in the variable avg?

ANSWER
The findAverage() function will return the number 7, since the average of 5 and 9 is 7.
