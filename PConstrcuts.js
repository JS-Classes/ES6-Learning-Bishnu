//if..else if..else
let x = 34;
if (x <= 45) { }
else if (x < 60) {
}
else {
}

// Switch
let y = "b";
switch (y) {
    case "a":

        break;
    default:

    case 'b':
    case 'c':

        break;
}


// Loops

for (let i = 0; i < 10; i++) {
    console.log(i + 1);
}

let i = 0;
while (i < 10) {
    console.log(i + 1);
    i++;
}

let ii = 0;
do {
    console.log(ii + 1);
    ii++;
} while (i < 10);

let numbers = [23, 45, 67, 12, 90];
for (const number of numbers) {
    console.log(number);
}

let person = { name: 'Bishnu', address: 'ktm' };

for (let p in person) {
    console.log(`${p} = ${person[p]}`)
}

// break, continue : label

outer:
for (let x = 0; x < 5; x++) {
    inner:
    for (let y = 0; y < 5; y++) {
        if (x === 3 && y === 3) {
            break outer;
        }
        console.log(`x=${x} y=${y}`);
    }
}

