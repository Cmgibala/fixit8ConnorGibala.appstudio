//1

let name = prompt('Enter your first name and last name separated by a space');
i = 0;
letterNum = 1
let letter = 0;

while (i <= name.length) {
  letter = name.charAt(i);
  console.log(`Letter ${letterNum} is ${letter}`);
  letterNum ++;
  i ++;
}

  
//2
let names = new Array('Bob', 'Janet', 'Tom', 'Bob', 'Randy', 'Elizabeth', 'Kim', 'Nancy');


for (i = 1; i <= names.length; i++) {
  index = (names.length - [i]);
  console.log(names[index]);
}


