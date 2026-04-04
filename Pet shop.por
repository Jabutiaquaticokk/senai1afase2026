programa {
  funcao inicio() {
    real preco = 10
    real kilo, grama 

    escreva("Insira o peso desejado: ")
    leia(kilo)
    grama = kilo * 1000
    preco = grama / 1000 * 10 
    escreva("Peso em gramas: " + grama + "g")
    escreva("\nPreço: R$" + preco)
  }
}
