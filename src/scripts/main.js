
const flightHandlerFunction = () => {
    
    document.querySelector("#flight").className = "power enabled"
}
const xrayHandlerFunction = () => {
    
    document.querySelector("#xray").className = "power enabled"
}
const mindreadingHandlerFunction = () => {
    
    document.querySelector("#mindreading").className = "power enabled"
}

document.querySelector("#activate-flight").addEventListener("click", flightHandlerFunction);

document.querySelector("#activate-mindreading").addEventListener("click", mindreadingHandlerFunction);

document.querySelector("#activate-xray").addEventListener("click", xrayHandlerFunction);

document.querySelector("#activate-all").addEventListener("click", () => {
    flightHandlerFunction();
    mindreadingHandlerFunction();
    xrayHandlerFunction();
});

const unHandlerFunction = () => {
    
   const powers = document.querySelectorAll(".power");
   powers.forEach(power => {
       power.className = "power disabled"
   });
}

document.querySelector("#deactivate-all").addEventListener("click", unHandlerFunction);

