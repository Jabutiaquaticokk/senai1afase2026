programa {
  funcao inicio() {
    inteiro a, b

    escreva("Insira o número A: ")
    leia(a)
    escreva("Insira o número B: ")
    leia(b)

    se(a>b){
      escreva("\nO primeiro número é maior: "+ a)
    }senao{
      se(b>a){
        escreva("\nO segundo número é maior: " + b)
      }
    }
  }
}
