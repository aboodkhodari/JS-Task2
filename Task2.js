// ================= Q1 =================
const namesStr = "Khaled,Reem,Tariq,Lama,Nour";
const namesArray = namesStr.split(",");
console.log(namesArray);

const formattedNames = namesArray.join(" - ");
console.log(formattedNames);


// ================= Q2 =================
const marks = [92, 48, 77, 35, 100, 64, 29];

const passedMarks = marks.filter(m => m >= 50);
console.log(passedMarks);

const highMarks = marks.filter(m => m >= 90);
console.log(highMarks);

const oddMarks = marks.filter(m => m % 2 !== 0);
console.log(oddMarks);


// ================= Q3 =================
const nums = [6, 9, 14, 21, 30];

const allPositiveNums = nums.every(n => n > 0);
console.log(allPositiveNums);

const allEvenNumsCheck = nums.every(n => n % 2 === 0);
console.log(allEvenNumsCheck);

const allBelow100 = nums.every(n => n < 100);
console.log(allBelow100);


// ================= Q4 =================
const classStudents = [
    { id: 1, name: "Khaled", score: 78 },
    { id: 2, name: "Reem", score: 93 },
    { id: 3, name: "Tariq", score: 55 },
    { id: 4, name: "Lama", score: 41 },
    { id: 5, name: "Nour", score: 70 },
];

const namesList = classStudents.map(std => std.name);
console.log(namesList);

const studentsPassed = classStudents.filter(std => std.score >= 60);
console.log(studentsPassed);

classStudents.forEach(std => {
    console.log(`${std.name} mark is : ${std.score}`);
});
