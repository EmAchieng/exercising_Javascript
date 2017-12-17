console.log(a, b);
//const pressPowerButton creates a variable with a given name written in camelCase.
//The variable is then set equal = to a set of parentheses followed by an arrow token () =>
// indicating the variable stores a function.
// This syntax is known as arrow function syntax.
var calculatorIsOn = false;

//write the function pressPowerButton then set the variable equal to the parantheses
const pressPowerButton = () => {
    //function body
    if (calculatorIsOn) {
        console.log('Calculator turning off.');
        calculatorIsOn = false;
    } else {
        console.log('Calculator turning on.');
        calculatorIsOn = true;
    }
};
// this executes the function
pressPowerButton();
// Output: Calculator turning on.
pressPowerButton();
// Output: Calculator turning off.






//Start by writing a function using the keyword const and the name takeOrder.
// Then set the variable = to a set of parentheses followed by an arrow () =>.
// Inside of its block {}, use console.log() to print 'Order: pizza'.

const takeOrder = () => {
    console.log('Order: pizza');
};

takeOrder();


//Parameters are variables in a function definition
// that represent data we can input into the function
//We add inputNumber within the parentheses () => of the multiplyByThirteen function.
// inputNumber is a parameter.

//Inside the multiplyByThirteen() function,
// we use console.log to print the inputNumber multiplied by 13.

const multiplyByThirteen = (inputNumber) => {
    console.log(inputNumber * 13);
};
//When we call the multiplyByThirteen() function on the last line, we set the inputNumber parameter.
// Here, we set it to 9.
// Then, inside the function block, 9 is multiplied by 13, resulting in 117 printing to the console.
multiplyByThirteen(9);
// Output: 117
//IinputNumber is a parameter
//9 is an argument
//Parameters let us write logic inside functions that are modified when we call the function.
// This makes functions more flexible.


//Inside the parentheses of the takeOrder() function,
// add a parameter named topping.
//Modify the console.log to interpolate the topping parameter to print
const takeOrder = (topping) => {
    console.log('Order: pizza topped with' + topping);
};
//At the end of the program,
// modify the takeOrder() function call to include an argument for topping.
//include a string in the parentheses of the function call

takeOrder('mushrooms');


//setting two parameters
//The getAverage() function has two parameters: numberOne and numberTwo,
// both entered in the parentheses ().
const getAverage = (numberOne, numberTwo) => {
    //When getAverage() runs,
    // the function knows what numberOne and numberTwo equal since we passed in two parameters when we called the function.
    const average = (numberOne + numberTwo) / 2 ;
    console.log(average);
};

//When we call the getAverage() function on the last line,
// we include two numbers as the parameters, also separated by commas.

getAverage(365, 27);
// Output: 196



const takeOrder = (topping, crustType) => {
    //Inside the takeOrder() function, interpolate the crustType parameter to construct a sentence like this:
    //Order: thin crust pizza topped with bacon
    //'Order: ' + crustType + ' crust topped with ' + topping;
    console.log('Order: ' + crustType + ' pizza topped with ' + topping);
};
//ll the function three times
// and pass in different arguments each time for topping and crustType.
takeOrder('mushroom', 'thin crust');
takeOrder('spinach', 'whole wheat');
takeOrder('pepperoni', 'brooklyn style');


//using return intead of console
const getAverage = (numberOne, numberTwo) => {
    const average = (numberOne + numberTwo) / 2;
    return average;
}

console.log(getAverage(365, 27));
// Output: 14


//Create a variable to hold the number of pizzas ordered.


let orderCount = 0;

const takeOrder = (topping, crustType) => {
    //Whenever a pizza is ordered, add one to the number of pizzas ordered.
    orderCount++;
    console.log('Order: ' + crustType + ' pizza topped with ' + topping);
};

takeOrder('mushroom', 'thin crust');
takeOrder('spinach', 'whole wheat');
takeOrder('pepperoni', 'brooklyn style');
//Take the total number of pizzas and multiply them by 7.5, since each pizza is $7.50.
//On a new line, beneath the closing brackets of the takeOrder function,
// declare a new function named getSubTotal that has one parameter named itemCount.
const getSubTotal = (itemCount) => {
    //Inside the getSubTotal() function's block,
    // use return to output the itemCount multiplied by 7.5.
    //On the last line of your program, after the takeOrder() function calls,
    // call the getSubTotal() function inside a console.log statement.
    return itemCount * 7.5;
};
//getSubTotal has a parameter that represents the number of items ordered.
// Pass in the orderCount as an argument when making the function call.
console.log(getSubTotal(orderCount));



//functions 2
const multiplyByNineFifths = (celsius) => {
    return celsius * (9/5);
};

const getFahrenheit = (celsius) => {
    return multiplyByNineFifths(celsius) + 32;
};

console.log('The temperature is ' + getFahrenheit(15) + '°F');
// Output: The temperature is 59°F







let orderCount = 0;

const takeOrder = (topping, crustType) => {
    orderCount++;
    console.log('Order: ' + crustType + ' pizza topped with ' + topping);
};

takeOrder('mushroom', 'thin crust');
takeOrder('spinach', 'whole wheat');
takeOrder('pepperoni', 'brooklyn style');

const getSubTotal = (itemCount) => {
    return itemCount * 7.5;
};
//getSubTotal() function, create a function expression using the variable const named getTax.
// It should take one parameter, orderCount.
const getTax = () => {
    //nside the getTax() function's block, call your getSubTotal() function
    // to get the subtotal
    // and then multiply the returned value by 6% (0.06).
    return getSubTotal(orderCount) * 0.06;
};
//declare another function named getTotal() beneath the getTax() function.
//add the subtotal to the tax, then return the result.
const getTotal = () => {
    return getSubTotal(orderCount) + getTax();
};
// call the function
// call the getTotal() function inside of a console.log() statement
// to view the result.
console.log(getSubTotal(orderCount));
console.log(getTotal());

//function declaration
//uses the keyword function
//has a function body
//functions do not end in a semicolon



function square (number) {
    return number * number;
}

console.log(square(5));
// Output: 25.


//create a new function called isGreaterThan.
// The function should take two parameters, numberOne and numberTwo.

function isGreaterThan(numberOne, numberTwo){
    //Inside the function, using an if/else statement, create the following logic:

    //If numberOne is greater than numberTwo, return true.

       // Otherwise, return false.
    if(numberOne > numberTwo){
        return true;
    } else {
        return false;
    }
}
//function calling
//Call the isGreaterThan() function with two arguments of your choice.
isGreaterThan(4, 8)

//note function expressions end with a semi-colon
// //since they are stored in a variable.
//arrow function
//() =>
const square = (number) => {
    return number * number;
};

