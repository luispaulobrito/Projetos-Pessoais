const botao = document.querySelectorAll('.botao')
const numeros = document.querySelectorAll('.numeros')
const botaoIgual = document.querySelector('.botaoIgual')
var painel = document.querySelector('.resultado')


console.log(numeros)

for (let i = 0; i < botao.length; i++) {
    botao[i].addEventListener('click', (e) => {
        e.preventDefault()
        painel.innerHTML += botao[i].value
    })
}

//botão clear
botao[0].addEventListener('click', (e) => {
    e.preventDefault()
    painel.innerHTML = ''
})

//botao back
botao[1].addEventListener('click', (e) => {
    var resultado = document.getElementsByClassName('.resultado')
    e.preventDefault()
    console.log(painel).value
    painel.innerHTML = resultado.substring(0, resultado.length -1)
})

//botao igual
botaoIgual.addEventListener('click', (e) => {
    e.preventDefault()
    // let resultado = document.getElementsByClassName('resultado').innerHTML;
    console.log(painel)
    var resultado = painel.innerText;
    console.log(resultado)
    painel.innerHTML = eval(resultado)

    // painel.innerHTML = eval(painel) 
})

function calcular() {
    var resultado = document.getElementsByClassName('resultado').innerHTML;
    console.log(resultado)  
}

