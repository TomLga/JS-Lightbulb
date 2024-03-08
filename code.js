let lightbulb = document.querySelector('.lightbulb');
let lightSwitch = document.querySelector('.lightSwitch')
let swig = document.querySelector('#swig')
let onBtn = document.querySelector('#onbtn');
let offbtn = document.querySelector("#offbtn")

document.addEventListener("DOMContentLoaded", function() {

    onBtn.addEventListener('click', function() {
        lightbulb.style.backgroundColor = "yellow"; 
        swig.style.display = "flex"
        console.log('on');
    });

    offbtn.addEventListener('click', function(){
        lightbulb.style.backgroundColor = "white"
        swig.style.display = "none"
        console.log("off")
    })
});
