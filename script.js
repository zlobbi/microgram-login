'use strict';

//alert('Hello world');

let user = {}; // фигурные скобки - это объект
let posts = []; // квадратные скобки - это массив
const daysPerWeek = 7; // число
let isAuthorised = false; // логическое значение
let token; // тип undefined - то есть неопределенный.

console.log(user);
console.log(posts);
console.log(daysPerWeek);
console.log(isAuthorised);
console.log(token);

//daysPerWeek = 8;

console.log(daysPerWeek);

function sum(a, b) {
	return a + b;
}

const resultC = sum(10, 5); // result будет равен 15

console.log(resultC);

let result = 0;
for(let i = 0; i < 5; i++) {
	result += i;
	console.log(result);
}
// result равен 10 ( 0+1+2+3+4 = 10)

let userRole = 'admin';
if(userRole === 'admin'){
	console.log('this is admin user');
}
else if (userRole === 'editor') {
	console.log('this is editor user');
}
else {
	console.log('this is other user');
}

let a1 = 1;
let b1 = 1.0;
let c1 = "1";

console.log(a1==b1);
console.log(a1==c1);
console.log(b1==c1);

console.log(a1===b1);
console.log(a1===c1);
console.log(b1===c1);

let s1 = "5";
console.log(s1 + 1);
console.log(parseInt(s1) + 1);

let name = "Attractor";
console.log(name.slice(3));
console.log(name.toUpperCase());

let objects = ['Att', 5.3, true, 99];
console.log(objects.length);
console.log(objects.slice(2));
console.log(objects);

console.log(objects[0] + 10);
console.log(objects[2] + 10);
console.log(objects[3] + 10);


const user2 = {};
const post = {
	title: 'Hello world',
	isLiked: true
};

user2.name = 'Attractor';
console.log(user2);
user2.age = 5;
console.log(user2);
console.log(Object.keys(user2));
console.log(Object.values(user2));
delete user2.name;
console.log(user2);

const user3 = {};
user3.name = 'Att';
user3.age = 3;
console.log(user3);