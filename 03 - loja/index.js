const nome = document.querySelector('#cliente');
const valorDaCompra = document.querySelector('#valor-da-compra');
const painelCliente = document.querySelector('.painel-cliente');
const painelTotal = document.querySelector('.painel-total');
const painelQuantidadeDeParcelas = document.querySelector('.painel-quantidade-de-parcelas');
const painelValorDasParcelas = document.querySelector('.painel-valor-das-parcelas');
const botaoGerarPdf = document.querySelector('.gerarPdf');

const botaoCalcular = document.querySelector('.botao-calcular');

botaoCalcular.addEventListener('click', (e) => {
    e.preventDefault()
    imprimirNomeCliente()
    imprimirTotalDaCompra()
    imprimirQuantidadeDeParcelas()
    imprimirValorDeCadaParcela()
    mostrarResultado()
})

botaoGerarPdf.addEventListener('click', (e) => {
    gerarPdf()
})

function imprimirNomeCliente() {
    return painelCliente.innerHTML = nome.value;
}

function imprimirTotalDaCompra() {
    return painelTotal.innerHTML = `R$ ${valorDaCompra.value}`;
}

function imprimirQuantidadeDeParcelas() {
    var quantidadeDeParcelas = document.getElementById('quantidade-de-parcelas');
    var opcaoEscolhidaEmParcelas = quantidadeDeParcelas.options[quantidadeDeParcelas.selectedIndex].value
    return painelQuantidadeDeParcelas.innerHTML = opcaoEscolhidaEmParcelas;
}

function imprimirValorDeCadaParcela() {
    var quantidadeDeParcelas = document.getElementById('quantidade-de-parcelas');
    var opcaoEscolhidaEmParcelas = quantidadeDeParcelas.options[quantidadeDeParcelas.selectedIndex].value
    return painelValorDasParcelas.innerHTML = `R$ ${(valorDaCompra.value / opcaoEscolhidaEmParcelas).toFixed(2)}`;
}

function gerarPdf() {
    var pegarDados = document.getElementById('resultado').innerHTML;
    var janela = window.open('','','width=800','heigth=600');
    janela.document.write('<html><head>')
    janela.document.write('<title>Loja</title><html>')
    janela.document.write('<body>')
    janela.document.write(pegarDados)
    janela.document.write('</body></html>')
    janela.document.close();
    janela.print();
}

function mostrarResultado() {
    const classeResultado = document.querySelector('.resultado');
    const classeGerarPdf = document.querySelector('.gerarPdf');
    classeResultado.className="resultado"
    classeGerarPdf.className="gerarPdf"
}