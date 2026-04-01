programa {
  funcao inicio() {
    inteiro vitoria = 3
    inteiro empate = 1
    inteiro pontos

    escreva("Quantas vitórias seu time tem? :")
    leia(vitoria)
    escreva("Quantos empates seu time tem? :")
    leia(empate)
    pontos = vitoria * 3 + empate
    escreva("Seu time tem " + pontos + " pontos")
  }
}
