programa {
  funcao inicio() {
    real gastoNavio
    real fatIngressos, fatItens
    real lucro, porclucro

    escreva("Gastos com Suprimentos: ")
    leia(gastoNavio)
    escreva("Faturamento com venda de Ingressos: ")
    leia(fatIngressos)
    escreva("Faturamento com venda de Itens: ")
    leia(fatItens)
    lucro = fatIngressos + fatItens - gastoNavio
    escreva("Lucro obtido: R$" + lucro + "\n")
    porclucro = lucro / gastoNavio 
    escreva("Lucro Percentual: " + porclucro*100)
    escreva("%")
  }
}
