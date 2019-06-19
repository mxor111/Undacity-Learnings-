Quiz-9

Create a variable called bill and assign it the result of 10.25 + 3.99 + 7.15

Next, create a variable called tip and assign it the result of multiplying bill by a 15% tip

rate. Finally, add the bill and tip together and store it into a variable called total.

Print the total to the JavaScript console.



To use toFixed() pass it the number of decimal points you want to use.

For example, if total equals 3.9860, then total.toFixed(2) would return 3.99.



Code:

var bill = 10.25 + 3.99 + 7.15;

var tip = 0.15 * bill;

var total = tip + bill;

console.log("$"+ total.toFixed(2));



Output:

$24.60
