function closureSum() {
    let sum = 0;
    return function(x) {
        sum += x;
        return sum;
    }
}

const sum = closureSum();
console.log(sum(3)); 
console.log(sum(5));  
console.log(sum(20)); 