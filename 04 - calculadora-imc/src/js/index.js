const altura = document.getElementById('altura')
const peso = document.getElementById('peso')
const calcular = document.getElementById('calcular')
const classeIncentivo = document.querySelector('.incentivo')
const pesoAbaixo = document.querySelector('.peso-abaixo')
const pesoNormal = document.querySelector('.peso-normal')
const sobrepeso = document.querySelector('.peso-sobrepeso')
const obesidade = document.querySelector('.peso-obesidade')
const obesidadeGrave = document.querySelector('.peso-obesidade-grave')
const obesidadeSuperGrave = document.querySelector('.peso-obesidade-super-grave')
const painelIimc = document.querySelectorAll('.imc-resultado')

calcular.addEventListener('click', (e) => {
    calcularIMC()
    imprimirImc()
    mostrarPainel()
})

function calcularIMC() {
    let imc = parseFloat(peso.value)/((parseFloat(altura.value)*parseFloat(altura.value))/10000);
    return imc.toFixed(2);
}

function imprimirImc() {
    let resultadoImc = calcularIMC();
    if (resultadoImc < 18) {
        return painelIimc[0].innerHTML = resultadoImc;
    } else if (resultadoImc >=18 && resultadoImc < 25) {
        return painelIimc[1].innerHTML = resultadoImc;
    }else if (resultadoImc >=25 && resultadoImc < 30) {
        return painelIimc[2].innerHTML = resultadoImc;
    }else if (resultadoImc >=30 && resultadoImc < 35) {
        return painelIimc[3].innerHTML = resultadoImc;
    }else if (resultadoImc >=35 && resultadoImc < 40) {
        return painelIimc[4].innerHTML = resultadoImc;
    }else if (resultadoImc >=40) {
        return painelIimc[5].innerHTML = resultadoImc;
    }
}

function mostrarPainel() {
    let resultadoImc = calcularIMC();
    if (resultadoImc < 18) {
        classeIncentivo.classList.add("display")
        obesidadeSuperGrave.classList.add("display")
        obesidadeGrave.classList.add("display")
        obesidade.classList.add("display")
        sobrepeso.classList.add("display")
        pesoNormal.classList.add("display")
        pesoAbaixo.classList.remove("display")
    } else if (resultadoImc >=18 && resultadoImc < 25) {
        classeIncentivo.classList.add("display")
        obesidadeSuperGrave.classList.add("display")
        obesidadeGrave.classList.add("display")
        obesidade.classList.add("display")
        sobrepeso.classList.add("display")
        pesoNormal.classList.remove("display")
        pesoAbaixo.classList.add("display")
    }else if (resultadoImc >=25 && resultadoImc < 30) {
        classeIncentivo.classList.add("display")
        obesidadeSuperGrave.classList.add("display")
        obesidadeGrave.classList.add("display")
        obesidade.classList.add("display")
        sobrepeso.classList.remove("display")
        pesoNormal.classList.add("display")
        pesoAbaixo.classList.add("display")
    }else if (resultadoImc >=30 && resultadoImc < 35) {
        classeIncentivo.classList.add("display")
        obesidadeSuperGrave.classList.add("display")
        obesidadeGrave.classList.add("display")
        obesidade.classList.remove("display")
        sobrepeso.classList.add("display")
        pesoNormal.classList.add("display")
        pesoAbaixo.classList.add("display")
    }else if (resultadoImc >=35 && resultadoImc < 40) {
        classeIncentivo.classList.add("display")
        obesidadeSuperGrave.classList.add("display")
        obesidadeGrave.classList.remove("display")
        obesidade.classList.add("display")
        sobrepeso.classList.add("display")
        pesoNormal.classList.add("display")
        pesoAbaixo.classList.add("display")
    }else if (resultadoImc >=40) {
        classeIncentivo.classList.add("display")
        obesidadeSuperGrave.classList.remove("display")
        obesidadeGrave.classList.add("display")
        obesidade.classList.add("display")
        sobrepeso.classList.add("display")
        pesoNormal.classList.add("display")
        pesoAbaixo.classList.add("display")
    }

}