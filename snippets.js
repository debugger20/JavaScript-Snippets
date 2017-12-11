


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

