let one = document.getElementById("one");
let two = document.getElementById("two");

function printLines(){
    let line1 = prompt("Введіть рядок :");
    let line2 = prompt("Введіть рядок :");
    let line3 = prompt("Введіть рядок :");
    let lines = line1+line2+line3;
    one.textContent = lines;
}

function fiveNums(){
    let num = prompt("Введіть число :");
    let arr = [];
    for(let i = 0;i<num.length;i++){
        arr.push(num[i]);
    }
    let newArr = arr.join('  ');
    two.textContent = newArr;
}

printLines();
fiveNums();
