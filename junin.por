programa {
  funcao inicio() {
    real salario 
    inteiro dias 
    real salarioDiario 

    escreva("Digite seu salário: ")
    leia(salario)
    escreva("\nQuantos dias trabalhou no mês: ")
    leia(dias)
    salarioDiario = salario / dias

    escreva("\nSeu salário diário é de: " + salarioDiario)
  }
}
