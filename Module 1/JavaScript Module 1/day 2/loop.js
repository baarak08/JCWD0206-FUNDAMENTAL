let i = 0;

// for(assign;condition;counter)

for (let i = 0; i < 3; i++) {
 if (i == 2) {
  console.log('loop terakhir');
 } else {
  console.log(i);
 }
}

// buatlah segitiga a
// contoh
// a
// a a
// a a a

//     a
//   a a
// a a a
console.log('a');
console.log('a a');
console.log('a a a');
// kita akan looping sebanyak 3x
// per looping kita akan print a tergantung dari tinggi segitiga

for (let i = 1; i <= 3; i++) {
 let a = '';
 for (let j = 0; j < i; j++) {
  a += 'a ';
 }
 //  a += '\n';
 console.log(a);
}

// 1 <=3
// a = ''
// 0 < 1
// a = 'a '
// console.log

// 2 <= 3
// a = ''
// 0 < 2
// a = 'a '
// 1 < 2
// a = 'a a '
// console.log

// 3 <= 3
//  a = ''
// 0 < 3
// a = 'a '
// 1 < 3
// a= 'a a '
// 2 < 3
// a = 'a a a '
// console.log

let perut = 'laper';
let piring = 0;

while (perut == 'laper') {
 //code block/ task
 console.log('makan');
 //counter
 piring++;

 if (piring == 5) {
  perut = 'kenyang';
 }
}

piring = 0;

perut = 'laper';
do {
 piring++;

 if (piring == 1) {
  continue;
 }
 console.log('makan dengan piring ke ' + piring);

 if (piring == 5) break;
} while (perut == 'laper');

console.log(perut);

// let gender = 'male';
// switch (condition) {
//  case 'male':
//   console.log('cowo');
//  case 'female':
//   console.log('cewe');
// }

let day = new Date().getDay();
let hari = '';
console.log(day);

switch (day) {
 case 0:
  hari = 'minggu';
  break;

 case 1:
  hari = 'senin';
  break;

 case 2:
  hari = 'selasa';
  break;

 case 3:
  hari = 'rabu';
  break;

 case 4:
  hari = 'kamis';
  break;

 case 5:
  hari = 'jumat';
  break;

 case 6:
  hari = 'sabtu';
}

console.log(hari);