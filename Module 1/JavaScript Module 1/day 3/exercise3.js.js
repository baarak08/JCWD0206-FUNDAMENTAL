console.log(`======================= No 1 =============================`
); 
let a = 8
let b = 0
let sum = a * b

for (let i = 0; i <= 10; i++) {
    console.log(`hasil dari ${a} X ${b} = ${sum}`);
    angka1 = a;
    angka2 = b++;
    sum = a * b
    
}

console.log(`======================= No 2 =============================`
); 

function palindrome(kata) {
    const kata2 = kata.split(``).reverse().join(``)
    return kata === kata2
}
console.log(palindrome(`madam`)); // true
console.log(palindrome(`pintu`)); // false


console.log(`==== contoh lainnya ====`);

let kata1 = `madam`

let kata1Rev = kata1.split(``).reverse().join(``)
 console.log(kata1Rev);
if (kata1 == kata1Rev) {
    console.log(`ini palindrome`);
} else {
    console.log(`ini bukan palindrome`);
}


console.log(`======================= No 3 =============================`
); 

function CMtoKM(cm) {
    const KMdariCM = cm / 100000
    console.log(`${cm} cm = ${KMdariCM} Km`);

}
CMtoKM(1000000);

console.log(`======================= No 4 =============================`
); 

let number = 1000
let currency = ""
for (let i = 0; i < number.toString().length; i++) {

    if (number.toString().length % 3 == 2) {
        if (i > 1 && ((number.toString().length - i) % 3 == 0)) currency += "."
    } 
    else if (i > 0 && (( number.toString().length - i) % 3) == 0) currency += "."
    currency += number.toString ().charAt(i) 

}
console.log(`Rp ${currency},00`);



console.log(`======================= No 5 =============================`
); 
let kalimat = `Hello world`
let yangdiambil = `wor`
let kalimatdiedit = kalimat.replace(yangdiambil,``)
console.log(`kata ${kalimat} diambil ${yangdiambil} menjadi ${kalimatdiedit}`);

console.log(`======================= No 6 =============================`
); 
let kalimat2 = `hello world`
let kalimatdiedit2 = kalimat2.replace(`h`,`H`).replace(`w`,`W`)

console.log(`${kalimat2} diUpperCase huruf awal perkata menjadi ${kalimatdiedit2}`);

 
console.log(`======================= No 7 =============================`
);

function reverseword(word) {
    return word.split(``).reverse().join(``)
   
}
console.log(reverseword(`dodol`)); 

console.log(`=================== No 8 Segitiga ========================`
);


let angkaSegitiga = 1
let loopSegitiga = 15
let loopbreak = 99
for (let i = 0 ; i < loopSegitiga ; i++){
    let sSamakaki= ``;
    
    for (let j = loopSegitiga ; j >= i ; j--){
    sSamakaki += ` `;
    }
    for (let j = 0 ; j <= i ; j++){
    if (angkaSegitiga >= loopbreak + 1){break}
    if (loopbreak.toString().length - angkaSegitiga.toString().length == 2) {
        sSamakaki += `  `;
    } else if (loopbreak.toString().length - angkaSegitiga.toString().length == 1) {
        sSamakaki += ` `;
    } else {
        sSamakaki += ``
    }
    sSamakaki += angkaSegitiga + ` `;
    angkaSegitiga++
    }
    // sSamakaki += `\n`;
    console.log(sSamakaki);
}