//Function expressions are often stored in a variable.
// You can identify a function expression by the absence of a function name
// immediately trailing the function keyword.

const square = function (number) {
    return number * number;
};

console.log(square(5));
// Output: 25.




const isGreaterThan = (numberOne, numberTwo) => {
    if(numberOne > numberTwo){
        return true;
    } else {
        return false;
    }
}

isGreaterThan(4, 8)


//Functions that take a single parameter should not use parentheses.
// The code will still work,
// but it's better practice to omit the parentheses around single parameters.



const multiplyByNineFifths = celsius => celsius * (9/5);

const getFahrenheit = celsius => multiplyByNineFifths(celsius) + 32;

console.log('The temperature is ' + getFahrenheit(15) + '°F');




//previously it was

const multiplyByNineFifths = (celsius) => {
    return celsius * (9/5);
};

const getFahrenheit = (celsius) => {
    return multiplyByNineFifths(celsius) + 32;
};

console.log('The temperature is ' + getFahrenheit(15) + '°F');


//refactor
const volumeOfSphere = diameter => (1/6) * Math.PI * diameter * diameter * diameter;

console.log('The volume of the sphere is ' + volumeOfSphere(10) + ' cubic centimeters');




//Variables defined in the global scope are declared outside of a set of curly braces {},
// referred to as a block, and are thus available throughout a program. We'll cover more on blocks in subsequent exercises.
//variable color is declared outside of the function block, giving it global scope.
//color can be accessed within the colorOfSky function.
const color = 'blue'

const colorOfSky = () => {
    return color; // blue
};

console.log(colorOfSky()); // blue



//global variables
const satellite  = 'The Moon'

const galaxy = 'The Milky Way'

let stars = 'North Star'

const myNightSky = () => {
    return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};
// myNightSky() function is able to access the global variables
// without any problem since the variables are available globally.
console.log(myNightSky());








//While it's important to know what global scope is, it's better to avoid defining variables in the global scope.
// Globally scoped variables can collide with variables that are more locally scoped, causing unexpected behavior in our code.


//block scope
// Block scope means that a variable defined in the block
// is only accessible within the curly braces.
//We define a function colorOfSky().
//Within the function, the color variable is only available within the curly braces of the function.
const colorOfSky = () => {
    let color = 'blue';
    console.log(color); // blue
};

colorOfSky(); // blue
//If we try to log the same variable outside the function, it logs undefined
console.log(color); // undefined




//using const, define a function visibleLightWaves().
//Within the visibleLightWaves() function, using let,
// create a variable lightWaves and set it equal to 'Moonlight'.
//Within the function, beneath the lightWaves variable,
// add a console.log() statement that will log the value of the lightWaves variable when the function runs.
const visibleLightWaves = () => {
    let lightWaves = 'Moonlight';
    let region = 'The Arctic';
    if (region === 'The Arctic') {
        let lightWaves = 'Northern Lights';
        console.log(lightWaves);
    }
    //Call the visibleLightWaves() function from outside the function.
    console.log(lightWaves);
};

visibleLightWaves();






//the variable i is defined in the cloudCount() function.
//Within the for loop block, we again define i,
// as a value that will be incremented.
const cloudCount = () => {
    let i = 2;
    console.log(i); // 2
    for (let i = 0; i < 10; i++) {
        console.log(i); // All numbers from 0 to 9
    }
};

cloudCount();


console.log(i); // undefined






// declare a new function called starCount().
const starCount = () => {
    let i = 5 ;
    console.log(i);
    for (let i = 0; i < 12; i++) {
        console.log(i);
    }
};

starCount();
console.log(i);







const starCount = () => {
    let i = 5;
    console.log(i);
    for (let i = 0; i < 12; i++) {
        console.log(i);
    }
};
//call starCount from outside the function
starCount();


let groceryItem = 'papaya';
//the brackets contain the condition that each will compare

switch (groceryItem) {
    case 'tomato':
        console.log('Tomatoes are $0.49');
        break;
    case 'lime':
        console.log('Limes are $1.49');
        break;
    case 'papaya':
        console.log('Papayas are $1.29');
        break;
    default:
        console.log('Invalid item');
        break;
}
//terminator
//conditions
let isLocked = false;

isLocked ?
    console.log('You will need a key to open the door.'):

    console.log('You will not need a key to open the door.');


let isCorrect = true;

isCorrect?
    console.log('Correct!'):

    console.log('Incorrect!');


let favoritePhrase = 'Love That!';

favoritePhrase === 'Love That!' ?
    console.log('I love that!'):

    console.log("I don't love that!");


//arrays
let newYearsResolutions = ['Rappel into a cave', 'Take a falconry class', 'Learn to juggle'];

console.log(newYearsResolutions);

let listItem = (newYearsResolutions[0]);
console.log(newYearsResolutions[0]);
console.log(newYearsResolutions[2]);
console.log(newYearsResolutions[3]);

//finding the length
let newYearsResolutions = ['Rappel into a cave', 'Learn a new language', 'Learn to juggle'];

console.log(newYearsResolutions.length);

//push method // adds a new method
let newYearsResolutions = ['Rappel into a cave', 'Learn a new language', 'Learn to juggle'];


newYearsResolutions.push('item3', 'item4');
console.log(newYearsResolutions);


//shift
//removes first item from the array list
let groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();
console.log(groceryList);
//slice
let groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
console.log(groceryList.slice(1, 4));

//re-assigning to a new array
const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];
utensils = ['Spork'];

//loops
let cookies = ['chocolate chip', 'raisin', 'macadamia nut', 'sugar'];

for (let i = 0; i<cookies.length; i++) {
    console.log('I would love to eat a ' + cookies[i] + ' cookie right now!');
}

//arrays
let vacationSpots = ['Mozambique', 'Thailand', 'Bolivia'];

console.log(vacationSpots[0]);
console.log(vacationSpots[1]);
console.log(vacationSpots[2]);

//for loop
let animals = ["Grizzly Bear", "Sloth", "Sea Lion"];
//means the loop will start counting at 0
//the loop wil run as long as it is less than the animal length
//after that it will be increasing by one

for (let animalIndex = 0; animalIndex < animals.length; animalIndex++) {
    console.log(animals[animalIndex]);
}



//Use vacationSpotIndex as your iterator variable.

//Inside the block of the for loop, use console.log() to print each item in the vacationSpots array.
let vacationSpots = ['Mozambique', 'Thailand', 'Bolivia'];


for(let vacationSpotIndex =0; vacationSpotIndex < vacationSpots.length; vacationSpotIndex++) {
    console.log(vacationSpots[vacationSpotIndex]);
}

