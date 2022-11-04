const paineis = [
    {
      IMC: 18,
      nivel: "Abaixo de 18.5",
      tipo: "Abaixo do Peso",
      descricao:
        "Você está abaixo do peso ideal. Isso pode ser apenas uma característica pessoal, mas também pode ser um sinal de desnutrição ou de algum problema de saúde. Caso esteja perdendo peso sem motivo aparente, procure um médico.",
    },
    {
      IMC: 25,
      nivel: "Abaixo de 25.0",
      tipo: "Peso Normal",
      descricao:
        "Parabéns, você está com o peso normal. Recomendamos que mantenha hábitos saudáveis em seu dia a dia. Especialistas sugerem ingerir de 4 a 5 porções diárias de frutas, verduras e legumes, além da prática de exercícios físicos - pelo menos 150 minutos semanais.",
    },
    {
      IMC: 30,
      nivel: "IMC entre 25.0 e 29.9",
      tipo: "Sobrepeso",
      descricao:
        "Atenção! Alguns quilos a mais já são suficientes para que algumas pessoas desenvolvam doenças associadas, como diabetes e hipertensão. É importante rever seus hábitos. Procure um médico.",
    },
    {
      IMC: 35,
      nivel: "IMC entre 30.0 e 34.9",
      tipo: "Obesidade grau I",
      descricao:
        "Sinal de alerta! O excesso de peso é fator de risco para desenvolvimento de outros problemas de saúde. A boa notícia é que uma pequena perda de peso já traz benefícios à saúde. Procure um médico para definir o tratamento mais adequado para você.",
    },
    {
      IMC: 40,
      nivel: "IMC entre 35.0 e 39.9",
      tipo: "Obesidade grau II",
      descricao:
        "Sinal vermelho! Ao atingir este nível de IMC, o risco de doenças associadas está entre alto e muito alto. Busque ajuda de um profissional de saúde; não perca tempo.",
    },
    {
      IMC: 200,
      nivel: "IMC acima de 40",
      tipo: "Obesidade grau III",
      descricao:
        "Sinal vermelho! Ao atingir este nível de IMC, o risco de doenças associadas é muito alto. Busque ajuda de um profissional de saúde; não perca tempo.",
    },
  ];

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
    let calculoImc = calcularIMC();
    for (let key in paineis) {
        const cadaIMC = paineis[key].IMC;
        if (calculoImc <= cadaIMC) {
        nivel.innerHTML = paineis[key].nivel;
        tipo.innerHTML = paineis[key].tipo;
        descricao.innerHTML = paineis[key].descricao;
        imcResultado.innerHTML = calculoImc;
        break;
      }
    }
  }