programa {
  funcao inicio() {
    real preco = 0
    inteiro quantidade = 0
    real valorTotal 
    // real valorTotalPLoja 

    escreva("Qual o preço do tenis? :")
    leia(preco)
    escreva("Quantos pares de tenis a loja tem? :")
    leia(quantidade)

    valorTotal = preco * quantidade
    escreva("A loja vai receber R$" + valorTotal)
  }
}
