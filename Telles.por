programa {
  funcao inicio() {
    real frete
    real peso = 0
    real distancia = 0
    real volume = 0
    real ordem = 0

    ordem = 1
    peso = 20
    distancia = 650
    volume = 1

    frete = 15 + (2 * peso) + (0.05 * distancia) + (10 * volume)

    escreva("O frete do caso " + ordem + " custara R$" + frete)
    escreva("\n")

    ordem = 2
    peso = 60
    distancia = 1000
    volume = 0.5

    frete = 15 + (2 * peso) + (0.05 * distancia) + (10 * volume)

   escreva("O frete do caso " + ordem + " custara R$" + frete)
    escreva("\n")

     ordem = 3
    peso = 3
    distancia = 1200
    volume = 0.2

    frete = 15 + (2 * peso) + (0.05 * distancia) + (10 * volume)

   escreva("O frete do caso " + ordem + " custara R$" + frete)
  
  }
}
