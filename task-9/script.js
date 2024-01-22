let hours = +prompt("Enter hours :");

function hoursToSeconds(){
    let seconds = hours*3600;
    alert(`${hours} hours equals ${seconds} seconds`);
}

hoursToSeconds();