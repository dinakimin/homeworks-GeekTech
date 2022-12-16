const plus = document.querySelector('.plus')
const minus = document.querySelector('.minus')
const rez = document.getElementById('count')
let m = 0
plus.onclick = (e) =>{
    m++;
    rez.innerText = m
    rez.style.color ='green'
}
minus.onclick = (e) =>{
    if (m>0){
        m--;
        rez.innerText = m
        rez.style.color ='red'
    }
}



const posX = document.getElementById('posX')
const posY = document.getElementById('posY')
const block = document.querySelector('.cursor')
block.onmousemove =  e => {
    posX.innerHTML = e.screenX
    posY.innerHTML = e.screenY
}



let color = prompt('Введите цвет светофора:').toLowerCase();
const red = document.getElementById('red')
const yellow = document.getElementById('yellow')
const green = document.getElementById('green')
if (color === 'красный'){
    red.style.backgroundColor = 'red'
    red.innerText = 'STOP!'
}
else if (color === 'жёлтый' || color === 'желтый' ){
    yellow.style.backgroundColor = 'yellow'
    yellow.innerText = 'WAIT!'
}
else if (color === 'зелёный' || color === 'зеленый' || color === 'зелённый'){
    green.style.backgroundColor = 'green'
    green.innerText = 'G0!'
}
else alert('Вы должны ввести цвет светофора: красный, желтый или зелёный')

