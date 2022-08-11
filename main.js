let botao = document.querySelector('.botao')

botao.addEventListener("click", ()=> {
    let valorDigitado = document.querySelector('#valor')
    let valor = valorDigitado.value;
    let valorDolarNumerico = parseFloat(valor);
    
    
    let valorEmReal = valorDolarNumerico * 5
        
    let valorconvertido = "O valor em real é R$ " + valorEmReal
    
   alert(valorconvertido)
})







