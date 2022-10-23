const botao = document.querySelectorAll('.botao')

var painel = document.querySelector('.resultado')

console.log(botao[4].value)


for (let i = 0; i < botao.length; i++) {
    const element = botao[i];
    botao[i].addEventListener('click', (e) => {
        e.preventDefault()
        painel.innerHTML += botao[i].value
    })
}