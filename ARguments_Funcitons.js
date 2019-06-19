/*Functions package up code so you can easily use (and reuse) a block of code. Parameters are variables that are used to store the data that's passed into a function for the function to use. Arguments are the actual data that's passed into a function when it is invoked:

// x and y are parameters in this function declaration
function add(x, y) {
  // function body
  var sum = x + y;
  return sum; // return statement
}

// 1 and 2 are passed into the function as arguments
var sum = add(1, 2);

he function body is enclosed inside curly brackets:

function add(x, y) {
  // function body!
}


Return statements explicitly make your function return a value:

return sum;

You invoke or call a function to have it do something:

add(1, 2);

Returns: 3*/
//QUIZ


//Declare a function called laugh() that returns "hahahahahahahahahaha!". Print the value returned from the laugh() function to the console

answer
function laugh() {
  return ("hahahahahahahahahaha!");
}

console.log(laugh());
