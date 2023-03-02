1 // Convert Celcius to Fahrenheit
for (let C = 0; C <= 5; C++) {
    let F = (C * 1.8) + 32
    
console.log(F + "F'");

}

function conToFa (cel){
    let fah = (cel * (9/5)) + 32
    console.log(fah + "F'");

}

conToFa (20)


2 // Menentukan Ganjil Genap
for (let num = 1; num <= 5; num++) {
    if (num % 2 === 0) {
        console.log(`${num} adalah bilangan Genap`);
    } else {
        console.log(`${num} adalah bilangan Ganjil`);
    }

}

3 // Decide Prime Number
for (let i = 1; i <= 30; i++){
    let pNilai = 0;
    for (let j = 1; j <= i; j++) {
         if (i % j == 0){
            pNilai++
         }
         
    }

    if (pNilai == 2){
        console.log(i);
    }
}


4 // Find SUM 1 to N

for (let i = 1; i <= 5; i++){




}


5 // Find Factorial Number

6 // Find Fibonacci
let a = 0
let b = 1
let Fib = a + b
let pembatas = 10

for (let i = 1; i <= pembatas; i++){
    console.log(Fib);
    Fib = a + b;
    a = b;
    b = Fib;

}

