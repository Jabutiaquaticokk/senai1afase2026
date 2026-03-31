programa {
  funcao inicio() {
    real fartura = 0
    real presentes = 0
    real premiacoes = 0
    real comissoes = 0
    real lucro = 0
    
    escreva("Quanto você faturou? :")
    leia(fartura)
    escreva("Quanto você pagou em 'presentes'? :")
    leia(presentes)
    escreva("Quanto você pagou em premiações? :")
    leia(premiacoes)
    escreva("Quanto você pagou em comissões? :")
    leia(comissoes)

    lucro = fartura - presentes - comissoes - premiacoes

    escreva("Bete teve um lucro de R$" + lucro)
  }
}
