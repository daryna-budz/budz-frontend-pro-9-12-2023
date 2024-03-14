const lengthInput = document.getElementById("arrLength");
let container = document.getElementById("container");
let array = [];

function fillArray(){
    const length = parseInt(lengthInput.value);
    for(let i=0;i<length;i++){
        array.push(prompt("Enter element :"));
    }
    container.innerHTML = `Your array is: [${array}]`;
    const sortButton = document.getElementById("sortButton");
    sortButton.style.display = "block";
}

function sortArray(){
    let sortedArray = array.sort();
    let sortedDiv = document.getElementById("sortedDiv");
    sortedDiv.innerHTML = `Your sorted array is: [${sortedArray}]`;
    const delButton = document.getElementById("delButton");
    delButton.style.display = "block";
}

function delElements(){
    if(array.length < 4){
        alert("Sorry, your array is too short,please enter more values!");
    }else{
        let deletedElements = array.splice(1, 3);
        let deletedDiv = document.getElementById("deletedDiv");
        deletedDiv.innerHTML = `Your array with deleted elements 2 to 4 is: [${array}]`;
    }
}




