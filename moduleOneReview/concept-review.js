// JavaScript Document

//Concept Review

/* CHALLENGE ONE
declare and intialize a variable with your first and last name
declare a variable called fullName that combines the info stored in the variables that hold your first and last name
using a built-in browser function, change the string stored in fullName to uppercase
update the h1 in the HTML to display your full name
*/

var fName = "Braden";
var lName = "Coates";
var fullName = fName + " " + lName;
let upperName = fullName.toUpperCase();

let h1 = document.querySelector('h1');
h1.textContent = upperName;

/*  CHALLENGE TWO
Display 'your name is longer than 8 characters' in the console if your full name is longer than 8 characters.
*/

if (fullName.length >= 8) {
  console.log("Longer than 8 characters");
} else {
  console.log("Shorter than 8 characters");
}

/* CHALLENGE THREE
Here is a list of cat names: Fluffy, Dr.Stinky, George, Batman, Stevie. Turn this list into an array using a built-in browser method. Add a new name to the cat name array, then loop through each name and display in the console.
*/

let dumbCats = "Fluffy, Dr.Stinky, George, Batman, Stevie";
// let cats = ["Fluffy", "Dr.Stinky", "George", "Batman", "Stevie"];
let cats = dumbCats.split(", ");

for (let i = 0; i < cats.length; i++) {
  console.log(cats[i]);
}
