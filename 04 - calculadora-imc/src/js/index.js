const altura = document.getElementById('altura')
const peso = document.getElementById('peso')
const classeIncentivo = document.querySelector('.incentivo')
const painel = document.querySelector('.painel')
const imcResultado = document.querySelector('.imc-resultado')
const nivel = document.querySelector('.nivel')
const tipo = document.querySelector('.tipo')
const descricao = document.querySelector('.descricao')
 
document.getElementById('calcular').addEventListener('click', (e) => {
    mostrarPainel()
    mostrarResultadoNoPainel()
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

async function conectarApi() {
  const response = await fetch('https://my-json-server.typicode.com/luispaulobrito/fake-api/paineis')
  return await response.json() 
}    
    
function mostrarResultadoNoPainel() {
  conectarApi().then(jsonData => {
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