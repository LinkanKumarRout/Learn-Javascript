// Unlimited Colors

// generate a random color

const randomColor = function(){
    const hex = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    return color;
}

let intervalId;

let startChangingColor = function(){
    if(intervalId){
        intervalId = setInterval(changingColor, 1000);
    }
    
    function changingColor(){
        document.body.style.backgroundColor = randomColor();
    }
}

let stopChangingColor = function(){
    clearInterval(intervalId);
    intervalId = null;
}

document.getElementById('start').addEventListener('click', startChangingColor)
document.getElementById('stop').addEventListener('click', stopChangingColor);