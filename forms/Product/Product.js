/*

50 Extra XP Option  B: Name the new form Product. Create an array that holds these numbers: 

123, 433, 54326, 2234, 1919, 1123, 1928, 3374, 23, 190, 33874

Create a function that takes 2 parameters and returns the product of the two numbers. 
In the main program, create a loop that calls the function with 2 numbers at a time (inside the loop), keeping a running total of the product so far. 
When the loop is done, output the final product (which will be all of the numbers) to the console. 

*/
let numbers = new Array(123, 433, 54326, 2234, 1919, 1123, 1928, 3374, 23, 190, 33874);

i1= 0;
i2= 1;

while (i2 <= (numbers.length - 1)) {
  num1 = numbers[i1];
  num2 = numbers[i2];
  product = num1 * num2;
  console.log(product);
  i1++;
  i2++;
 }