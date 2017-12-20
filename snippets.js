


///////////////////////////////////////////
///////////////////// ARRAYS //////////////
///////////////////////////////////////////

// creating an array in JavaScript
var nums = [1, 1, 2, 3, 5, 5, 6];

// nums is an array which may include same number more than once
// in order to avoid multiple same numbers put it into a set, and to put it array again. 
Array.from(new Set(nums));

// sort nums array in descending order
nums.sort(function(a,b){return b - a;});

// sort nums array in descending order using arrow functions
nums.sort((a,b) => a < b);

// loop over an array using forEach
nums.forEach(function(el, index, array) {
    // 'index' is the index
    // 'el' is the element
    console.log(index + ' ' + el);
});

// iterate over an array using for .. of
for (let el of nums) { console.log("el: ", el); }

// iterate over an array using for .. in
for (let i of nums) { console.log("el: ", nums[i]); }

// Appending new number at the end of the array.
nums.push(5);

// Removing last element from the array.
nums.pop();

// Removing first element from the array.
nums.shift();

// Appending new number at the beginning of the array.
nums.unshift(3);

// Find index of an item in the array. It will return the index of first occurence.
nums.indexOf(2);

// Remove number of elements starting at position.
const position = 2;
const nofElementsToRemove = 5;
nums.splice(position, nofElementsToRemove);

// copy elements in an array.  newArray = nums, it just gets the reference of nums and anything done in newArray will effect nums, and vice versa.
let newArray = nums.slice();

// adding all elements in array using reduce method.
[1,2,3].reduce((a,b) => a + b, 0);  // outputs 6

////////////////////////////////////////////
////////////    STRINGS       //////////////
////////////////////////////////////////////

var str = "STRING";

// get length of the string
str.length;

// convert number to a string
var num = 2;
var myString = String(num);


// Important methods of string..
// includes: Returns a boolean whether the string includes the given string.
// Case sensitive.
var s = "RING";
str.includes(s);  // return true


// endWith: Returns a boolean whether the string ends with the given string.
// Case sensitive.
str.endWith(s);  // return true


// indexOf: Returns an integer denoting the index within the string of the first occurance
// of the argument. First argument - searching string. Second argument - the starting position of searching
str = "STRINGSTR";
str.indexOf("STR"); // returns 0
str.indexOf("STR", 1); // returns 6
str.indexOf("abc"); // returns -1


// match: Match a regulat expression passed as an argument, it returns an object:
// First Property of returned object: matched string
// Second Property of returned object: index where the matched string found
// Third Property of returned object: input string.
// ["STR", index: 0, input:"STRING"]
str = "STRING";
str.match("[A-Z]{3}");  // ["STR", index: 0, input:"STRING"]


// repeat: Returns a string repeated some number of times
str = "STRING";
str.repeat(2);  // "STRINGSTRING"


// replace: Replaces the first occurance of the first string with the second string
str.replace("STR", "DO");   // DOING


// search: Returns the index of the first character of the first match
// argument may be a regular expression
str = "STRING";
str.search("[H-K]");  // returns 3


// slice: Gets slice of a string
// First argument - optional - start index (inclusive)
// Second argument - optional - end index (exlusive).
str = "STRING";
str.slice(1, 2);  // "T"


// split: Returns an array splitting with given string.
// No argument: returns an array of one element of original string.
// Empty string as argument: each character in string pushed into an array.
str = "A--B--C";
str.split();     // ["A--B--C"]
str.split("");     // ["A", "-", "-", "B", "-", "-"]
str.split("--"); // ["A", "B", "C"]


// startsWith: Returns a boolean whether the string is start with the given string
str = "STRING";
str.startsWith("STRI");  // true


// substr: Gets sub string from a string
// First argument - optional - start index (inclusive)
// Second argument - optional - number of characters to fetch starting from start index.
str = "STRING";
str.substr(1, 4);  // "TRIN"


// toLowerCase: change all characters to lowercase in given string
str = "STRING";
str.toLowerCase();  // "string"


// trim: erases whitespace characters from start and end
str = "  ABC  ";
str.trim();  // "ABC"



///////////////////////////////////////////////////////////
///////////////////// TRY, CATCH and FINALLY //////////////
///////////////////////////////////////////////////////////
const num = 123;
try {
	num.split("");
} 
catch (e) {
    console.log(e.message);
}
// Output: num is not a function.



