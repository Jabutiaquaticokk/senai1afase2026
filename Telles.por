programa {
  funcao inicio() {
    inteiro frete
    real peso, distancia, volume
   
    

    escreva("Digite o peso da carga: ")
    leia(peso)
    escreva("Digite a Distância da entrega: ")
    leia(distancia)
    escreva("Digite o volume da carga: ")
    leia(volume)
    


    frete = 15 + (2 * peso) + (0.05 * distancia) + (10 * volume)

    escreva("O frete custara R$ " + frete)
    escreva("\n")


  
  }
}
