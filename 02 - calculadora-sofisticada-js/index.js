const botao = document.querySelectorAll('.botao')

var painel = document.querySelector('.resultado')


console.log(botao)

for (let i = 0; i < botao.length; i++) {
    const element = botao[i];
    botao[i].addEventListener('click', (e) => {
        e.preventDefault()
        painel.innerHTML += botao[i].value
    })
}

botao[0].addEventListener('click', (e) => {
    e.preventDefault()
    painel.innerHTML = ''
})
