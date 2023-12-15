const year = prompt("Enter your birth year :");
const city = prompt("Enter your city :");
const sport = prompt("Enter your favorite sport :");
let msg1, msg2, msg3;

function checkYear(){
    if(year === null){
        msg1 = "It's a pity that you didn't enter your birth year:(";
    }else{
        msg1 = `You were born in ${year}`;
    }
}

function checkCity(){
    if(city === null){
        msg2 = "It's a pity that you didn't enter your city:("
    }else if(city.toLowerCase() === "kyiv" ){
        msg2 = "Wow,you live in the capital of Ukraine!";
    }else if(city.toLowerCase() === "washington"){
        msg2 = "Wow,you live in the capital of USA!";
    }else if(city.toLowerCase() === "london"){
        msg2 = "Wow,you live in the capital of UK!";
    }else{ 
        msg2 = `You live in ${city}`;
    }
}

function checkSport(){
    if(sport === null){
        msg3 = "It's a pity that you didn't enter your favorite sport:("
    }
    else if(sport.toLowerCase() === "tennis" ){
        msg3 = "Cool! You wonna be like Bobby Riggs?";
    }else if(sport.toLowerCase() === "boxing"){
        msg3 = "Cool! You wonna be like Mike Tyson?";
    }else if(sport.toLowerCase() === "basketball"){
        msg3 = "Cool! You wonna be like Michael Jordan?";
    }else{
        msg3 = "Cool! Hope you will make great results";
    }
}

checkYear();
checkCity();
checkSport();

alert(`${msg1} \n ${msg2} \n ${msg3}`)