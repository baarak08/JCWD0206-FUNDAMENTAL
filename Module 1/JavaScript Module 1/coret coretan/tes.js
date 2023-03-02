// a = ` `
// b = a * 2
// console.log(b);

for (let i = 10; i >= 1; i--) {
    let a = '';
    for (let j = 0; j < i; j++) {
     a += ' ';
    }
    //  a += '\n';
    console.log(a);
   }

// let an = 1
// let batasanloop = 10
// let angka = an++

// for (let i = batasanloop; i >= 1; i--) {
//     let a = '';
//     for (let j = 0; j < i; j++) {
//      a += ' ';
//     }
//     for (let i = 1; i <= batasanloop; i++) {
//     let b = '';
//         for (let j = 0; j < i; j++) {
//         a += angka;
//         angka = an++ + ` `
//         }
//     //  a += '\n';

//     console.log(a += b);
    
//     }
// }


let an = 1
let batasanloop = 10
let angka = an++
let spasi = ` `

for (let i = 1; i <= batasanloop; i++) {
    let a = '';
    for (let j = 0; j < i; j++) {
     a += angka;
     angka = an++ + ` `
    }
    for (let i = 10; i >= 1; i--) {
        let b = '';
        for (let j = 0; j < i; j++) {
         b += spasi;
         bBantu = spasi++ 
        }
       }
     a += '\n';

    console.log(b + a);
    
}

