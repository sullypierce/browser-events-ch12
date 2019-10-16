
// const flightHandlerFunction = () => {


// }
// const xrayHandlerFunction = () => {

//     document.querySelector("#xray").className = "power enabled"
// }
// const mindreadingHandlerFunction = (event) => {

//     document.querySelector("#mindreading").className = "power enabled"
//     console.log(event);
// }

const activateFunction = (type) => {
    ;
    if (type === "flight") {
        document.querySelector("#flight").className = "power enabled";
        console.log(type);
    } ;
    if (type === "mindreading") {
        document.querySelector("#mindreading").className = "power enabled";
        console.log(type);
    } ;
    if (type === "xray") {
        document.querySelector("#xray").className = "power enabled"
    } ;
    if (type === "all") {
        document.querySelector("#flight").className = "power enabled";
        document.querySelector("#mindreading").className = "power enabled";
        document.querySelector("#xray").className = "power enabled";
    };
}
const flightButton = document.querySelector("#activate-flight");
flightButton.addEventListener("click", (event) => {
    activateFunction("flight");
    console.log(event);
});

document.querySelector("#activate-mindreading").addEventListener("click", () =>{activateFunction("mindreading")});

document.querySelector("#activate-xray").addEventListener("click", () => {activateFunction("xray")});

document.querySelector("#activate-all").addEventListener("click", () => {
    activateFunction("all")
    // const splitId = event.target.id.split("-");
    // console.log(splitId);
})

const unHandlerFunction = () => {

    const powers = document.querySelectorAll(".power");
    powers.forEach(power => {
        power.className = "power disabled"
    });
}

document.querySelector("#deactivate-all").addEventListener("click", unHandlerFunction);


