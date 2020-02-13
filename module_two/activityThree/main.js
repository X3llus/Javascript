// JavaScript Document

//1.)  find two different ways to target the first section element on the page. Use console.log to check. Put a comment with the word faster by the method that targets the element more quickly and efficently.

let sectionOne = document.querySelector("section");
console.log(sectionOne);

sectionOne = document.getElementsByTagName("section");
console.log(sectionOne[0]);

//2.)  Target the footer element. Use console.log to check

let footer = document.querySelector("footer");
console.log(footer);

//3.)  Target all elements with the class or orange and change the text in these elements orange

let orange = document.getElementsByClassName("orange");
console.log(orange);

for (let i = 0; i < orange.length; i++) {
  orange[i].style.color = "orange";
}

//4.) Target all section elements and console log

let sections = document.getElementsByTagName("section");
console.log(sections);

//5.) Find two ways to target the second section element

sections = document.getElementsByTagName("section");
console.log(sections[1]);
sections = document.querySelectorAll("section");
console.log(sections[1]);
