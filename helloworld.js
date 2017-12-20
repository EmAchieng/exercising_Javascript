//hello world
console.log("Hello World.");
a = 3;
b = 4;
console.log(a+b);


//integers
var x =5;
var y = 10;
console.log(x * y);

//strings
var text_1 = "Hello World";
var text_2 = "Hi_Gachon";
console.log(text_1 + text_2);

text_1 = "Hello_world";
console.log(text_1.length);
console.log(text_1[0]);
console.log(text_1.toUpperCase());

var bool_1 = true;
var bool_2 = false;
console.log(bool_1 | bool_2);
console.log(bool_2 && bool_2);


a= 3;
console.log (a++); //3
console.log(++a); //5
console.log(a+=5);//10

a= true;
b = false;
console.log(a && b);
console.log(a || b);
console.log(!a);
console.log(150 > 450);
console.log(1==a);
console.log(1===a);
console.log("" ==b);


//arrays
var majors = ["Management", "Computer Science", "Law"]
console.log(majors);
console.log(majors[1]);
console.log(majors.slice(0,2));


//functions
var fruits = ['banana', 'apple', 'mango'];
console.log(fruits.length);
fruits.pop(); console.log(fruits);
fruits.push("Lemon"); console.log(fruits);
fruits.unshift("mango"); console.log(fruits);

function myFunction() {
    console.log("Hello, Function")
};


var myFunction_2 = function (your_name) {
    console.log("Hello", your_name)
};
//gachon goes to yourname, yourname is the parameter
myFunction_2("Gachon");

//function return
var sumFunction = function (a , b) {
    return a + b;
};
//3 and 5 will be inserted to a and b
console.log(sumFunction(3,5));

var myFunction = function () {
    console.log("Hello, Function")
};

//objects
var person = {
    firstName:"John",
    lastName:"Doe",
    age:50,
    eyeColor:"blue"
};

console.log(person["lastName"])
console.log(person.age)


//loops

//for loop
for (i = 0; i < 10; i++){
    if (i % 2 == 0) {
        console.log("i의 값은?", i);
    }
}

var cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
var text = "";
var i;
for (i = 0; i < cars.length; i++) {
    text += cars[i] + "<br>";
}

console.log(text)

//while loop

a = 1;

while ( a < 10){
    console.log("a 의 값은", a)
    a++;
}

//if and else
var a = 3;
var b = 5;

if (a > b){
    a++;
} else {
    b++;
}

