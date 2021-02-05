//zadanie 1
const a = 1;
const b = 2;
if (a > b) {
    console.log(a);
} else {
    console.log(b); //2
}
//zadanie 2
const a1 = 1,
    a2 = 22,
    a3 = 13;

if (a1 > a2 && a1 > a3) {
    console.log(a1);
} else if (a2 > a1 && a2 > a3) {
    console.log(a2); //22
} else {
    console.log(a3);
}
//zadanie 3
for (let i = 0; i <= 10; i++) {
    console.log("Lubię JavaScript");
}

//zadanie 4
let result = 0;
for (i = 0; i < 10; i++) {
    result += i;
}
console.log(result);

//zadanie 5
var n = 5;
for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
        console.log(i - "nieparzysta");
    } else {
        console.log(i - "parzysta");
    }
}

//zadanie 6

let n = 5;

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        console.log("i= " + i + ", j= " + j);
    }
}

//zadanie 7
for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`${i} FizzBuzz`);
    } else if (i % 3 === 0) {
        console.log(`${i} Fizz`);
    } else if (i % 5 === 0) {
        console.log(`${i} Buzz`);
    } else {
        console.log(`${i}`);
    }
}
//zadanie 8
//a
for (var i = 1; i <= 5; i++) {
    console.log("*".repeat(i));
}

//second solution
let star = 5;
let result = '';

for (let i = 1; i <= star; i++) {
    for (let j = 0; j < i; j++) {
        result += "*";
    }
    console.log(result);
    result = ""
}

//b
let a = 2;
for (var i = 1; i <= 9; i +=2) {
    
    console.log(" ".repeat(6 - a) + "*".repeat(i));
    a++;
}
//c
