//written by Ifex
const text = document.querySelector('.num');
const load = document.querySelector('.load');
const increase = document.querySelector('.increase');
const inputBox = document.querySelector('#input-box');
let originalInput;


load.style.strokeDasharray = '628';
load.style.strokeDashoffset = '628';
inputBox.value = '';

inputBox.oninput = function(e) {    
    originalInput = Number(e.target.value);
    if(originalInput >= 0 && originalInput <= 100) {
        load.style.strokeDashoffset = `${628 - ((originalInput/100) * 628)}`;
        e.target.classList.remove('add-error')
        console.log('New Offset is ' + load.style.strokeDashoffset);
    } else {
        load.style.strokeDashoffset = '628';
        e.target.classList.add('add-error');
    }
}
