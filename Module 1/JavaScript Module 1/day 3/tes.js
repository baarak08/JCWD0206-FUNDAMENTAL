// let sKosong = ``
// let loopSegitiga = 5
// let angkaSegitiga = 1

// for (let i = 0 ; i < loopSegitiga ; i++){
//     for (let j = loopSegitiga ; j >= i ; j--){
//         sKosong += ` `;
//     }
//     for (let j = 0 ; j <= i ; j++){      
//         sKosong += angkaSegitiga + ` `;
//         angkaSegitiga++
//     }
//     sKosong += `\n`;
// }
// console.log(sKosong);


// let number = 1000
// console.log(number.toString().charAt(0));
// console.log(number.toString());

let number = 1234567
let currency = ""
for (let i = 0; i < number.toString().length; i++) {

    // if (number.toString().length % 3 == 2) {
    //     if (i > 1 && ((number.toString().length - i) % 3 == 0)) currency += "."
    // } 
    // else 
    if (i > 0 && (( number.toString().length - i) % 3) == 2) currency += "."
    currency += number.toString ().charAt(i) 

}
console.log(number.toString().length);
console.log(number.toString().length);