const listaContainer = document.querySelector('.checkbox-wrapper');
const itemLista = document.querySelectorAll('.checkbox-inner');
const form = document.querySelector('form')
const input = document.getElementById('add-item')
const deleteItem = document.querySelectorAll('.delete-item');
const delAlert = document.querySelector('.del-alert');

listaContainer.addEventListener('click', (event) => {
    event.preventDefault()

    const itemClicado = event.target.closest('.checkbox-inner');

    if (!itemClicado) {
        return;
    }

    if (event.target.closest('a')) {
        console.log('Clicou no lixo. Ação ignorada.');
        return;
    }

    const tagClicada = event.target.tagName;
    if (tagClicada === 'INPUT' || tagClicada === 'LABEL') {
        return;
    }

    const input = itemClicado.querySelector('input');
    if(input) {
        input.checked = !input.checked;
    }
});

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
    }
}



/*
<div class="checkbox-inner">
    <div class="checkbox-img"></div>
    <input type="checkbox" name="item" id="item1">
    <label for="item1">Pão de forma</label>
    <a href="" class="delete-item">
        <img src="./assets/icons/Frame.svg" alt="">
    </a>
</div>
*/