function geraCartelaHoje(){
    var vetorInicial = gerarVetorInicial()
    var cartela = []

    while(cartela.length < 24){
        var indice = Math.floor(Math.random()*vetorInicial.length)
        cartela.push(vetorInicial[indice])
        vetorInicial.splice(indice, 1)
    }
    return cartela;
}