//you can also add text o your console
//I would like to visit

let vacationSpots = ['Mozambique', 'Thailand', 'Bolivia'];


for(let vacationSpotIndex =0; vacationSpotIndex < vacationSpots.length; vacationSpotIndex++) {
    console.log('I would love to visit ' + vacationSpots[vacationSpotIndex]);
}

//how to make a loop move backwards
//using --
//Edit the start condition to set vacationSpotIndex equal to the length of the vacationSpots array.
//set the stop condition to when vacationSpotIndex is greater than or equal to 0
//vacationSpotIndex-- to subtract 1 from the iterator variable each loop.


let vacationSpots = ['Mozambique', 'Thailand', 'Bolivia'];


for(let vacationSpotIndex =vacationSpots.length; vacationSpotIndex >=0; vacationSpotIndex--) {
    console.log('I would love to visit ' + vacationSpots[vacationSpotIndex]);
}

//the above attempted to count to 3
//we have to minus 1 from the length to find the exact size
let vacationSpots = ['Mozambique', 'Thailand', 'Bolivia'];


for(let vacationSpotIndex =vacationSpots.length -1; vacationSpotIndex >=0; vacationSpotIndex--) {
    console.log('I would love to visit ' + vacationSpots[vacationSpotIndex]);
}

//for
let myPlaces = ['Mombasa', 'Nairobi', 'Kisumu'];
let friendPlaces = ['Voi', 'Kisumu', 'Bungoma'];
for(let myPlacesIndex = 0; myPlacesIndex< myPlaces.length; myPlacesIndex++ )
{
    console.log(myPlaces[myPlacesIndex]);
}

//check similar items on an array

let myPlaces = ['Houston', 'Sioux Falls', 'Phoenix'];

let friendPlaces = ['Sioux Falls', 'Missoula', 'Buffalo'];

for (let myPlacesIndex = 0; myPlacesIndex < myPlaces.length; myPlacesIndex++) {
    for (let friendPlacesIndex = 0; friendPlacesIndex < friendPlaces.length; friendPlacesIndex++) {
        if (myPlaces[myPlacesIndex] === friendPlaces[friendPlacesIndex]) {
            console.log(friendPlaces[friendPlacesIndex]);
        }
    }
}

//while loop
let cards = ['Diamond', 'Spade', 'Heart', 'Club'];

let currentCard = 'Heart';
//the condition checks if the currentCard is not a spade
while (currentCard !== 'Spade') {
    console.log(currentCard);
    //This code will generate a random number between 0 and 3,
    // the range of indices of the cards array,
    // and reassign currentCard to a new card from that array.
    currentCard = cards[Math.floor(Math.random() *4)];
}

console.log('You found a spade!');


//iterators

let artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

artists.forEach(function(artist) {
    console.log(artist + ' is one of my favorite artists.');
});

let numbers = [1, 2, 3, 4, 5];

let squareNumbers = numbers.map(function(number) {
    return number * number;
});

console.log(squareNumbers);

let things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

let onlyNumbers = things.filter(function(thing) {
    return typeof thing === 'number';
});

console.log(onlyNumbers);








//for each
let groceries = ['whole wheat flour', 'brown sugar', 'salt', 'cranberries', 'walnuts'];

groceries.forEach(function(groceryItem) {
    console.log(' - ' + groceryItem);
});
// closes the function code block and .forEach() method in that order.

// is the code we wish to execute upon each element in the array.
// Logging the item to the console with a - in front of it makes the elements look like a list as they're printed out.


//same as code bove when an arrow is used
groceries.forEach(groceryItem => console.log(' - ' + groceryItem));





//for each
let fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
fruits.forEach(function(fruitItem)
{
    console.log("I want to eat" + fruits);
});

//you can use an arrow instead
//the code is same as above
let fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
fruits.forEach(fruitItem =>console.log("I want to eat" + fruit ));


//map()
//What if we do want to change the contents of the array? We can use .map()! instead of forEach
//let bigNumbers = numbers.map creates a new array, bigNumbers,
// in which the returned values of the .map() method will be saved and calls the .map() method on the numbers array.
let numbers = [1, 2, 3, 4, 5];
//(function(number) { creates a function that takes a single parameter, number,
// and opens the block of code for that function.
let bigNumbers = numbers.map(function(number) {
    //return number * 10; is the code we wish to execute upon each element in the array.
    // This will save each value from the numbers array, multiplied by 10, to the bigNumbers array.
    return number * 10;
});
// )); closes the function code block and .map() method in that order.


//above code can also be rewritten as
//refactored using an arrow
let numbers = [1, 2, 3, 4, 5];
let bigNumbers = numbers.map(numbers => numbers * 10);

//exercise

let animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
//use .map() to create a new array called secretMessage
// that returns the first character of each string in the animals array.
let secretMessage = animals.map(animal => animal.charAt(0));

console.log(secretMessage.join(''));

let bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
//.map() to divide all the numbers in bigNumbers by 100.
//Save the returned values to a new array called smallNumbers, declared with let.
let smallNumbers = bigNumbers.map(num => num/100);

//filter()
//returns a new array
//just like map()

//array is created
let words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door'];

//let shortWords = declares a new array that will contain the returned elements of the .filter() method.
//alls the .filter() method on the words array and creates a function that will take a single parameter, word.
let shortWords = words.filter(function(word) {
    //condition
    return word.length < 6;
});

//arrow can be used too
//same results
let shortWords = words.filter(word => word.length < 6);


let randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
let smallNumbers = randomNumbers.filter(function(randomNumbers)
{
    return randomNumbers.length < 250;
});

let favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];




// Refactor the code above using arrow function syntax
let longFavoriteWords = favoriteWords.filter(word => word.length > 7);






let words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below

console.log(words.some(function(word) {
    return word.length < 6;
}));

// Use filter to create a new array

let interestingWords = words.filter(word => word.length > 5);

// Make sure to uncomment the code below and fix the incorrect code before running it

console.log(interestingWords.every(word =>  word.length > 5      ));



//for each
let cities = ['Nashville', 'Charlotte', 'Asheville', 'Austin', 'Boulder'];

let nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
//i chose for each
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
//i chose filter
let longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a new array
//i chose map
let smallerNums = nums.map(num => num - 5);

//every()
// Choose a method that will return a boolean value
nums.every(num => num < 0);



//You've worked hard to pick 500 strawberries,
// but it looks like every 5th strawberry you picked was a rotten one!
// If each strawberry has an index value, write an if statement that returns true if the index is divisible by 5.
//Here is an example of a strawberry index
var index = 20;

