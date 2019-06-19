Write an if...else statement that:
prints "even" if the number is an even number
prints "odd" if the number is an odd number
Hint: Use the % (modulo) operator to determine if a number is even or odd. The modulo operater takes two numbers and returns the remainder when the first number is divided by the second one:

onsole.log(12 % 3);
console.log(10 % 4);

Result:
0
2

The answer for 12 % 3 is 0 because twelve divided by three has no remainder. 10 % 4 is 2 because ten divided by 4 has a remainder of two.

Make sure to test your code with different values. For example:
If number equals 1, then odd should be printed to the console.
If number equals 12, then even should be printed to the console

CODE:

var number = 12;
var message;
if (number%2 === 0) {
    message = "even";
} else {
message = "odd";
}
console.log(message);
