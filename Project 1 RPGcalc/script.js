const btnAdd = document.querySelectorAll('.btnAddDice')
const slotLabel = document.querySelectorAll('.slotLabel')
const btnAddFixValue = document.getElementById('addFixValue')
const btnSubmit = document.getElementById('submit')

window.addEventListener('load', load);
btnAddFixValue.addEventListener('click', addFixValue);
btnSubmit.addEventListener('click', showResults);
// btnAdd[0].addEventListener('click', dadDice);
// btnAdd[1].addEventListener('click', addDice);
// btnAdd[2].addEventListener('click', addDice);
// btnAdd[3].addEventListener('click', addDice);
// btnAdd[4].addEventListener('click', addDice);
// btnAdd[5].addEventListener('click', addDice);

function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var soma= [];

function load(){
    const slots = document.querySelectorAll('.slot')
    // const slotLabel = document.querySelectorAll('.slotLabel')

    for(let i=0; i<10; i++){
        slots[i].setAttribute('style', 'visibility: hidden')
    }
}

function addDice(label= String){
    const slotSelect = document.querySelectorAll('.slot')
    const slotLabel = document.querySelectorAll('.slotLabel')
    const setDice = {
        'd4': {value: random(1, 4)},
        'd6': {value: random(1, 6)},
        'd8': {value: random(1, 8)},
        'd10': {value: random(1, 10)},
        'd20': {value: random(1, 20)},
        'd100': {value: random(1, 100)},
    }

    for(let i=0; i<10; i++){
        if(slotSelect[i].getAttribute('style') == 'visibility: hidden'){
            soma[i] = setDice[label].value
            slotLabel[i].innerHTML = `${label.toUpperCase()}`
            slotSelect[i].setAttribute('style', 'visibility: visible')
            break;
        }
    }
    console.log(soma);
}

function addFixValue(){
    const slotSelect = document.querySelectorAll('.slot')
    const slotLabel = document.querySelectorAll('.slotLabel')
    const newValue = document.getElementById('newValue').value
    console.log(newValue);
    for(let i=0; i<10; i++){
        if(slotSelect[i].getAttribute('style') == 'visibility: hidden'){
            soma[i] = newValue;
            slotLabel[i].innerHTML = `${newValue}`
            slotSelect[i].setAttribute('style', 'visibility: visible')
            break;
        }
    }
}

function showResults(){
    const resultLabel = document.getElementById('resultLabel')
    var show = '';
    var total = 0;
    
    for(let i=0; i < soma.length; i++){

        if(i < soma.length - 1){ show += (`${soma[i]} + `) }
        else{ show += (`${soma[i]} = `) }

        total += Number(soma[i])
    }
    show += String(total)
    console.log(show);
    resultLabel.innerHTML = show;
}