//Boolean value rotten
var rotten = true;

//If the index is divisible by five, the strawberry is rotten, so set
//rotten to true. False, otherwise

if (index % 5 === 0) {
    console.log("true")
} else {
    console.log("false")
}

//Now that you can identify rotten strawberries,
// loop through all of your strawberries and for each rotten strawberry you find,
// subtract 1 from the variable goodStrawberries.

//You have 500 good strawberries, indexed from 1 to 500
var goodStrawberries = 500;

//For every strawberry whose index is divisible
//by 5, decrement the value of goodStrawberries by 1
for(var index = 1; index <= 500; index++)
{
    if (index % 5 === 0) {

        goodStrawberries-=1;
    }

}


//You're 100 strawberries short of a day's wages,
// so it looks like the boss is going to have to dock your pay.
// Given that one rotten strawberry is worth $2.25,
// use another for loop to calculate the total amount your boss will deduct from your pay.

//Now, given that you picked 100 rotten strawberries and that a
//strawberry is worth $2.25, use a loop again to calculate your
//pay losses
var payLosses = 0;

for(var index = 1; index <= 500; index++)
{
    if (index % 5 === 0) {

        payLosses += 2.25;
    }

}


//Fill in the doubly nested for loop given
// to figure out how much extra money you will make from picking 10 extra strawberries for the next 7 days.

//See if that covers your losses of $225

//To make up the money you lost from picking rotten strawberries,
//you decide to pick 10 extra strawberries everyday for the next
//7 days.

//Your earnings
var earnings = 0;

//Fill in the outer loop with an inner loop that loops through
//10 strawberries and increment your earnings by 2.25 for every
//extra strawberry that you pick
for (var days = 7; days > 0; days--)
{
    //Insert inner for loop here
    for (var extra = 0; extra < 10; extra++) {
        earnings += 2.25;
    }

}

//Boolean that returns true if your losses have been covered
var lossesCovered = false;

//Write an if statement that changes the lossesCovered to true
//if the earnings are greater than or equal to 225

if (earnings > 225) {
    lossesCovered = true;
}


//objects
//accessing object properties
//accessing object methods
//creating object getter and setter methods


//key-value pairs
let restaurant = {
    name: 'Italian Bistro',
    seatingCapacity: 120,
    hasDineInSpecial: true,
    entrees: ['Penne alla Bolognese', 'Chicken Cacciatore', 'Linguine Pesto']
};



let person = {
    name: 'Grace',
    age: 20
};

//accesing the object properties
//we use the dot notation
//['Penne alla Bolognese', 'Chicken Cacciatore', 'Linguine pesto'] would be the output

let restaurant = {
    name: 'Italian Bistro',
    seatingCapacity: 120,
    hasDineInSpecial: true,
    entrees: ['Penne alla Bolognese', 'Chicken Cacciatore', 'Linguine pesto']
};

console.log(restaurant.entrees)




let person = {
    name: 'Grace',
    age: 20
};
console.log(person.name);
console.log(person.age);

//another way is using the bracket notation
let restaurant = {
    name: 'Italian Bistro',
    seatingCapacity: 120,
    hasDineInSpecial: true,
    entrees: ['Penne alla Bolognese', 'Chicken Cacciatore', 'Linguine pesto']
};

console.log(restaurant['entrees']);


let person = {
    name: 'Grace',
    age: 20
};

console.log(person['name']);
console.log(person['age']);


//advantage of the bracket over the dot notation
//you can use variables inside the brackets to select the keys of an object.
//The lunch special is 10% off appetizers would be the output
//restaurantSpecials object has three key-value pairs
// for different specials throughout the day: breakfast, lunch, and none.
let meal = 'none';
let time = 12;
// We'll use military time for this example, counting hours 0-23.

const restaurantSpecials = {
    breakfast: 'The breakfast special is 20% off freshly squeezed orange juice',
    lunch: 'The lunch special is 10% off appetizers',
    none: 'There are no specials currently'
};
//The if/else statement sets the meal variable to 'breakfast' or 'lunch' based on the the time.
if (time < 11) { // 11 am
    meal = 'breakfast';
} else if (time < 17) { // 5 pm
    meal = 'lunch';
}
// The meal variable is not a key in the restaurantSpecials object.
//Because we are using bracket notation, JavaScript looks at the meal variable's value.
//In this case, meal is set to 'lunch' within the if/else statement because time is equal to 12.
//Since special equals 'lunch', writing restaurantSpecials[meal] is the same as writing restaurantSpecials['lunch'] —
// the code outputs the lunch special.
console.log(restaurantSpecials[meal]);


//accessing object properties
let person = {
    name: 'Tyron',
    age: 40,
    weekendAlarm: 'No alarms needed',
    weekAlarm: 'Alarm set to 7AM'
};

console.log(person['name']);
console.log(person['age']);

let day = 'Tuesday';
let alarm;

if (day === 'Saturday' || day === 'Sunday' ) {
    alarm = 'weekendAlarm';
} else {
    alarm = 'weekAlarm';
}

console.log(person[alarm]);



//adding an array to an object
let person = {
    name: 'Tyron',
    age: 40,
    weekendAlarm: 'No alarms needed',
    weekAlarm: 'Alarm set to 7AM',
    hobbies: ['reading', 'hiking']
};

console.log(person['name']);
console.log(person['age']);
console.log(person.hobbies);

let day = 'Tuesday';
let alarm;

if (day === 'Saturday' || day === 'Sunday' ) {
    alarm = 'weekendAlarm';
} else {
    alarm = 'weekAlarm';
}

console.log(person[alarm]);


//methods
const restaurant = {
    name: 'Italian Bistro',
    seatingCapacity: 120,
    hasDineInSpecial: true,
    entrees: ['Penne alla Bolognese', 'Chicken Cacciatore', 'Linguine pesto'],
    openRestaurant: () => {
    return 'Unlock the door, flip the open sign. We are open for business!';
},
closeRestaurant: () => {
    return 'Lock the door, flip the open sign. We are closed.'
}
};
//we use arrow syntax to create two methods,
// .openRestaurant()
// and .closeRestaurant() in the restaurant object.
console.log(restaurant.openRestaurant());

console.log(restaurant.closeRestaurant());



//calling a method
name: 'Tyron',
    age: 40,
    weekendAlarm: 'No alarms needed',
    weekAlarm: 'Alarm set to 7AM',
    hobbies: ['reading'],
    //this is our method
    sayHello: () => {
    return 'Hello, there!';
}

};

console.log(person['name']);
console.log(person['age']);
console.log(person.hobbies);
//calling the method
console.log(person.sayHello());


let day = 'Tuesday';
let alarm;

