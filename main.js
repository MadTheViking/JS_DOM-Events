console.log("Script attached");
/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/
let node1 = document.getElementById("node1")
node1.textContent = "This node was created using the createElement(\"node1\") method"

let node2 = document.getElementsByClassName ("node2")[0];
node2.textContent = "I used getElementsByClassName(\"node2\") method to access this";

let h3s = document.getElementsByTagName("h3");
for (let h3 of h3s) {
    h3.textContent = "I used the getElementByTageName(\"h3\")method to access all of these";
}

/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

let p = document.createElement("p")
p.textContent = "This node was created using the createdElement() method";

let parent2 = document.querySelector("#parent")
parent2.appendChild(p);

let link = document.createElement("a");
link.textContent = "Google Search";
link.href = "http://google.com";

parent2.insertBefore(link, p);
/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/
let child = document.createElement("p")
child.textContent = "New Child node"


let parent3 = document.querySelector("#exercise-container3")
let replacedChild = document.querySelector("#N1")

parent3.replaceChild(child,replacedChild)

setTimeout(() => {
    parent3.removeChild(child)
}, 6000);

/*----------- Exercise #4: ANIMATIONS ----------- */


let list = [ "apples", "bananas", "carrots", "dragon fruit", "eggplant", "fish", "grapes", "honey", "ice bag", "juice (any kind)" ];

let u1 = document.createElement(ul)

for(let item of list){
    let li = document.createElement(li);
    li.textContent = items;
    ul.appendchild(li);
}

let container4 = document.querySelector("#container")
container4.appendChild(ul)
/*----------- Exercise #5: DOM EVENTS --------------*/

// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message
// -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
// This div should be a 'modal' that covers the main content on the screen
// BONUS: The modal popup should be able to be closed. Refactor for this functionality

function show(event) {
    let div = document.createElement("div");
    div.textContent = "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user";
    div.classList.add("modal")
    document.body.appendChild(div);
}

let btn = document.querySelector("#btn")

btn.addEventListener("click", show)