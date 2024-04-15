const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey(length,arr){
    let keyArr = "";
    for(let i = 0;i<length;i++){
        keyArr+=(characters[Math.floor(Math.random() * characters.length)]);
    }
    return keyArr;
}


const key = generateKey(16, characters);
console.log(key);