console.log(`======================= No 1 =============================`)

let angka = 1
let h = 8
let angkamax = 19

for (let i = 1; i <= h; i++) {
    let a = '';
     
    for (let j = 0; j < i; j++) {
     if (angka >= angkamax + 1){
    break
    }     
        if (angka.toString().length < angkamax.toString().length) {
            a += `0`;
        } else {
            a += ``
        }
    a += angka + ` `;
    angka++      
  
    }
    //  a += '\n';
    console.log(a);
}


console.log(`======================= No 2 =============================`)

let totalLooping = 30
for (let num = 1; num <= totalLooping; num++) {
    if (num % 15 === 0) {
        console.log(`FizzBuzz`);
    } else if (num % 3 === 0) {
        console.log(`Fizz`);
    } else if (num % 5 === 0) {
        console.log(`Buzz`);
    } else {
        console.log(`${num}`);
    }
}

console.log(`======================= No 3 =============================`)

