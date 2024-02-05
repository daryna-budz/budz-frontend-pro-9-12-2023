
//цикл 1
let arr1 = [];
for (let i = 20;i<=30;i+=0.5){
    arr1.push(i);
}
document.write("1. Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….) : " + arr1.join("  ") + "<br><br>");


//цикл 2
let arr2 = [];
for (let i = 10;i<=100;i+=10){
    arr2.push(i*27);
}
document.write("2. Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів : " + arr2.join(", ") + "<br><br>");


//цикл 3
function squareNum(){
    let num = +prompt("Enter the number for task 3 : ");
    let arr3 = [];
    for (let i = 1;i<=100;i++){
       if (i**2 <= num){
          arr3.push(i);
       }
    }
    document.write("3. Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N : " + arr3.join("  ") + "<br><br>");
}
squareNum();


//цикл 4
function isSimple(){
    let count = 0;
    let num = +prompt("Enter the number for task 4 : ");
    for(let i=1;i<=num;i++){
        if(num%i == 0){
            count++;
        }
    }
    if(count > 2){
        document.write(`4. Number ${num} is not simple` +"<br><br>");
    }
    else{
        document.write(`4. Number ${num} is simple` + "<br><br>");
    }
}
 isSimple();


//цикл 5
function multiply(){
    let num = +prompt("Enter the number for task 5 : ");
    let result = false;
    for(let i=1;i<=num;i*=3){
        if(i===num){
            result = true;
            break;
        }
    }
    if (result){
        document.write(`5. Number ${num} can be obtained by powering number 3` + "<br><br>");
    }
    else{
        document.write(`5. Number ${num} can not be obtained by powering number 3` + "<br><br>");
    }
}
multiply();