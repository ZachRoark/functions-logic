// CHICKENMONKEY
for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
    if (currentNumber % 5 === 0) {
        console.log('chicken')
    } else if (currentNumber % 7 === 0) {
        console.log('monkey')
    } else if (currentNumber % 5 === 0 && currentNumber % 7 === 0) {
        console.log('ChickenMonkey')
    } else {
        console.log(currentNumber)
    }
}


// BATTLEOFTHEBANDS
let bandNumber = 0
const takeNumber = function (bandName) {
    
   bandNumber = bandNumber + 1;
   return `${bandNumber}. ${bandName}`
}
const scum = takeNumber("Galactic Scum")
console.log(scum)  // This should print "1. Galactic Scum" in the console

const under = takeNumber("Underdogs")
console.log(under)  // This should print "2. Underdogs" in the console


// COOKOUT
const hamburger = {
	name: 'Hamburger',
	type: 'beef',
	cooked: false,
}
const zucchini = {
	name: 'Zucchini',
	type: 'vegetable',
	cooked: false,
}
const chickenBreast = {
	name: 'Chicken Breast',
	type: 'chicken',
	cooked: false,
}
const corn = {
	name: 'Corn',
	type: 'vegetable',
	cooked: false,
}
const steak = {
	name: 'Steak',
	type: 'beef',
	cooked: false,
}

// An array that is grouping the objects together.
const foods = [hamburger, zucchini, chickenBreast, corn, steak];

// An empty array that will store the objects after the `grill()` function cooks the food.
const cookedFood = [];

function grill (currentObject) {
    for (let index = 0; index < foods.length; index++) {
        if(foods[index].cooked === false) {
            foods[index].cooked = true;
            cookedFood.push(foods[index]);
        }    
    
    }
    
};
grill();
console.log(cookedFood)


// OVERLYEXCITED
/*function addExcitement () {
    console.log("Hello World!")
}
addExcitement(); */


// STACKINGWORDS
// Create an array that contains the words in the sentence
let sentence = ["The","walrus","danced","through","the","trees",
"in","the","light","of","the","moon"];
/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
function addExcitement (theWordArray) {
    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {
        if ((i+1)%3===0) {
            buildMeUp += `${theWordArray[i]}!`
        } else {
        // Concatenate the new word onto buildMeUp
        buildMeUp += `${theWordArray[i] }` }
        console.log(buildMeUp)
        // Print buildMeUp to the console  
    }
}
// Invoke the function and pass in the array
addExcitement(sentence)


// SOMEWORDSAREAMOREEXCITINGTHANOTHERS/FUNCTIONARGUMENTS
function addExcitement1 (theWordArray, punctuation) {

    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {
        if ((i+1)%3===0) {
            buildMeUp += `${theWordArray[i]}${punctuation}`
        } else {
        // Concatenate the new word onto buildMeUp
        buildMeUp += `${theWordArray[i] }` }
        console.log(buildMeUp)
        // Print buildMeUp to the console   
    }
}
// Invoke the function and pass in the array
addExcitement1(sentence, "?")


// MULTIPLEPUNCTUATION
// Add a new argument to the function so that a developer can 
// specify how many times the special character should be added.

// I want to use a 4 asterisks
addExcitement(sentence, "*", 4)
// Example output:
// The
// The walrus
// The walrus danced****
// The walrus danced**** through
// The walrus danced**** through the
// The walrus danced**** through the trees****
// The walrus danced**** through the trees**** in
// etc..

// // ARROWFUNCTIONS
// Watch the video ("https://www.youtube.com/watch?v=_pfXEv9cFGE") 
// about arrow functions, and see if you can rewrite addExcitement 
// using that syntax.