///////////////////////////////////////////////////////////
/////////////////////   OBJECTS  //////////////////////////
///////////////////////////////////////////////////////////

// Declaring an object with two properties. (using object initializer)
var actor = {
	Name: "Russell Crowe",
	Age: 55
};
actor['Name']  // Accessing an object property using bracket notation
actor.Name     // Accessing an object property using dot notation

actor.EyeColor = "Blue";   // Adding a new property

// Initialize an object
var obj = {};                // object initializer
var obj = new Object();      // new Object()
var obj2 = Object.create(x); // creates object from another object.

// Define the object type by writing a constructor function.
function Actor(Name, Age) {
	this.Name = Name;
	this.Age  = Age;
}
var ac1 = new Actor("Tom Cruise", 57);



///////////////////////////////////////////////////////////
/////////////////////   CLASSES  //////////////////////////
///////////////////////////////////////////////////////////

// Defining class using functions
// Define property and methods using this keyword.
function Fruit(type) {
	this.type = type;
	this.color = "unknown";
	this.getInformation = getFruitInformation;
}

function getFruitInformation() {
	return "This " + this.type + " is " + this.color + ".";
}

// Create an object using new keyword
let lime = new Fruit("Mexican lime");
console.log(lime.getInformation());


// Defining class method internally
// Drawback of internally defined functions: 
// It recreates this function every time we create a new Fruit object.
function Fruit(type) {
	this.type = type;
	this.color = "unknown";
	this.getInformation = function() {
		return "This " + this.type + " is " + this.color + ".";
	}
}


// Adding functions using prototype property
// When we add methods and properties to the prototype, they are accessible to all instances of that function.
function Fruit(type) {
	this.type = type;
	this.color = "unknown";
}
Fruit.prototype.getInformation = function() {
	return "This " + this.type + " is " + this.color + ".";
}


// We can define object properties and functions using object literals
let lime = {
	type: "Mexican lime",
	color: "green",
	getInfo: function() {
		return "This " + this.type + " is " + this.color + ".";
	}
}


// ES6 introduces new keyword class to define classes.
// An important difference between function declarations and class declarations is 
// that function declarations are hoisted (i.e., can be referenced before declared)
class Polygon {
	constructor(height, width) {
		this.height = height;
		this.width = width;
	}
}

let p = new Polygon(1, 2);


// Classes can be defined using class expressions (either named or unnamed)
let Polygon = class Polygon {   // named
	constructor(height, width) {
		this.height = height;
		this.width = width;
	}
}
let p = new Polygon(1, 2);


