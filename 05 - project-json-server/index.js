fetch('https://my-json-server.typicode.com/luispaulobrito/fake-api/paineis')
  .then(response => response.json())
  .then(json => {
    const paragrafo = document.getElementById('mostrarImc')
    paragrafo.innerText = JSON.stringify(json[0].nivel)
    console.log(json[0].nivel)

  })
