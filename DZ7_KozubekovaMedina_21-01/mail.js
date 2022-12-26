class Cars {
    static type = 'CARS'

    constructor(options) {
        this.model = options.model
        this.color = options.color
        this.wheels = options.wheels
    }

    start() {
        console.log('Машина завелась!')
    }
}

class Toyota extends Cars {
    static type = 'TOYOTA'
    constructor(options) {
        super(options)
        this.transmission = options.transmission
    }
    start() {
        console.log('Toyota - машина завелась!')
    }
}class Bmw extends Cars {
    static type = 'BMW'
    constructor(options) {
        super(options)
        this.volume = options.volume
    }
    start() {
        console.log('BMW - машина завелась!')
    }
}class Mercedes extends Cars {
    static type = 'MERCEDES'
    constructor(options) {
        super(options)
        this.year = options.year
    }
    start() {
        console.log('Mercedes - машина завелась!')
    }
}
const toyota = new Toyota({
    model: 'Camry',
    color: 'black',
    wheels: '4',
    transmission: 'Automatic'
})
console.log('\n\t\t Toyota\n',toyota, '\n Toyota type =', Toyota.type);
toyota.start()

const bmw = new Bmw({
    model: 'M1',
    color: 'white',
    wheels: '4',
    volume: '3'
})
console.log('\n\t\t Bmw\n', bmw, '\n Bmw type =', Bmw.type);
bmw.start()

const mercedes = new Mercedes({
    model: 'AMG GT',
    color: 'black',
    wheels: '4',
    year: '2015'
})
console.log('\n\t\t Mercedes\n', mercedes, '\n Mercedes type =', Mercedes.type);
mercedes.start()


//ДОП ДЗ
class Light {
    constructor(selector) {
        this.$element = document.getElementById(selector)
    }
}

class Circle extends Light {
    constructor(options) {
        super(options.selector)
        this.$element.style.backgroundColor = options.color
        this.$element.textContent = options.text
    }
}

let color = prompt('Введите цвет светофора:'). toLowerCase();
if (color === 'красный') {
    const red = new Circle({
        selector: 'red',
        color: 'red',
        text: 'stop'
    })
}
else if (color === 'желтый'|| color === 'жёлтый'){
    const yellow = new Circle({
        selector: 'yellow',
        color: 'yellow',
        text: 'wait'
    })
}
else if (color === 'зеленый'|| color === 'зеленный'|| color === 'зелёный'|| color === 'зелённый'){
    const green = new Circle({
        selector: 'green',
        color: 'green',
        text: 'go'
    })
}
else alert('Вы должны ввести цвет светофора: красный, желтый или зеленый')