// Defining static methods
// Static methods are relevant to all instances of a class
class Point {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
	static distance(a, b) {
		const dx = a.x - b.x;
		const dy = a.y - b.y;
		return Math.sqrt(dx * dx + dy * dy);
	}
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

// Access to the static method will be achieved only using class name
console.log(Point.distance(p1, p2));


// Inheritence using extends keyword.
class Animal {
	constructor(name) {
		this.name = name;
	}
	speak() {
		console.log(this.name, "speaks.");
	}
}

class Dog extends Animal {
	speak() {
		console.log(this.name, "barks.");
	}
}

// Functional classes can be extended using extends keyword
function Animal(name) {
	this.name = name;
}
Animal.prototype.speak = function() {
	console.log(this.name, "speaks.");
}
class Cat extends Animal {
	speak() {
		console.log(this.name, "mouww.");
	}
}

// super keyword is used for calling functions on object's parent.
class Dog extends Animal {
	speak() {
		super.speak();
		console.log(this.name, "barks.");
	}
}


/////////////////////////////////////////////////////////////////////
/////////////////////   TEMPLATE LITERALS  //////////////////////////
/////////////////////////////////////////////////////////////////////

// Template literals are string literals that allow for embedded expressions.
// They are wrapped in backtick(`) characters.
// They can contain placeholders, which are preceded by '$' sign wrapped in curlies({}).
console.log(`first line
second line`);  // prints "first line" in first line. "second line" in second line.

// It may contain expressions
const a = 2;
const b = 3;
console.log(`The sum of a and b is ${a + b}.`);


// Tagged template literals
// They allow to use a function to modify the output of a template literal.

// First argument will be array of string literals.
// The subsequently processed arguments are the values of the substitution expression.
function foo(strings, ...values) {
	for (str of strings) {
		console.log(str);
	}
	for (val of values) {
		console.log(val);
	}
}
var a = 5;
var b = 10;
foo`Sum ${a+b}Product ${a*b}`;


///////////////////////////////////////////////////////////////////
/////////////////////   ARROW FUNCTIONS  //////////////////////////
///////////////////////////////////////////////////////////////////

// Lexically bind the this value while using less syntax than a typical function expression.
// Arrow functions are always anonymous.
// (parameter) => { statements }
// (parameter) => { expression }
// (parameter) => { return expression }
// (param1, param2, ..., paramN) => { statements }
// (param1, param2, ..., paramN) => { expression }
// (param1, param2, ..., paramN) => { return expression }


const makeArray = (...values) => { return values };
console.log(makeArray(1,2,3,4,5));   // Outputs: [1,2,3,4,5]

const getSum = (a, b) => { return a + b };
console.log(getSum(2, 4));

// Find length of each array elements and put it into an array using arrow functions.
const lens = ["first", "second", "third"].map((a) => a.length);   // Output: [5, 6, 5]

// Find all elements in an array that are greater than 3.
[1,2,3,4,5].filter(a => a > 3);   // Output: [4,5]



///////////////////////////////////////////////////////////////////
/////////////////////   REGULAR EXPRESSIONS  //////////////////////
///////////////////////////////////////////////////////////////////

// Two ways to declare regular expressions
const re = new RegExp('ab+c');
const re = /'ab+c'/;

// new RegExp(pattern[, flags])
// flags:
// g: global match
// i: ignore case
// m: multiline
// u: unicode
// y: sticky

// Character classes
// .  => a single char
// \d => a single digit
// \D => a single non digit
// \w => a single alpha numeric 
// \W => a single non alpha numeric
// \s => a single whitespace
// \S => A single non-whitespace

// Character sets
// [abcd] matches anyone character from the set {a,b,c,d}. Equivalent [a-d]
// a|b => a or b
//   Boundaries:
//     ^ matches beginning of input
//     $ matches end of input
//   Grouping:
//     (a)   => Matches a and remembers the match
//     (?:a) => Matches a but does not remember the match.
//    Quantifiers:
//      * => 0 or more times
//      + => 1 or more times
//      ? => 0 or 1 time
//      {n} => exactly n times
//      {n,}  => at least n times
//      {n,m} => at least n times at most m times

// RegExp methods
// test: executes a search for a match between regular expression and a string.
var re = /^learn/;
var str1 = "learn it now";
re.test(str1);  //returns true

// exec: executes a search for a match in a specified string.
// if no match, returns null
var re = /^learn\s([a-z]+)\s([a-z]+)/;
var str1 = "learn it now";
re.exec(str1);   // returns array ['learn it now', 'it', 'now']

// search: returns the index of first match of the regular expression.
var re = /learn/;
var str1 = "learn it now";
re.search(str1);   // returns 0


///////////////////////////////////////////////////////////////////
/////////////////////   WORKING WITH HTML ELEMENTS ////////////////
///////////////////////////////////////////////////////////////////

// To write js scripts inside the HTML elements
<body>
    <script>
        /* Write JS code here */
    </script>
</body>

// To write js script as a separate file apart from HTML file
<body>
    <script src="js-file-path" type="text/javascript"></script>
</body>


// Creating a button using javascript inside HTML file.

// Creates a clickable button object.
var clickMeButton = document.createElement('button');

// Sets button id
clickMeButton.id = 'myButton';

// Sets button label
clickMeButton.innerHTML = 'Click Me';

// Sets background color
clickMeButton.style.background = '#4FFF8F';

// Appends button to the body of the document as a child.
document.body.appendChild(clickMeButton);

// Getting button object by using its id.
var clickMeButton = document.getElementById('myButton');
clickMeButton.innerHTML = 'This is my new label text!';

// Setting the actions on buttons - first way
clickMeButton.onclick = function() {
	clickMeButton.innerHTML = "You clicked me!";
}

// Setting the actions on buttons - second way
clickMeButton.addEventListener("click", function() {
	clickMeButton.innerHTML = "You clicked me!";
});