if (day === 'Saturday' || day === 'Sunday' ) {
    alarm = 'weekendAlarm';
} else {
    alarm = 'weekAlarm';
}

console.log(person[alarm]);


//more practice
let person = {
    name: 'Tyron',
    age: 40,
    weekendAlarm: 'No alarms needed',
    weekAlarm: 'Alarm set to 7AM',

    sayHello: function() {
        return 'Hello, there!';
    },

    sayGoodbye() {
        return 'Goodbye!';
    }

};

console.log(person.sayHello());

person.hobbies = ['Basketball', 'Coaching'];
person.hobbies = ['Basketball'];
console.log(person.hobbies);


console.log(person['name']);
console.log(person['age']);

let day = 'Tuesday';
let alarm;

if (day === 'Saturday' || day === 'Sunday' ) {
    alarm = 'weekendAlarm';
} else {
    alarm = 'weekAlarm';
}

console.log(person[alarm]);

//To address this scope issue, we can use the this keyword to access properties inside of the same object.
//when not defined
//below code will give an error
const restaurant = {
    name: 'Italian Bistro',
    seatingCapacity: 120,
    //it will complain that hasDineInSpecial is not defined
    hasDineInSpecial: true,
    entrees: ['Penne alla Bolognese', 'Chicken Cacciatore', 'Linguine pesto'],
    openRestaurant() {
        if (hasDineInSpecial) {
            return 'Unlock the door, post the special on the board, then flip the open sign.';
        } else {
            return 'Unlock the door, then flip the open sign.';
        }
    }
};

console.log(restaurant.openRestaurant());

//we will rectify by using the this keyword
//The .openRestaurant() method in the example above will return a value.
// The this keyword refers to the current object, which we use to grab the value saved to hasDineInSpecial
//this.hasDineInSpecial inside the object is the same as accessing restaurant.hasDineInSpecial outside the object.
const restaurant = {
    name: 'Italian Bistro',
    seatingCapacity: 120,
    hasDineInSpecial: true,
    entrees: ['Penne alla Bolognese', 'Chicken Cacciatore', 'Linguine pesto'],
    openRestaurant: function() {
        if (this.hasDineInSpecial) {
            return 'Unlock the door, post the special on the board, then flip the open sign.'
        } else {
            return 'Unlock the door, then flip the open sign.'
        }
    }
}


//this keyword
//more practice
let person = {
    name: 'Tyron',
    age: 40,
    weekendAlarm: 'No alarms needed',
    weekAlarm: 'Alarm set to 7AM',

    sayHello: function() {
        return 'Hello, there!';
    },

    sayGoodbye() {
        return 'Goodbye!';
    }

};

console.log(person.sayHello());

person.hobbies = ['Basketball', 'Coaching'];
person.hobbies = ['Basketball'];
console.log(person.hobbies);


console.log(person['name']);
console.log(person['age']);

let day = 'Tuesday';
let alarm;

if (day === 'Saturday' || day === 'Sunday' ) {
    alarm = 'weekendAlarm';
} else {
    alarm = 'weekAlarm';
}

console.log(person[alarm]);

//in the above code
// Use this to return a string that says:

//`Hello, my name is ${name here}`

let person = {
    name: 'Tyron',
    age: 40,
    weekendAlarm: 'No alarms needed',
    weekAlarm: 'Alarm set to 7AM',

    sayHello: function() {
        return `Hello, my name is ${this.name}`;
    },

    sayGoodbye() {
        return 'Goodbye!';
    }

};

console.log(person.sayHello());

person.hobbies = ['Basketball', 'Coaching'];
person.hobbies = ['Basketball'];
console.log(person.hobbies);


console.log(person['name']);
console.log(person['age']);

let day = 'Tuesday';
let alarm;

if (day === 'Saturday' || day === 'Sunday' ) {
    alarm = 'weekendAlarm';
} else {
    alarm = 'weekAlarm';
}

console.log(person[alarm]);




//this keyword
//this refers to the object we call it inside.
let myObj = {
    name: 'Miti',
    sayHello() {
        return `${this.name} says hello!`;
    }
};
// we call myObj.sayHello(), our method will return 'Miti says hello!'.
// this in the example above is called inside the myObj object,
// which limits the scope to the properties inside of myObj.


//Let's change that by switching the object calling this:
let yourObj = {
    name: 'Timer'
};

yourObj.sayHello = myObj.sayHello;
// Sets the sayHello method on yourObj to be the sayHello method on yourObj


//write another variable named friend
// and set it equal to an object with one key named name.
// The value of name should be your friend's name.
let friend = {
    name: 'name here'
};
//his will add a key named sayHello to the friend object
// and set it equal to the method inside of person.sayHello.
// The person.sayHello method uses the this keyword.
// What will this be when the friend object calls it?
friend.sayHello = person.sayHello;
//use console.log() to print the output of calling friend.sayHello()
// and notice the output in the console.
console.log(friend.sayHello());



//getters and setters
//Getter and setter methods get and set the properties inside of an object.
//You can check if new data is valid before setting a property.
//You can perform an action on the data while you are getting or setting a property.
   //You can control which properties can be set and retrieved.

//lets consider our restaurant object
//let restaurant = {
name: 'Italian Bistro',
    seatingCapacity: 120,
    hasDineInSpecial: true,
    entrees: ['Penne alla Bolognese', 'Chicken Cacciatore', 'Linguine Pesto']
}


// the seatingCapacity key holds the number 120.
//what if the seatingCapacity changes
//a good developer will address this
//To address this change,
// they would write code that checks if the newly set seatingCapacity value is valid
//recommend, prepending all properties with an underscore, and creating setters for all attributes you want to access later in your code.
let restaurant = {
    _name: 'Italian Bistro',
    _seatingCapacity: 120,
    _hasDineInSpecial: true,
    _entrees: ['Penne alla Bolognese', 'Chicken Cacciatore', 'Linguine pesto'],
//he set seatingCapacity() setter method accepts newCapacity as a variable.
// The newCapacity variable holds the new value that we will store in _seatingCapacity.
    set seatingCapacity(newCapacity) {
        //Inside of the .seatingCapacity() setter we use a conditional statement
        // to check if the newCapacity variable (our new value) is a number.
        if (typeof newCapacity === 'number') {
            //f the input value is a number (valid input),
            // then we use this._seatingCapacity to change the value assigned to _seatingCapacity.
            // If it is not valid, then we output a message to the user.
            this._seatingCapacity = newCapacity;
            console.log(`${newCapacity} is valid input.`);
        } else {
            console.log(`Change ${newCapacity} to a number.`)
        }
    }
}
//// Sets the _seatingCapacity value to 150 in the above code
  restaurant.seatingCapacity = 150;
