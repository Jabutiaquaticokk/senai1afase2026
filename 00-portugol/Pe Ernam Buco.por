programa {
  funcao inicio() {
    real gastosMensais
    real dizimo, doacoes
    real saldo
    escreva("Quanto foi gasto esse mês: ")
    leia(gastosMensais)
    escreva("\nQuanto foi pago de dizimo? : ")
    leia(dizimo)
     escreva("\nQuanto foi recebido de doações? : ")
    leia(doacoes)
    saldo = dizimo + doacoes - gastosMensais
    escreva("\nSaldo final é de: " + saldo)
  }
}
