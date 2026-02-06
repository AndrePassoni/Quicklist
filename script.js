const listaContainer = document.querySelector('.checkbox-wrapper')
const itemLista = document.querySelectorAll('.checkbox-inner')
const form = document.querySelector('form')
const input = document.getElementById('add-item')
const deleteItem = document.querySelectorAll('.delete-item')
const delAlert = document.querySelector('.del-alert')
const removeAlert = document.querySelector('.remove-alert')
let timeoutId

listaContainer.addEventListener('click', (event) => {
    event.preventDefault()

    const itemClicado = event.target.closest('.checkbox-inner')

    if (!itemClicado) {
        return
    }

    if (event.target.closest('a')) {
        itemClicado.remove(itemClicado)

        clearTimeout(timeoutId)

        delAlert.classList.remove("del-alert")

        timeoutId = setTimeout(() => {
            delAlert.classList.add("del-alert")
        }, 3000)
    }

    const tagClicada = event.target.tagName;
    if (tagClicada === 'INPUT' || tagClicada === 'LABEL') {
        return
    }

    const input = itemClicado.querySelector('input')
    if(input) {
        input.checked = !input.checked
    }
    
    if (input.checked) {
        itemClicado.style.textDecorationLine = "line-through"
        itemClicado.style.opacity = "0.7"
    }

    else {
        itemClicado.style.textDecorationLine = "none"
        itemClicado.style.opacity = "1"
    }
})

form.onsubmit = (event) => {
    event.preventDefault()

    if (input.value == "") {
        alert("Insira o nome do item para adicioná-lo")
    }

    else {
        const newInner = document.createElement("div")
        newInner.classList.add("checkbox-inner")
        const newImg = document.createElement("div")
        newImg.classList.add("checkbox-img")
        const newCheckbox = document.createElement("input")
        newCheckbox.type = "checkbox"
        const newLabel = document.createElement("label")
        newLabel.setAttribute("for", "item")
        const newA = document.createElement("a")
        newA.setAttribute('href', "")
        newA.classList.add("delete-item")
        const newTrash = document.createElement("img")
        newTrash.setAttribute("src", "./assets/icons/Frame.svg")

        listaContainer.append(newInner)
        newInner.append(newImg, newCheckbox, newLabel, newA, newTrash)
        newA.append(newTrash)
        newLabel.textContent = input.value

        input.value = ""
    }
}

removeAlert.addEventListener('click', (event) => {
    event.preventDefault()
    delAlert.classList.toggle("del-alert")
})