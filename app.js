var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#text-input");
var outputDiv = document.querySelector("#output");
console.log(textInput)
function clickHandler(){
    outputDiv.innerText = "Hello!" + textInput.value;
};
btnTranslate.addEventListener("click", clickHandler)