function recursionPower(num,degree){
    if(degree == 0){
        return 1;
    }else if(degree < 0){
        return 1 / recursionPower(num, -degree);
    }else{
        return num * recursionPower(num, degree - 1);
    }
}


let num = 3;
let degree = -2;

let result = recursionPower(num,degree)
console.log(`${num} in ${degree} power = ${result}`);