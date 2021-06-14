const botao = document.querySelector('#botao');

botao.addEventListener('click', function(){
    const nome = document.querySelector('#nome');

    const input = document.querySelector('#input');
    const inputValue = input.value;
    
    const nomeCenter = nome.innerHTML = inputValue
    nomeCenter.classList.add('.nome')
});