//150 is valid input. would be the output

//this keyword
//Inside of the setter we want to check if the user's input is valid.

//Create a conditional statement to check if a user's input is a number.

//If the input is a number,
// set the _age property to the input value.
// If the input is not a number, return the string, 'Invalid input'.
let person = {
    _name: 'Lu Xun',
    _age: 137,

    set age(ageIn) {
        if (typeof ageIn === 'number') {
            this._age = ageIn;
        }
        else {
            console.log('Invalid input');
            return 'Invalid input';
        }
    }

};

//sets the new age to 39
let person = {
    _name: 'Lu Xun',
    _age: 137,

    set age(ageIn) {
        if (typeof ageIn === 'number') {
            this._age = ageIn;
        }
        else {
            console.log('Invalid input');
            return 'Invalid input';
        }
    }

};
person.age = 39.


//getters
//Getters are used to get the property values inside of an object.

let restaurant = {
    _name: 'Italian Bistro',
    _seatingCapacity: 120,
    _hasDineInSpecial: true,
    _entrees: ['Penne alla Bolognese', 'Chicken Cacciatore', 'Linguine pesto'],

    set seatingCapacity(seatingCapacity) {
        if (typeOf newCapacity === 'number') {
            this._seatingCapacity = newCapacity;
        } else {
            console.log(`Change ${newCapacity} to a number.`)
        }
    },
//In the example above, the getter method (get seatingCapacity()) logs something to the console
// and returns the value saved to _seatingCapacity.
    //We call the getter method the same way we would access a property without a method:
    get seatingCapacity() {
        console.log(`There are ${this._seatingCapacity} seats at Italian Bistro.`);
        return this._seatingCapacity;
    }
}
//set the value to 150
restaurant.seatingCapacity = 150;
//call the getter
const seats = restaurant.seatingCapacity;





//getter
get person = {
    _name: 'Lu Xun',
    _age: 137,

    set age(ageIn) {
        if (typeof ageIn === 'number') {
            this._age = ageIn;
        }
        else {
            console.log('Invalid input');
            return 'Invalid input';
        }
    },

    get age() {
        console.log(`${this._name} is ${this._age} years old.`);
        return this._age;
    }

};

//Create a getter method for your _age property.
// Inside the method log the following string and return the value saved to _age
//Use dot notation inside of a console.log()
// to get the value saved to your _age property and print it to the console.

person.age = 'Thirty-nine';
person.age = 39;

console.log(person.age);



//an object representing a dog named halley.
// This dog's name (a key) is "Halley"
// (a value) and
// has an age (another key) of 3 (another value)
let halley = {
    _name: 'Halley',
    _behavior: 0,

    get name() {
        return this._name;
    },

    get behavior() {
        return this._behavior;
    },

    incrementBehavior() {
        this._behavior++;
    }
}


//dog class
//JavaScript will invoke the constructor() method every time we create a new instance of our Dog class
//This constructor() method accepts one argument, name.
//nside of the constructor() method, we use the this keyword.
// In the context of a class, this refers to an instance of that class.
//n the Dog class, we use this to set the value of the Dog instance's name property to the name argument.
//Under this.name,
// we create a property called behavior, which will keep track of the number of times a dog misbehaves.
// The behavior property is always initialized to zero.
class Dog {
    constructor(name) {
        this._name = name;
        this._behavior = 0;
    }

    get name() {
        return this._name;
    }
    get behavior() {
        return this._behavior;
    }

    incrementBehavior() {
        this._behavior ++;
    }
}


// class named Surgeon
//create a constructor() method that accepts two parameters: name and department
//Inside the Surgeon constructor(), create name and department properties and set them equal to your input parameters.


class Surgeon {
    constructor(name, department) {
        this._name = name;
        this._department = department;


    }
}


const halley = new Dog('Halley');
console.log(halley.name); // Print name value to console
console.log(halley.behavior); // Print behavior value to console
halley.incrementBehavior(); // Add one to behavior
console.log(halley.name); // Print name value to console
console.log(halley.behavior); // Print behavior value to console


//Create an instance of the Surgeon class
// set the name to 'Curry' and department to 'Cardiovascular'.

//Save the instance to a constant variable called surgeonCurry.

class Surgeon {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }
}
//instance of the class
const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
//Create an instance of the Surgeon class
// set the name to 'Durant' and department to 'Orthopedics'.

//Save the instance to a constant variable called surgeonDurant.
const surgeonDurant = new Surgeon('Durant', 'Orthopedics');


//we added getters for name and behavior
//get name get behavior
// (_name and _behavior), which indicate these properties should not be accessed directly.
//Under the getters, we add a method named .incrementBehavior(). When you call .incrementBehavior() on a Dog instance, it adds 1 to the _behavior property.

class Dog {
    constructor(name) {
        this._name = name;
        this._behavior = 0;
    }

    get name() {
        return this._name;
    }

    get behavior() {
        return this._behavior;
    }

    incrementBehavior() {
        this._behavior++;
    }
}


//In the Surgeon constructor, prepend the name and department properties with an underscore (_).
//Inside of the constructor(), add a property named _remainingVacationDays and set it equal to 20.
//Under the constructor(), create a getter called name that returns the value saved to _name.
//Under the name getter, create a getter called department that returns the value saved to _department.
//Under the department getter, create a getter called remainingVacationDays that returns the value saved to _remainingVacationDays.
//Under the remainingVacationDays getter, create a method called takeVacationDays that accepts one argument named daysOff.

//Inside of the method, subtract daysOff from the number saved to _remainingVacationDays. Set _remainingVacationDays to the result.

class Surgeon {
    constructor(name, department) {
        this._name = name;
        this._department = department;
        this._remainingVacationDays = 20;
    }

    get name() {
        return this._name;
    }

    get department() {
        return this._department;
    }

    get remainingVacationDays() {
        return this._remainingVacationDays;
    }

    takeVacationDays(daysOff) {
        this._remainingVacationDays -= daysOff;
    }
}

const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
const surgeonDurant = new Surgeon('Durant', 'Orthopedics');

//method calls

class Dog {
    constructor(name) {
        this._name = name;
        this._behavior = 0;
    }

    get name() {
        return this._name;
    }

    get behavior() {
        return this._behavior;
    }

    incrementBehavior() {
        this._behavior++;
    }
}
// we create the Dog class, then create an instance, and save it to a variable named halley.
//The syntax for calling methods and getters on an instance is the same as calling them on an object — append the instance with a period,
// then the property or method name.
// For methods, you must also include opening and closing parentheses.
const halley = new Dog('Halley');

