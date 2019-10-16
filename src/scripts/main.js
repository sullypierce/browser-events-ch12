console.log("Hey fran");

const inputRef = document.querySelector("#message");

const showText = (event) => {
    document.querySelector(".artOne").innerText = event.target.value;
    document.querySelector(".artTwo").innerHTML = event.target.value;
}

inputRef.addEventListener("keyup", showText)