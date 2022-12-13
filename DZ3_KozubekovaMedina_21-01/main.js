const minimum = function (a, b) {
    if (isNaN(a)|| isNaN(b)) console.log('Вы должны ввести числа!')
    else {
        if (a > b) console.log('Меньшее число = ', b);
        else console.log('Меньшее число = ', a)
    }
}
let n1 = Number(prompt('Введите первое число!'))
let n2 = Number(prompt('Введите второе число!'))
minimum(n1,n2)



let strLen = function (str) {
    console.log  ('Длина вашего слова =', str.length)
}
let str = prompt('Введите ваше слово!')
strLen(str)



let a = Number(prompt('Введите первое число!'))
let oper = prompt('Введите математическую операцию: +, -, *, /')
let b = Number(prompt('Введите второе число!'))
let rezult = 'Error'
const calc = (a, b, oper, rezult) => {
  switch (oper) {
      case '+':
          rezult = a+b
          break;
      case '-':
          rezult = a-b
          break;
      case '*':
          rezult = a*b
          break;
      case '/':
          if (b === 0) {
              console.log('Нельзя делить на 0')
              break;
          }
          rezult = a/b
          break;
      default:
          console.log('ERROR!')
          break;
  }
  return console.log('Результат:', a, oper, b, '=', rezult)
}
if (isNaN(a)||isNaN(b)) {
    alert('Вы должны вести числа!')
    console.log('Надо было вести числа!')
}
else calc(a, b, oper, rezult)