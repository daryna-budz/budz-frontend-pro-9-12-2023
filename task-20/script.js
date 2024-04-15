const array = [1,6,8,5.25,"3","usijf",true];
let firstNum = +prompt("Enter first number");
let znak = prompt("Enter operation");
let secondNum = +prompt("Enter second number");
let lengthArray = prompt("Enter array's length");

function averageArray(array){
    let sum = 0;
    let count = 0;
    for (let i = 0;i<array.length;i++){
        if(typeof(array[i])=="number"){
            sum+=array[i];
            count++;
        }
    }
    console.log(`Середнє арифметичне лише числових елементів даного масиву: ${sum/count}`);
}

function doMath(x,znak,y){
    switch(znak){
        case "+":
            console.log(`${x} + ${y} = ${x+y}`);
            break;
        case "-":
            console.log(`${x} - ${y} = ${x-y}`);
            break;
        case "*":
            console.log(`${x} * ${y} = ${x*y}`);
            break;
        case "/":
            console.log(`${x} / ${y} = ${x/y}`);
            break;
        case "%":
            console.log(`${x} % ${y} = ${x%y}`);
            break;
        case "^":
            console.log(`${x} ^ ${y} = ${x**y}`);
            break;
    }
}

function matrix(lengthArray){
    let mainArray = [];
    for(let i = 0;i<lengthArray;i++){
        mainArray.push([prompt(`Enter data for ${i} array` )]);
    }
    console.log(mainArray)
}

function removeElements(string,array){
    let newStr = "";
    for(let i =0;i<string.length;i++){
        if (array.indexOf(string[i]) === -1){
            newStr+=string[i];
        }
    }
    console.log(newStr)
}


averageArray(array);
doMath(firstNum,znak,secondNum);
matrix(lengthArray);
removeElements("hello world", ['l', 'd']);