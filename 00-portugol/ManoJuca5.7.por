programa {
  funcao inicio() {
    // info
    inteiro dias 
    real desconto10, desconto15
    real valorDiaria, multa=150, valorBruto
    real valor_total
    // entrada
    escreva("Quantos dias?: ")
    leia(dias)
    
    // process
    se(dias<=5){
      valorDiaria = 100
    }senao se(dias>=6 e dias<=10){
      valorDiaria = 90
    }senao{
      valorDiaria = 80
    }
    valorBruto = dias*valorDiaria
    desconto10 = valorBruto * 0.1
    desconto15 = valorBruto * 0.15
    valor_total = dias * valorDiaria - desconto10 - desconto15 + multa
    // saidas
    escreva("\n====================\n")
    escreva("Valor Bruto: R$ " + valorBruto)
    escreva("\nDesconto 1: R$" + desconto10)
    escreva("\nDesconto 2: R$" + desconto15)
    escreva("\nMulta : R$ -" + multa)
    escreva("\n--------------------")
    escreva("\n\nValor Total: R$ " + valor_total)
    escreva("\n====================\n")
  }
}
