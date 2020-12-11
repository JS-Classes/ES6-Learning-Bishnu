// Find matching numbers in a paragraph using regex?
let p1 = `I am 10 years old and my father is 45. Area of this rectangle1 is 234 m^2.
I am 10 years old and my father is 45. Area of this rectangle1 is 234 m^2
I am 10 years old and my father is 45. Area of this rectangle1 is 234 m^2
I am 10 years old and my father is 45. Area of this rectangle1 is 234 m^2
I am 10 years old and my father is 45. Area of this rectangle1 is 234 m^2
I am 10 years old and my father is 45. Area of this rectangle1 is 234 m^2
I am 10 years old and my father is 45. Area of this rectangle1 is 234 m^2
I am 10 years old and my father is 45. Area of this rectangle1 is 234 m^2
I am 10 years old and my father is 45. Area of this rectangle1 is 234 m^2`

let emails = "ab89c@xyz.com ab89c@xyz ab89c@xyz.net";

let regexNumber = /\d+/g; //+, *, ?
let numbersInP1 = p1.match(regexNumber);

// Validate emails
let regexEmail = /[a-z]+\w*@[a-z]+.(com|net)/g;
let correctEmails = emails.match(regexEmail);

// 1. Program to print multiplication table for a number
// 2. Program to print multiplication table for a number upto some range (default should be 10)
// 3. Program to print multilication table for numbers from m to n.



// 3. Find a random string of particular length
let getRandomString = (length) => {
    const wordChars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let randomString = '';

    for (let i = 0; i < length; i++) {
        let randomNum = Math.random() * wordChars.length;
        let index = Math.floor(randomNum);
        let c = wordChars.charAt(index);
        randomString += c;
    }

    return randomString;
}

let randString = getRandomString(20);

console.log(randString);