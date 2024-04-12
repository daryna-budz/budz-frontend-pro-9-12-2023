let array = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

let sumOfPositive = 0;
let numOfPositive = 0;

let minElem = Math.min(...array);
let maxElem = Math.max(...array);
let minElemIndex = array.indexOf(minElem);
let maxElemIndex = array.indexOf(maxElem);

let numOfNegative = 0;

let numOfPosEven = 0;
let numOfPosOdd = 0;

let sumOfPosEven = 0;
let sumOfPosOdd = 0;

let multiplyPos = 1;

for (let i = 0;i < array.length; i++){
    if(array[i]>=0){
        sumOfPositive+=array[i];
        numOfPositive+=1;
    }
    if(array[i]<0){
        numOfNegative+=1;
    }
    if(array[i]>=0 && array[i]%2 != 0){
        numOfPosOdd+=1;
        sumOfPosOdd+=array[i];
    }
    if(array[i]>=0 && array[i]%2 == 0){
        numOfPosEven+=1;
        sumOfPosEven+=array[i];
    }
    if(array[i]>0){
        multiplyPos*=array[i];
    }
}

array = array.map(element => (element === maxElem ? element : 0));

console.log("Сума позитивних елементів:", sumOfPositive);
console.log("Кількість позитивних елементів:", numOfPositive);
console.log("Мінімальний елемент:", minElem, "порядковий номер:", minElemIndex);
console.log("Максимальний елемент:", maxElem, "порядковий номер:", maxElemIndex);
console.log("Кількість негативних елементів:", numOfNegative);
console.log("Кількість непарних позитивних елементів:", numOfPosOdd);
console.log("Кількість парних позитивних елементів:", numOfPosEven);
console.log("Сума парних позитивних елементів:", sumOfPosEven);
console.log("Сума непарних позитивних елементів:", sumOfPosOdd);
console.log("Добуток позитивних елементів:", multiplyPos);
console.log("Обнулений масив:", array);