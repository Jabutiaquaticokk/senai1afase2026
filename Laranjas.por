programa {
  funcao inicio() {
    real laranjasI = 0
    real laranjasF = 0
    real diferenca = 0 

    escreva("Quantas laranjas foram colhidas? : ")
    leia(laranjasI)
    escreva("Quantas laranjas sobraram? : ")
    leia(laranjasF)

    diferenca = laranjasI - laranjasF

    escreva("Foram vendidas " + diferenca + " laranjas")
  }
}
