const altura = document.getElementById('altura')
const peso = document.getElementById('peso')
const calcular = document.getElementById('calcular')
const classeIncentivo = document.querySelector('.incentivo')
const painel = document.querySelector('.painel')
const imcResultado = document.querySelector('.imc-resultado')
const nivel = document.querySelector('.nivel')
const tipo = document.querySelector('.tipo')
const descricao = document.querySelector('.descricao')
 
calcular.addEventListener('click', (e) => {
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

function mostrarResultadoNoPainel() {
  fetch('https://my-json-server.typicode.com/luispaulobrito/fake-api/paineis')
  .then(response => response.json())
  .then(json => { 
    let calculoImc = calcularIMC();
    for (let key in json) {
      const cadaIMC = json[key].IMC;
      if (calculoImc <= cadaIMC) {
        nivel.innerText = json[key].nivel;
        tipo.innerHTML = json[key].tipo;
        descricao.innerHTML = json[key].descricao;
        imcResultado.innerHTML = calculoImc;
        break;
      }
    }
  })
}