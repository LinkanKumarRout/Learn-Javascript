// color changer Script

const buttons = document.querySelectorAll(".button");
const body = document.querySelector('body');

buttons.forEach(function(button){
    button.addEventListener('click', function(event){
        if(event.target.id === 'violet'){
            body.style.backgroundColor = event.target.id;
        }else if(event.target.id === 'indigo'){
            body.style.backgroundColor = event.target.id;
        }else if(event.target.id === 'blue'){
            body.style.backgroundColor = event.target.id;
        }else if(event.target.id === 'green'){
            body.style.backgroundColor = event.target.id;
        }else if(event.target.id === 'yellow'){
            body.style.backgroundColor = event.target.id;
        }else if(event.target.id === 'orange'){
            body.style.backgroundColor = event.target.id;
        }else if(event.target.id === 'red'){
            body.style.backgroundColor = event.target.id;
        }else if(event.target.id === 'white'){
            body.style.backgroundColor = event.target.id;
        }
    })
});