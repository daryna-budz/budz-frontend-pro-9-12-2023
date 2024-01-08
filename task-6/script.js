const choice = +prompt("Choose function (1-12) :\n 1.Вивести на сторінку в один рядок через кому числа від 10 до 20.\n2.Вивести квадрати чисел від 10 до 20.\n3.Вивести таблицю множення на 7.\n4.Знайти суму всіх цілих чисел від 1 до 15.\n5.Знайти добуток усіх цілих чисел від 15 до 35.\n6.Знайти середнє арифметичне всіх цілих чисел від 1 до 500.\n7.Вивести суму лише парних чисел в діапазоні від 30 до 80.\n8.Вивести всі числа в діапазоні від 100 до 200 кратні 3.\n9.Дано натуральне число. Знайти та вивести на сторінку всі його дільники.\n10.Визначити кількість його парних дільників.\n11.Знайти суму його парних дільників.\n12.Надрукувати повну таблицю множення від 1 до 10.");
let printResult = document.getElementById("output");

function printNumbers(){
    let arr = [];
    for(let i =10;i<=20;i++){
        arr.push(i);
    }
    printResult.textContent = arr;
}

function printSquares(){
    let arr = [];
    for(let i =10;i<=20;i++){
        arr.push(Math.pow(i,2));
    }
    printResult.textContent = arr;
}

function sevenMultiply(){
    let arr = [];
    for(let i =1;i<=10;i++){
        arr.push(`7 * ${i} = ${7*i}`);
    }
    printResult.innerHTML = arr.join("<br>");
}

function sumNumbers(){
    let sum = 0;
    for(let i =1;i<=15;i++){
        if (i % 1 === 0 ){
         sum +=i;
        }
    }
    printResult.textContent = `Сума всіх цілих чисел від 1 до 15 : ${sum}`;
}

function multNumbers(){
    let mult = 1;
    for(let i =15;i<=35;i++){
        if (i % 1 === 0 ){
         mult*=i;
        }
    }
    printResult.textContent = `Добуток всіх цілих чисел від 15 до 35 : ${mult}`;
}

function arithmMean(){
    let sum = 0;
    for(let i =1;i<=500;i++){
        sum+=i;
    }
    printResult.textContent = `Середнє арифметичне всіх цілих чисел від 1 до 500 : ${sum/500}`;
}

function sumEven(){
    let sum = 0;
    for(let i =30;i<=80;i++){
        if(i%2===0){
            sum+=i;
        }
    }
    printResult.textContent = `Сума лише парних чисел в діапазоні від 30 до 80: ${sum}`;
}

function isMultiple(){
    let arr = [];
    for(let i =100;i<=200;i++){
        if(i%3===0){
            arr.push(i);
        }
    }
    printResult.textContent = `Всі числа в діапазоні від 100 до 200 кратні 3 : ${arr}`;
}

function allDivision(){
    number = +prompt("Enter the number :");
    let arr = [];
    for(let i =1;i<=number;i++){
        if(number%i===0){
            arr.push(i);
        }
    }
    printResult.textContent = `Дільники числа ${number} : ${arr}`;
}

function divisionEven(){
    number = +prompt("Enter the number :");
    let count =0;
    let arr = [];
    for(let i =1;i<=number;i++){
        if(number%i===0){
            if (i%2===0){
                count++;
            }
            arr.push(i);
        }
    }
    printResult.innerHTML = `Дільники числа ${number} : ${arr} <br> Кількість його парних дільників : ${count}`;
}

function divisionSum(){
    number = +prompt("Enter the number :");
    let sum = 0;
    let arr = [];
    for(let i =1;i<=number;i++){
        if(number%i===0){
            if (i%2===0){
                sum+=i;
            }
            arr.push(i);
        }
    }
    printResult.innerHTML = `Дільники числа ${number} : ${arr}  <br> Сума його парних дільників : ${sum}`;
}

function multiplyFull(){
    let arr = [];
    for(let i =1;i<=10;i++){
        for(let j=1;j<=10;j++)
        arr.push(`${i} * ${j} = ${i*j}`);
    }
    printResult.innerHTML = arr.join("<br>");
}

switch(choice){
    case 1:
        printNumbers();
        break;
    case 2:
        printSquares();
        break;
    case 3:
        sevenMultiply();
        break;
    case 4:
        sumNumbers();
        break;
    case 5:
        multNumbers();
        break;
    case 6:
        arithmMean();
        break;
    case 7:
        sumEven();
        break;    
    case 8:
        isMultiple();
        break;
    case 9:
        allDivision();
        break;
    case 10:
        divisionEven();
        break;
    case 11:
        divisionSum();
        break;
    case 12:
        multiplyFull();
        break;
}