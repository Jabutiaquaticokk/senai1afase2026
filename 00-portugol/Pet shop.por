programa {
  funcao inicio() {
    real precoPorKilo = 10
    real pesoPorGrama = precoPorKilo / 1000
    real peso 
    real precoTotal

    escreva("Digite o peso(g): ")
    leia(peso)

    precoTotal = peso * pesoPorGrama

    escreva("Valor a pagar: R$" + precoTotal)

   
  }
}
