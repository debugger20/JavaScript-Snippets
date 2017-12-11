


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
///////////////////// STRINGS //////////////
////////////////////////////////////////////