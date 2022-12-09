var arr = []
for (let i=0; i<=10; i++) {
    arr.push(i)
}
console.log(arr)
for (let i=20; i>=0; i--) {
    console.log(i)
}
var color = prompt('Choice color! (red, yellow, green').toLowerCase()
switch (color) {
    case 'red':
        alert('STOP!')
        break
    case 'yellow':
        alert('Wait!')
        break
    case 'green':
        alert('Go!')
        break
    default:
        alert('Choice color! (red, yellow, green')
        break
}