// JavaScript Document


//1.) Add a new paragraph to the page

let pNew = document.createElement(`p`);
let pText = document.createTextNode("This is text")
pNew.appendChild(pText);

let main = document.querySelector("main");
main.appendChild(pNew);

//2.) Remove the class attribute on the header element

let header = document.querySelector("header");
header.removeAttribute("class");

//3.) Change the src attribute in the image element to 'cat2.jpg'

let image = document.querySelector("img");
image.setAttribute("src", "assets/cat2.jpg");

//4.) Remove the footer element

let footer = document.querySelector("footer");
footer.remove();

//5.) Add an h3 into the header

let h3 = document.createElement(`h3`);
let hText = document.createTextNode("This is h3");
h3.appendChild(hText);

header.appendChild(h3);
