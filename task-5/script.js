const inputTxt = document.getElementById("inputTxt");
const inputDiv = document.getElementById("divTxt");

inputTxt.addEventListener('focus',function(){
    inputDiv.style.display = 'block';
})

inputTxt.addEventListener('blur',function(){
    inputDiv.style.display = 'none';
})