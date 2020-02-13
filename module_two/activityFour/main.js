// JavaScript Document


//1.) Using ol as your starting element, target the first li element

let ol = document.querySelector("ol");
let liFirst = ol.firstElementChild;
console.log(liFirst);

//2.) using main as your starting element, what is the last child? console.log to check it out

let main = document.querySelector("main");
let lastChild = main.lastChild;
console.log(lastChild);

//3.) using html as your starting element, what is the last Element child? Console.log to check it out.

let html = document.querySelector("html");
let lastChildElement = html.lastElementChild;
console.log(lastChildElement);

//4.) using the second li element as your starting element, target the next li element and change the colour to purple.

let liSecond = ol.children[1];
let liNext = liSecond.nextElementSibling;
console.log(liNext);
