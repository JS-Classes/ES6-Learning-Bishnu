const authors = ["Bishnu", "Bikram", "Elisha"];

authors.push("Sheprata");
console.log(authors);
authors.pop("Sheprata");
console.log(authors);

console.log(authors.length);
let f = authors[0];
let l = authors[authors.length - 1];

authors.shift("Bishnu");
authors.unshift("Dhriti");

authors.splice(2, 1);

let isTheresAnyNameStartingWithB = authors.some(x => x.startsWith("B"));
let areAllNamesStartingWithB = authors.every(x => x.startsWith("B"));

authors.slice(2, 5);



let sum = (x, y, z) => x + y + z;


let numbers = [[3, 4, 5], [6, 1, 2]];

sum(numbers[0], numbers[1], numbers[2]);
sum(...numbers);

const allNumbers = [...numbers];

















