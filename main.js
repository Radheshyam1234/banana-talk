var translateBtn = document.querySelector("#button");
var txtInput = document.querySelector("#txt-area");
var outputDiv = document.querySelector("#output");



var baseURL = "https://api.funtranslations.com/translate/minion.json" 


function getTranslationURL(input) {
    return baseURL + "?" + "text=" + input
}




function clickHandler() {
    var inputText = txtInput.value;

   
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(result => {
            var translatedText = result.contents.translated;
            outputDiv.innerText = translatedText; 
           })
        .catch(errorHandler)
};

function errorHandler(error){
    console.log(error)
    alert("something wrong in the server.Try again sometime")
}
translateBtn.addEventListener("click", clickHandler)