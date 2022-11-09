import { acessarApi } from '/src/scripts/services/acessar-api.js'

const altura = document.getElementById('altura')
const peso = document.getElementById('peso')
const classeIncentivo = document.querySelector('.incentivo')
const painel = document.querySelector('.painel')
const imcResultado = document.querySelector('.imc-resultado')
const nivel = document.querySelector('.nivel')
const tipo = document.querySelector('.tipo')
const descricao = document.querySelector('.descricao')
 
document.getElementById('calcular').addEventListener('click', () => {
    mostrarPainel()
    mostrarResultadoNoPainel()
})

document.getElementById('altura').addEventListener('keyup', (e) => {
  const key = e.which || e.keyCode
  const isEnterKeyPressed = key === 13
  if (isEnterKeyPressed) {
      mostrarPainel()
      mostrarResultadoNoPainel()
    }
})

document.getElementById('peso').addEventListener('keyup', (e) => {
  const key = e.which || e.keyCode
  const isEnterKeyPressed = key === 13
  if (isEnterKeyPressed) {
      mostrarPainel()
      mostrarResultadoNoPainel()
    }
})

function calcularIMC() {
    let imc = parseFloat(peso.value)/((parseFloat(altura.value)*parseFloat(altura.value))/10000);
    return imc.toFixed(2);
}

function mostrarPainel() {
    if (altura.value>0 && peso.value>0) {
        classeIncentivo.classList.add("display")
        painel.classList.remove("display")
    }
}   
    
function mostrarResultadoNoPainel() {
  acessarApi().then(jsonData => {
    let calculoImc = calcularIMC();
    for (let key in jsonData) {
      const cadaIMC = jsonData[key].IMC;
      if (calculoImc <= cadaIMC) {
        nivel.innerText = jsonData[key].nivel;
        tipo.innerHTML = jsonData[key].tipo;
        descricao.innerHTML = jsonData[key].descricao;
        imcResultado.innerHTML = calculoImc;
        break;
      }
    }
  })
}