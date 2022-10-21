const n1 = document.querySelector('#n1') 
const n2 = document.querySelector('#n2') 
const soma = document.querySelector('#somar')
const subtracao = document.querySelector('#subtrair')
const multiplicacao = document.querySelector('#multiplicar')
const divisao = document.querySelector('#dividir')
const resultado = document.querySelector('span')

soma.addEventListener('click', (e) => {
    e.preventDefault()
    somar()
})

function somar() {
    let resultadoSoma = parseInt(n1.value) + parseInt(n2.value);
    resultado.innerHTML = resultadoSoma; 
}

subtracao.addEventListener('click', (e) => {
    e.preventDefault()
    subtrair()
})

function subtrair() {
    let resultadoSubtracao = parseInt(n1.value) - parseInt(n2.value);
    resultado.innerHTML = resultadoSubtracao; 
}
multiplicacao.addEventListener('click', (e) => {
    e.preventDefault()
    multiplicar()
})

function multiplicar() {
    let resultadoMultiplicacao = parseInt(n1.value) * parseInt(n2.value);
    resultado.innerHTML = resultadoMultiplicacao; 
}
divisao.addEventListener('click', (e) => {
    e.preventDefault()
    dividir()
})

function dividir() {
    let resultadodivisao = parseInt(n1.value) / parseInt(n2.value);
    resultado.innerHTML = resultadodivisao; 
}

