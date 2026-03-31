programa {
  funcao inicio() {
    real fatura = 0
    real presentes = 0
    real premiacoes = 0
    real comissoes = 0
    real lucro = 0
    
    fatura = 6579.00
    presentes = 750
    comissoes = 650
    premiacoes = 112

    lucro = fatura - presentes - comissoes - premiacoes

    escreva("Bete teve um lucro de R$" + lucro)
  }
}
