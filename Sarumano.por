programa {
  funcao inicio() {
    real shows
    real bombas = 7
    real quantidade
    real preco = 10

    escreva("Uma bomba de fumaça custa R$" + preco)
    escreva("\nQuantos shows ira realizar? : ")
    leia(shows)
    quantidade = shows * bombas
    preco = preco * quantidade
    escreva("Serão utilizadas " + quantidade + " bombas de fumaça.")
    escreva("\nLhe custará R$" + preco)
  }
}
