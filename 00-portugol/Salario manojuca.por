programa {
  funcao inicio() {
    real moradia, agua, luz, internet, gasolina, streamings, telefone, outros
    real salario, restante

    escreva("Quanto recebeu este mês? :")
    leia(salario)
    escreva("Quanto custou a conta de água?")
    leia(agua)
    escreva("Quanto custou a conta de luz?")
    leia(luz)
    escreva("Quanto custou a conta de internet?")
    leia(internet)
    escreva("Quanto gastou em gasolina?")
    leia(gasolina)
    escreva("Quanto custou os streamings?")
    leia(streamings)
    escreva("Quanto custou a conta de telefone?")
    leia(telefone)
    escreva("Quanto custou ouros gastos?")
    leia(outros)

    restante = salario - agua - luz - internet - gasolina - streamings - telefone - outros
    escreva("Você tem um saldo de: R$" + restante)
  }
}
