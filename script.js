/* document.getElementById('btn').addEventListener("click", func);
function func(){
    alert("Hello There!!")
} */


/* ADDING MANY EVENT LISTENERS */
const b = document.getElementById('btn');
b.addEventListener("click", func1)
b.addEventListener("click", otherFunc);
function func1(){
    alert('Thanks For clicking Me')
};

function otherFunc(){
    alert("Congrats!! You can Proceed to Next")
}


document.getElementById("demo").innerHTML = "Hello This Is innerHtml ";
// FInding HTML Elements 
//--document.gteElementByid(id)  
const element = document.getElementById("id")

//--document.getElementByTagName(name) 
const element1  = document.getElementsByTagName("p");

        /* Example that finds the elements with id="main" and the finds all <p> inside main */
        const x = document.getElementById('main');
        const y = x.getElementsByTagName('p');
//--document.getElementByClassName(name)
                /* All elements with same class name */

//Changing Html Elements
/* 1. element.innerHTML = new html content  -Change the inner Html of an element */
/*  element.attribute = new value -Change the Attribute value of an Html element*/
/* element.style.property = new style -Change the Style of an HTML element */

/* ADDING AND DELETING ELEMENTS */
/* document.createElement(element)--	Create an HTML element
document.removeChild(element)--	Remove an HTML element
document.appendChild(element)--	Add an HTML element
document.replaceChild(new, old)--	Replace an HTML element
document.write(text)-- Write into the HTML output stream */

/* DOM EVENTS */
