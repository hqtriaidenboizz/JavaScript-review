// Javascript basic

// 1 CONSOLE.LOG
console.log("Javascript Basic")

// 2 VARIABLE (var, let const)
// var có phạm vi hoạt động là global, function scope, có thể khai báo lại và có thể cập nhật. Var có thể hosting
var x = 10;
if (true) {
    var x = 20;
    console.log('x in block =', x) //output 20
}
console.log('x in global =', x) //output 20

// let có phạm vi hoạt động là block nhưng không thể khai báo lại, có thể cập nhật
let y = 10;
if (true) {
    let y = 20;
    console.log('y in block =', y) // output 20
}
console.log('y in global =', y); //output 10

// const có phạm vi hoạt động là block, không thể khai báo và cập nhật
const z = 10;
z = 20 // error
console.log(z) // output 20

// 3 DATA TYPES

//primary type
let numberEx = 10;
console.log(typeof numberEx); // output number

let stringEx = 'D-soft'
console.log(typeof stringEx); // output string

let booleanEx = true;
console.log(typeof booleanEx); // output boolean

let nullEx = null;
console.log(typeof nullEx); // output object

let undefinedEX = undefined;
console.log(typeof undefinedEX); //output undefined

//Object type
const objectEX = {
    name: "D-soft",
    addrest: "Da Nang city"
}
console.log(typeof objectEX) // output object

const arrayEx = [1,2,3,4]
console.log(typeof arrayEx) // output object


// special type 
const functionEx = function(){
    console.log('example')
}
console.log(typeof functionEx) //output function

const currentday = new Date()
console.log(currentday) // output: ngay hien tai, type of date is Object

// 4 OPERATORS
// Toán tử hàng : Được sử dụng để thực hiện các phép tính số học như cộng, trừ, nhân, chia.
let a = 10;
let b = 5;

let sum = a + b; // Cộng
let difference = a - b; // Trừ
let product = a * b; // Nhân
let quotient = a / b; // Chia
let remainder = a % b; // Chia lấy phần dư

// Toán tử gán: Được sử dụng để gán giá trị cho biến.
let x = 10; // Gán giá trị 10 cho biến x
x += 5; // Tương đương với x = x + 5

// toán tử so sánh: Được dùng để so sánh các giá trị và trả về kết quả true false
console.log(a > b); // true
console.log(a === b); // false (so sánh giá trị và kiểu dữ liệu)
console.log(a !== b); // true (không bằng)

// Toán tử logic: Được dùng để kết hợp điều kiện trả về true/flase
console.log(a > 5 && b < 10); // true (and)
console.log(a > 5 || b > 10); // true (or)
console.log(!(a === b)); // true

// Toán tử ba ngôi
let age = 20
let status = age >= 18 ? 'true' : 'false'
console.log(status); // output true

// Toán tử chuỗi: Được sử dụng để nối chuỗi
let fristName = "Ho";
let lastName = "Quoc Tri"
let fullName = fristName + "" + lastName
console.log(fullName); // output Ho Quoc Tri

// 5: IF-ELSE
let yourAge = 18;

if (yourAge >= 18) {
    console.log("Bạn đã đủ tuổi để");
} else {
    console.log("Bạn chưa đủ tuổi");
}

// else if
let score = 85;

if (score >= 90) {
    console.log("Bạn đạt điểm A.");
} else if (score >= 80) {
    console.log("Bạn đạt điểm B.");
} else if (score >= 70) {
    console.log("Bạn đạt điểm C.");
} else {
    console.log("Bạn đạt điểm D");
}

// 6: LOOPS trong JS
// a: For loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// b: For of Loop
const colors = ["red", "green", "blue"];
for (let color of colors) {
    console.log(color);
}

// c: For in Loop
const person = {name: "tri", age: 22, city: "Da Nang"};
for (let key in person) {
    console.log(key + ": " + person[key]);
}

// d: While loop
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

// e: do...while loop: tương tự While loop nhưng nó sẽ thực thi mã trước khi kiểm tra điều kiện
let ii = 0;
do {
    console.log(i);
    ii++;
} while (ii < 5);


// 7: FUNCTIONS 
// với function này thì nó hỗ trợ hosting
example()
function example() {
    console.log('Hello')
}

//arrow function
// với arrow function thì không được hosting
// không có từ khóa this
// có thể bỏ qua return
// thường đc sử dụng trong các hàm map(), filter(), forEach()…
//Arrow function không có argurments

const handleSomthing = () =>{
    console.log('Hello');
}

// 8: Call, apply, bind

// a: call dùng để gọi hàm và thiết lập giá trị this cho hàm đó.
// cú pháp
// functionName.call(thisArg, arg1, arg2, ...)
function greet(name) {
    console.log(`Hello, ${name}! I am ${this.role}.`);
}

const user = {
    role: 'Teacher'
};

greet.call(user, 'Tri');
// Output: Hello, Tri! I am Teacher.

//b apply: Tương tự call, nhưng tham số truyền vào là array
// functionName.apply(thisArg, [arg1, arg2, ...])\
function greet(name, city) {
    console.log(`Hello, ${name}! I am ${this.role} in ${city}.`);
}

const user2 = {
    role: 'student'
};

greet.apply(user2, ['Tri', 'Da Nang']);
// Output: Hello, Tri! I am student in Da nang.

// c: Bind
function greet(name) {
    console.log(`Hello, ${name}! I am ${this.role}.`);
}

const user3 = {
    role: 'student'
};

const greetUser = greet.bind(user3);
greetUser('Tri');
// Output: Hello, Tri! I am student.

// 8: NUMBER METHODS

// 1 tofixed()
let num = 10.12345;
console.log(num.toFixed(2)); // Output: 10.12

