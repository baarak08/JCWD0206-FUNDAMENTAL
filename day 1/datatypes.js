let str = '123';
let number = 123;
let bool = true;
let str2 = 'true';
let Null = null;
let Undefined;

let obj = {
 prop1: 'property 1 ',
 prop2: 12345,
 func: (n) => {
  console.log(n);
  return n;
 }
};

let arr = [
 1,
 2,
 3,
 4,
 5,
 'abc',
 true,
 { prop1: 'abc' },
 [1, 2, 3, 4, 5],
 null,
 undefined
];

// console.log(str);
// console.log(number);
// console.log(bool);
// console.log(null);
// console.log(Undefined);
// console.log(obj);
// console.log(obj.prop1);
// console.log(obj.prop2);
// obj.func(obj.prop1);
// console.log(arr[100]);

// console.log(typeof str);
// console.log(typeof number);
// console.log(typeof bool);
// console.log(typeof obj);
// console.log(typeof arr);
// console.log(typeof obj.prop1);
// console.log(typeof obj.prop2);
// console.log(typeof obj.func);

const num = 123;

// num = 124;

const obj2 = {
 prop1: '123',
 prop2: 123
};

obj2.prop1 = '1234';
obj2.prop4 = '4444';

const arr2 = [1, 2, 3, 4];
arr2[0] = 4;
arr2[4] = 5;
arr2[50] = 5;

console.log(arr2);

console.log(obj2);

let msg = '         hell0';
let space = ' ';
let msg2 = 'world';
let msg3 = msg.concat(space.concat(msg2));
console.log(msg3);

console.log(msg3.length);
console.log(msg3.charAt(10));
console.log(msg3.slice(0, 5));
console.log(msg3.includes('world1'));
console.log(msg3.indexOf('o'));
console.log(msg3.replace('world', ' purwadhika'));

let arrStr = msg3.split('l');
console.log(arrStr);
let alpha = 'abcdefghijklmnopqrstuvwxyz';
let arrAplha = alpha.split('');
console.log(arrAplha);

console.log(msg3.substring(4, 0));

console.log(msg3.toUpperCase());
console.log(msg3.trim(' '));
console.log(msg3);

let num1 = 10;
let num2 = 30;
let num3 = '10';
let result = num1 + num2 + num3;

// console.log(result);

let Name = 'jordan';

let perkenalan = `hello perkenalkan nama saya ${Name}


dari purwadhika
`;
let perkenalan2 = 'hello perkenalkan nama saya' + Name + 'dari purwadhika';
console.log(perkenalan2);

num1 = 3.3333333;

console.log(num1.toString());
console.log(num1.toExponential());
console.log(num1.toFixed(2));
console.log(num1.toPrecision(1));
console.log(num1.valueOf(2));

let x = Number.parseInt('10.90');
let z = Number.parseFloat();

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

console.log(String(123));

// "" false
// "abc" true
// 1 true
// 0 false
// -1 true
// null false
// undefined false
let arr3 = [];
let obj3 = {};

console.log(Boolean(obj3));

let date = new Date('2023-02-28');
//YYYY-MM-DD

console.log(date.getDate());
console.log(date.getDay());
console.log(date.getMonth());
console.log(date.getHours());

let num4 = 10 % 3;
console.log(num4);

let numEx = 2 ** 2;
console.log(numEx);

let angkaPertama = 30;
// angkaPertama = angkaPertama + 40;
// angkaPertama += 40;
angkaPertama = +40;

console.log(angkaPertama);

let inc = 20;
// inc++;
// inc++;
// inc--;
// --inc;
// ++inc;

console.log(inc++); //20
console.log(inc++); //20

console.log(++inc); //22

// console.log(inc);

// declare variable number isinya 123
