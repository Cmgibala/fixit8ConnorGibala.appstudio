function calculateProduct(num1,num2) {
  return num1 * num2;
}

let numbers = new Array(123, 433, 54326, 2234, 1919, 1123, 1928, 3374, 23, 190, 33874);
let product = 1

for (i=0; i <= numbers.length - 1; i++) {
  product = calculateProduct(product, numbers[i])
  console.log(product)
}