//2 toPrecision()
let num2 = 123.456;
console.log(num2.toPrecision(4)); // Output: 123.5

// 3 toString
let num3 = 123;
console.log(num3.toString()); // Output: "123"

// 4 parseInt()
let str = "123";
console.log(parseInt(str)); // Output: 123

// 5 parseFloat()
let str2 = "123.45";
console.log(parseFloat(str2)); // Output: 123.45

// 6 isNal
console.log(Number.isNaN(10)); // Output: false
console.log(Number.isNaN("abc")); // Output: true

// 9: STRING METHODS

// 1 length
let str11 = "Hello, world!";
console.log(str11.length); // Output: 13

// 2 charAt()
let str12 = "Hello, world!";
console.log(str12.charAt(0)); // Output: "H"

//3 indexOf()

let str33 = "Hello, world!";
console.log(str33.indexOf("world")); // Output: 7

// 4. substring()
let str22 = "Hello, world!";
console.log(str22.substring(7, 12)); // Output: "world"

// 5. toUpperCase()
let str23 = "hello, world!";
console.log(str23.toUpperCase()); // Output: "HELLO, WORLD!"

// 6. toLowerCase()
let str32 = "HELLO, WORLD!";
console.log(str32.toLowerCase()); // Output: "hello, world!"

// 7. replace()

let str123 = "Hello, world!";
console.log(str123.replace("world", "Tri")); // Output: "Hello, Tri!"

// 8 split()
let str56 = "apple,banana,orange";
let fruits = str56.split(",");
console.log(fruits); // Output: ["apple", "banana", "orange"]

// 9 concat()
let str9 = "Hello, ";
let str8 = "world!";
let str7 = " How are you?";

let result = str9.concat(str8, str7);
console.log(result); // Output: "Hello, world! How are you?"

// 9 ARRAY METHODS

// 1 push() và pop()
let fruits1 = ['apple', 'banana', 'orange'];
// Thêm một phần tử vào cuối mảng
fruits1.push('grape');
console.log(fruits1); // Output: ['apple', 'banana', 'orange', 'grape']
// Loại bỏ phần tử cuối cùng khỏi mảng
let removedFruit = fruits1.pop();
console.log(removedFruit); // Output: 'grape'
console.log(fruits1); // Output: ['apple', 'banana', 'orange']

// 2. shift() và unshift()
let fruits2 = ['banana', 'orange'];
// Thêm một phần tử vào đầu mảng
fruits2.unshift('apple');
console.log(fruits2); // Output: ['apple', 'banana', 'orange']
// Loại bỏ phần tử đầu tiên khỏi mảng
let removedFruit1 = fruits2.shift();
console.log(removedFruit); // Output: 'apple'
console.log(fruits2); // Output: ['banana', 'orange']

// 3 slice()
let fruits3 = ['apple', 'banana', 'orange', 'grape'];
// Tạo ra một bản sao của mảng từ vị trí thứ 1 đến hết
let citrus = fruits3.slice(1);
console.log(citrus); // Output: ['banana', 'orange', 'grape']
// Tạo ra một bản sao của mảng từ vị trí thứ 1 đến trước vị trí thứ 3
let slicedFruits = fruits3.slice(1, 3);
console.log(slicedFruits); // Output: ['banana', 'orange']\

// 4: indexOf() và lastIndexOf()
let fruits4 = ['apple', 'banana', 'orange', 'banana'];
// Tìm chỉ mục của phần tử đầu tiên 'banana'
console.log(fruits4.indexOf('banana')); // Output: 1
// Tìm chỉ mục của phần tử cuối cùng 'banana'
console.log(fruits4.lastIndexOf('banana')); // Output: 3

// 5: map()
let numbers = [1, 2, 3, 4, 5];
// Tạo ra một mảng mới với mỗi phần tử được nhân đôi
let doubledNumbers = numbers.map(function(num) {
    return num * 2;
});
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

// 6 filter()
let numbers3 = [1, 2, 3, 4, 5];
// Lọc ra các số chẵn
let evenNumbers = numbers3.filter(function(num) {
    return num % 2 === 0;
});
console.log(evenNumbers); // Output: [2, 4]

// 7 reduce()
let numbers6 = [1, 2, 3, 4, 5];
let sum1 = numbers6.reduce(function(acc, curr) {
    return acc + curr;
}, 0);
console.log(sum1); // Output: 15

// 8 forEach()
let fruits6 = ['apple', 'banana', 'orange'];
fruits6.forEach(function(fruit) {
    console.log(fruit);
});
// Output:
// "apple"
// "banana"
// "orange"

// 9 some()
let numbers8 = [1, 2, 3, 4, 5];
let hasEvenNumber = numbers8.some(function(num) {
    return num % 2 === 0;
});
console.log(hasEvenNumber); // Output: true

// 10 every()
let numbers15 = [1, 2, 3, 4, 5];
let allEvenNumbers = numbers15.every(function(num) {
    return num % 2 === 0;
});
console.log(allEvenNumbers); // Output: false

// 11 length
let fruits54 = ['apple', 'banana', 'orange'];
console.log(fruits54.length); // Output: 3

// 12 reverse()
let fruits45 = ['apple', 'banana', 'orange'];
fruits.reverse();
console.log(fruits45); // Output: ['orange', 'banana', 'apple']

//13 sort()
let fruits78 = ['banana', 'apple', 'orange'];
fruits.sort();
console.log(fruits78); // Output: ['apple', 'banana', 'orange']

// isArray
let fruits90 = ['apple', 'banana', 'orange'];
console.log(Array.isArray(fruits90)); // Output: true
// tóstring
let fruits56 = ['apple', 'banana', 'orange'];
console.log(fruits56.toString()); // Output: "apple,banana,orange"


// 10 OBJECT METHODS




























































