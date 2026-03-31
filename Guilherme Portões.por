programa {
  funcao inicio() {
    inteiro clt = 0
    inteiro pj = 0
    inteiro estagiarios = 0
    inteiro devs = 0
    escreva("Quantos CLTs trabalham na equipe? :")
    leia(clt)
     escreva("Quantos PJs trabalham na equipe? :")
    leia(pj)
     escreva("Quantos estagiarios trabalham na equipe? :")
    leia(estagiarios)

    devs = clt + pj + estagiarios

    escreva("Temos " + devs + " devs na equipe")

  }
}
