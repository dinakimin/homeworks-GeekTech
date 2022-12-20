const input = document.getElementById('input')
const createButton = document.getElementById('crete_todo')
const todoList = document.getElementById('todo_list')

const createTodo = function () {
    if (input.value.trim() === '') {
        return false
    } else {
        const div = document.createElement('div')
        const text = document.createElement('h3')
        const buttons = document.createElement('div')
        buttons.setAttribute('class', 'buttons')
        const edit = document.createElement('button')
        const del = document.createElement('button')
        edit.setAttribute('class', 'edit')
        del.setAttribute('class', 'delete')
        edit.onclick = (e) => {
            let str = prompt(`Edit Text: ${text.innerText}`).trim()
            if (str !== "") text.innerText = str;
        }
        del.onclick = (e) => div.remove()
        edit.innerText = 'edit'
        del.innerText = 'delete'
        div.setAttribute('class', 'block_text')
        text.setAttribute('class', 'text')
        text.innerText = input.value.trim()
        div.append(text,buttons)
        buttons.append(edit,del)
        todoList.append(div)
    }
    input.value = ''
}

createButton.addEventListener('click', createTodo)
input.addEventListener('keydown', (e) => e.keyCode === 13 ? createTodo() : false)