function square(number) {
    let squared = number * number;
    return squared;
}

let s = square(345);
console.log(s);

// Function expression: anonymous function
var fun1 = function (number) {
    let squared = number * number;
    return squared;
}

let s1 = fun1(245);
console.log(s1);

// Arrow function
var fun2 = number => number * number;

(a, b) => {
    let sum = a + b;
    return sum;
}

// Closure

// Example 1
function outside(x) {
    function inside(y) {
        return x + y;
    }
    return inside;
}

let inside_fn = outside(10); // Give me a function that adds 10 to whatever comes to it.
let result = inside_fn(40);
console.log(result);

// Example 2
function addSqaures(a, b) {

    function square(x) {
        return x * x;
    }

    let result = square(a) + square(b);
    return result;
}

let r = addSqaures(3453, 342);

// Example 3
let createPet = name => {
    return {
        setName: newName => name = newName,
        getName: () => name
    }
}

let dog = createPet('diamond');


// Parameters
function formatName(name, address, salutation = "ms.") {
    let completeName = salutation + ", " + name + ", " + address; 
    return completeName;
}

let n = formatName("bishnu rawal", "ktm", "Mr.");
let n1 = formatName("bishnu rawal", "ktm");
console.log(n);
console.log(n1);

// Rest parameters
function add(a, b, ...moreArgs) {
    console.log(a);
    console.log(b);
    console.log(moreArgs);
}

add(23, 45);
add(23, 45, 56, 67);
