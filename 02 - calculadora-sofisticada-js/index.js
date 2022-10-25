const botao = document.querySelectorAll('.botao')
const painel = document.querySelector('.resultado')
const botaoIgual = document.querySelector('.botaoIgual')
const botaoClear = document.querySelector('.botaoClear')
const botaoBack = document.querySelector('.botaoBack')

function mostrarPainel() {
    for (let i = 0; i < botao.length; i++) {
        botao[i].addEventListener('click', (e) => {
            e.preventDefault()
            painel.innerHTML += botao[i].value
        })
    }
}
mostrarPainel()

//botão clear
botaoClear.addEventListener('click', (e) => {
    e.preventDefault()
    limparTudo();
})

//botao back
botaoBack.addEventListener('click', (e) => {
    e.preventDefault()
    apagar();
})

//botao igual
botaoIgual.addEventListener('click', (e) => {
    e.preventDefault()
    calcular();
})

function limparTudo() {
    return painel.innerHTML = ''
}

function calcular() {
    var resultado = painel.innerText;
    return painel.innerHTML = eval(resultado) 
}

function apagar() {
    var resultado = painel.innerText;
    painel.innerHTML = resultado.substring(0, resultado.length -1)
    
}

