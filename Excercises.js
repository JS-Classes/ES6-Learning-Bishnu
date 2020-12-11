// 1. Find matching numbers in a paragraph using regex?
// 2. Validate emails using regex

// 1. Program to print multiplication table for a number
// 2. Program to print multiplication table for a number upto some range (default should be 10)
// 3. Program to print multilication table for numbers from m to n. (use console.table)


// 1. Declare a string variable with paragrpah as value. Display following stat:
// a. Number of sentences, words and word characters
// b. Number of special characters
// c. Numbers of vowels and consonants

// 1. Find normal distribution of set of random numbers
// 2. Find a random number between provided m and n
// 3. Find a random string of particular length


// 1. Find a random string of particular length (Using approach other than following)


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


