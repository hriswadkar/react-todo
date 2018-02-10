function add(a, b) {
    return a + b;    
}

console.log(add(3, 1));

var toAdd = [9, 5];
console.log(add(...toAdd));

var groupA = ['Jen', 'Cory'];
var groupB = ['Vikram'];
var final = [...groupB, 3, ...groupA];

console.log(final);

var person = ['Harshad', 39];
var person2 = ['Test', 45];

function greetUser(name, age) {
    console.log('Hi, ' + name + '. You are ' + age + ' years old.');
}

greetUser(...person);
greetUser(...person2);
//console.log(greetUser('Harshad', 39));


var names = ['Mike', 'Ben'];
var finalValue = ['Harshad', ...names];

finalValue.forEach(function (name) {
    console.log('Hi, ' + name);
});

