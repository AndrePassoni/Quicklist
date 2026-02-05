const listaItens = document.querySelectorAll('.checkbox-inner');

listaItens.forEach((item) => {
    
    item.addEventListener('click', (evento) => {
        
        const botaoDeletar = item.querySelector('a');
        if (botaoDeletar && botaoDeletar.contains(evento.target)) {
            console.log('Clicou no lixo. Ação ignorada.');
            return; 
        }

        const tagClicada = evento.target.tagName;
        if (tagClicada === 'INPUT' || tagClicada === 'LABEL') {
            return;
        }

        const input = item.querySelector('input');
        
        if(input) {
            input.checked = !input.checked;
        }
    });
});