//for instance
//two dog instances
//create two Dog instances and call our .incrementBehavior() method on one of them.

let nikko = new Dog('Nikko'); // Create dog named Nikko
nikko.incrementBehavior(); // Add 1 to nikko instance's behavior
let bradford = new Dog('Bradford'); // Create dog name Bradford
console.log(nikko.behavior); // Logs 1 to the console
console.log(bradford.behavior); // Logs 0 to the console

//In the example above, we create two new Dog instances, nikko and bradford.
// Because we increment the behavior of our nikko instance,
// but not bradford, accessing nikko.behavior returns 1 and accessing bradford.
// behavior returns 0.




constructor(name, department) {
    this._name = name;
    this._department = department;
    this._remainingVacationDays = 20;
}

get name() {
    return this._name;
}

get department() {
    return this._department;
}

get remainingVacationDays() {
    return this._remainingVacationDays;
}

takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
}
}

const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
const surgeonDurant = new Surgeon('Durant', 'Orthopedics');

//use console.log() to print the value saved to thename property of the surgeonCurry object.
console.log(surgeonCurry.name);

//Call .takeVacationDays() on surgeonCurry, with an input of 3
surgeonCurry.takeVacationDays(3);

//After the call to .takeVacationDays(),
// use console.log() to print the value saved to the remainingVacationDays property of the surgeonCurry instance.
console.log(surgeonCurry.remainingVacationDays);





//ways of accessing properties
//you can access a property from an object by appending it with a period and the property's getter name. See below:

console.log(myObject.keyOne);






//inheritance
//we create a Cat class. It shares a couple of properties (_name and _behavior) and a method (.incrementBehavior()) with the Dog class from earlier exercises.
// The Cat class also contains one additional property (_usesLitter),
// that holds a boolean value to indicate whether a cat can use their litter box.
//When multiple classes share properties or methods, they become candidates for inheritance
//With inheritance, you can create a parent class (also known as a superclass) with properties and methods that multiple child classes (also known as subclasses) share.
// The child classes inherit the properties and methods from their parent class.
class Cat {
    constructor(name, usesLitter) {
        this._name = name;
        this._usesLitter = usesLitter;
        this._behavior = 0;
    }

    get name() {
        return this._name;
    }

    get usesLitter() {
        return this._usesLitter;
    }

    get behavior() {
        return this._behavior;
    }

    incrementBehavior() {
        this._behavior++;
    }
}


//inheritance

class Animal {
    constructor(name) {
        this._name = name;
        this._behavior = 0;
    }

    get name() {
        return this._name;
    }

    get behavior() {
        return this._behavior;
    }

    incrementBehavior() {
        this._behavior++;
    }
}

//inheritance 2
class Animal {
    constructor(name) {
        this._name = name;
        this._behavior = 0;
    }

    get name() {
        return this._name;
    }

    get behavior() {
        return this._behavior;
    }

    incrementBehavior() {
        this._behavior++;
    }
}

//The code below shows the Cat class that will inherit information from the Animal class.

class Cat {
    constructor(name, usesLitter) {
        this._name = name;
        this._usesLitter = usesLitter;
        this._behavior = 0;
    }

    get name() {
        return this._name;
    }

    get behavior() {
        return this._behavior;
    }

    get usesLitter() {
        return this._usesLitter;
    }

    incrementBehavior() {
        this._behavior++;
    }
}
//Doctor Properties: _name, _remainingVacationDays (set to 20 inside the constructor()), _insurance
//Methods: .takeVacationDays()

//Nurse Properties: _name, _remainingVacationDays (set to 20 inside constructor()), _certifications
//Methods: .takeVacationDays(), .addCertification()

class HospitalEmployee {
    constructor(name) {
        //Inside of the constructor(), set the instance's _name to name and _remainingVacationDays to 20.
        this._name = name;
        this._remainingVacationDays = 20;
    }
//Under the constructor, create getters for your _name and _remainingVacationDays properties.
    //Inside the getter, return the property's value.

    get name() {
        return this._name;
    }
//Under the getters, add a method called takeVacationDays
    //This method should accept one argument, called daysOff.

    //Inside the method, subtract daysOff from _remainingVacationDays. Save the result to _remainingVacationDays.

    get remainingVacationDays() {
        return this._remainingVacationDays;
    }

    takeVacationDays(daysOff) {
        this._remainingVacationDays -= daysOff;
    }
}


//inheritance 3
class Animal {
    constructor(name) {
        this._name = name;
        this._behavior = 0;
    }

    get name() {
        return this._name;
    }

    get behavior() {
        return this._behavior;
    }

    incrementBehavior() {
        this._behavior++;
    }
}
//Now that we have these shared properties and methods in the parent Animal class,
// we can extend them to the subclass, Cat.
//The extends keyword makes the methods of the animal class available inside the cat class.
//The constructor, called when you create a new Cat object, accepts two arguments, name and usesLitter.

class Cat extends Animal {
    constructor(name, usesLitter) {
        //The super keyword calls the constructor of the parent class.
        // In this case, super(name) passes the name argument of the Cat class to the constructor of the parent
        //When the Animal constructor runs, it sets this._name = name; for new Cat instances.

        super(name);
        //_usesLitter is a new property that is unique to the Cat class, so we set it in the Cat constructor.
        this._usesLitter = usesLitter;
    }
    //Notice, we call super on the first line of our constructor(), then set the usesLitter property on the second line.
    // To avoid reference errors, it is best practice to call super on the first line of subclass constructors.



//we create a new Cat instance and call its name with the same syntax as we did with the Dog class:

    const bryceCat = new Cat('Bryce', false);
    console.log(bryceCat._name); // output: Bryce
}
//In the example above, we create a new instance the Cat class, named bryceCat.
// We pass it 'Bryce' and false for our name and usesLitter arguments.
// When we call console.log(bryceCat._name) our program prints, Bryce.
//In the example above, we abandoned best practices by calling our _name property directly. I










class HospitalEmployee {
    constructor(name) {
        this._name = name;
        this._remainingVacationDays = 20;
    }

    get name() {
        return this._name;
    }

    get remainingVacationDays() {
        return this._remainingVacationDays;
    }

    takeVacationDays(daysOff) {
        this._remainingVacationDays -= daysOff;
    }
}
//In the Nurse constructor, call the parent's constructor method and pass the appropiate value(s).
//use super keyword
//Inside of the Nurse constructor, and under super, set _certifications.
class Nurse extends HospitalEmployee {
    constructor(name, certifications) {
        super(name);
        this._certifications = certifications;
    }
}
//Under the Nurse class, create a new instance of Nurse and save it to a constant variable named nurseOlynyk.
// Pass in the following values for each property:

