
const domRef = document.querySelector("#dom")
const putInDom = () => {
const newEl = document.createElement("div");
const artEl = document.createElement("article")
const textInput = document.querySelector("#create").value;

artEl.innerText = textInput;
const buttonEl = document.createElement("button");
buttonEl.innerText = "Delete Me";
buttonEl.addEventListener("click", () => {
    domRef.removeChild(newEl);
})

newEl.appendChild(artEl);
newEl.appendChild(buttonEl);
domRef.appendChild(newEl);
console.log(textInput);
}

document.querySelector("#createButton").addEventListener("click", () => {
    putInDom();
})

