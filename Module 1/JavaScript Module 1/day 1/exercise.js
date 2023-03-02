1 // luas area persegi panjang
let width = 5
let lenght = 6
let area = width * lenght

console.log(area);

2 // keliling persegi panjang
let perimeter = (width + lenght) * 2
console.log(perimeter)

3 // Diameter, Circumtance and Area Lingkaran

//Diameter (r = jari-jari) 
let r = 5
let Diameter = 2 * r

//Circumtance
let Circumtance = 2 * Math.PI * r

// Area
let areaLingkaran = Math.PI * r * r

console.log(Diameter);
console.log(Circumtance);
console.log(areaLingkaran);


4 // Find the third Angle of Triangles
// aA, aB, aC are the angles of triangles = 180'
let allAngles = 180
let aA = 20
let aB = 40

//the third angles
let aC = allAngles - (aA + aB)
console.log(aC);


5 // Write a code to get difference between dates in days
let date1 = new Date('2023-02-28');
let date2 = new Date('2023-03-25');

let differenceTime = date2.getTime() - date1.getTime();
let differenceDay = differenceTime / (1000 * 3600 * 24);
console.log(differenceDay + " " + "Hari")


6 // Write a code to convert days to years, months and days
let days = 1200

let year = days / 365;
let yearSum = Math.floor(year);
let modYear = days % 365;

let month = modYear / 30
let monthSum = Math.floor(month);
let modMonth = modYear % 30;

let daySum = modMonth

console.log(yearSum + " " + "tahun" + " " + monthSum + " " + "bulan" + " " + daySum + " " + "hari");