//name: 'Olynyk'
//certifications: ['Trauma', 'Pediatrics']
const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics']);


//inheritance
//our Cat class extends Animal. As a result, the Cat class has access to the Animal getters and the .incrementBehavior() method.

class Animal {
    constructor(name) {
        this._name = name;
        this._behavior = 0;
    }

    get name() {
        return this._name;
    }

    get behavior() {
        return this._behavior;
    }

    incrementBehavior() {
        this._behavior++;
    }
}


class Cat extends Animal {
    constructor(name, usesLitter) {
        super(name);
        this._usesLitter = usesLitter;
    }
}

const bryceCat = new Cat('Bryce', false);
//Also in the code above, we create a Cat instance named bryceCat.
// Because bryceCat has access to the name getter, the code below logs 'Bryce' to the console.
console.log(bryceCat.name);

bryceCat.incrementBehavior(); // Call .incrementBehavior() on Cat instance
console.log(bryceCat.behavior); // Log value saved to behavior
//the code above will log 1


//The Cat class inherits the _behavior property, behavior getter,
// and the .incrementBehavior() method from the Animal class.
//When we created the bryceCat instance, the Animal constructor set the _behavior property to zero.
    //The first line of code calls the inherited .incrementBehavior() method, which increases the bryceCat _behavior value from zero to one.
    //The second line of code calls the behavior getter and logs the value saved to _behavior (1).


class HospitalEmployee {
    constructor(name) {
        this._name = name;
        this._remainingVacationDays = 20;
    }

    get name() {
        return this._name;
    }

    get remainingVacationDays() {
        return this._remainingVacationDays;
    }

    takeVacationDays(daysOff) {
        this._remainingVacationDays -= daysOff;
    }
}

class Nurse extends HospitalEmployee {
    constructor(name, certifications) {
        super(name);
        this._certifications = certifications;
    }
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);

//Call .takeVacationDays() with an input of 5 on your nurseOlynyk instance.
nurseOlynyk.takeVacationDays(5);

//Under the method call, log the value saved to the remainingVacationDays property in nurseOlynyk.
console.log(nurseOlynyk.remainingVacationDays)





//imheritance 4
//In addition to the inherited features, child classes can contain their own properties, getters, setters, and methods.

//Below, we will add a usesLitter getter. The syntax for creating getters, setters, and methods is the same as it is in any other class.

class Cat extends Animal {
    constructor(name, usesLitter) {
        super(name);
        this._usesLitter = usesLitter;
    }

    get usesLitter() {
        // we create a usesLitter getter in the Cat class that returns the value saved to _usesLitter.
        return this._usesLitter;
    }
}

//compare it without inheritance
//We decreased the number of lines required to create the Cat class by about half.
// Yes, it did require an extra class (Animal), making the reduction in the size of our Cat class seem moot.
// However, the benefits (time saved, readability, efficiency) of inheritance grow as the number and size of your subclasses increase.
class Cat {
    constructor(name, usesLitter) {
        this._name = name;
        this._usesLitter = usesLitter;
        this._behavior = 0;
    }

    get name() {
        return this._name;
    }

    get usesLitter() {
        return this._usesLitter;
    }

    get behavior() {
        return this._behavior;
    }

    incrementBehavior() {
        this._behavior++;
    }
}
//additional subclass Dog
class Dog extends Animal {
    constructor(name) {
        super(name);
    }
}

//This Dog class has access to the same properties, getters, setters, and methods
// as the Dog class we made without inheritance, and is a quarter the size.





class HospitalEmployee {
    constructor(name) {
        this._name = name;
        this._remainingVacationDays = 20;
    }

    get name() {
        return this._name;
    }

    get remainingVacationDays() {
        return this._remainingVacationDays;
    }

    takeVacationDays(daysOff) {
        this._remainingVacationDays -= daysOff;
    }
}

class Nurse extends HospitalEmployee {
    constructor(name, certifications) {
        super(name);
        this._certifications = certifications;
    }
//Under the Nurse constructor(), add a getter that returns the value saved to the Nurse instance's _certifications.
    get certifications() {
        return this._certifications;
    }
//Add a method called addCertification under the certifications getter.

    //The method should accept one input (newCertification).
    //Inside the method, use the push method to add the newCertification value to the nurse's certifications array.

    addCertification(newCertification) {
        this._certifications.push(newCertification);
    }
}

//At the bottom of main.js call the .addCertification() method on nurseOlynyk with a parameter of 'Genetics'.

const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);
nurseOlynyk.addCertification('Genetics');

//Log the value saved to the certifications property of nurseOlynyk.
console.log(nurseOlynyk.certifications);





//static methods
//Take the Date class, for example — you can both create Date instances to represent whatever date you want, and call static methods,
// like Date.now() which returns the current date, directly from the class. The .now() method is static,
// so you can call it directly from the class, but not from an instance of the class.

//animal class

class Animal {
    constructor(name) {
        this._name = name;
        this._behavior = 0;
    }

    static generateName() {
        const names = ['Angel', 'Spike', 'Buffy', 'Willow', 'Tara'];
        const randomNumber = Math.floor(Math.random()*5);
        return names[randomNumber];
    }
}
//In the example above, we create a static method called .generateName()
// that returns a random name when it's called.
// Because of the static keyword, we can only access .generateName() by appending it to the Animal class.


//We call the .generateName() method with the following syntax:

    console.log(Animal.generateName()); // returns a name


//You cannot access the .generateName() method from instances of the Animal class or instances of its subclasses (See below).

const tyson = new Animal('Tyson');
tyson.generateName(); // TypeError
//The example above will result in an error, because you cannot call static methods (.generateName()) on an instance (tyson).


class HospitalEmployee {
    constructor(name) {
        this._name = name;
        this._remainingVacationDays = 20;
    }

    get name() {
        return this._name;
    }

    get remainingVacationDays() {
        return this._remainingVacationDays;
    }

    takeVacationDays(daysOff) {
        this._remainingVacationDays -= daysOff;
    }
//Inside of your HospitalEmployee class,
// create a static method called generatePassword.
// When it's called, this method should return a random integer between zero and 10,000.
    static generatePassword() {
        return Math.floor(Math.random() * 10000);
    }
}

class Nurse extends HospitalEmployee {
    constructor(name, certifications) {
        super(name);
        this._certifications = certifications;
    }

    get certifications() {
        return this._certifications;
    }

    addCertification(newCertification) {
        this.certifications.push(newCertification);
    }
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);
nurseOlynyk.addCertification('Genetics');
console.log(nurseOlynyk.certifications);


// ECMAScript2015
