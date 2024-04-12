const array = [1, 2, 3, 4, 5, 6, 7];

function removeElement(array, num){
    if(array.includes(num)){
        let index = array.indexOf(num);
        array.splice(index,1);
    }else{
        console.log("No such element in array(");
    }
}




removeElement(array, 8 );
console.log(array);