programa {
  funcao inicio() {
    inteiro pf, pj
    real tempoPF, tempoPJ
    real recebidoPF, recebidoPJ
    inteiro relatorio
    real recebido
    real tempo, tempogstPF, tempogstPJ
    real mediapf, mediapj
    // Relatórios
    escreva("Quantos relatórios foram feitos para PF? :")
    leia(pf)
    escreva("Quantos relatórios foram feitos para PJ? :")
    leia(pj)
    relatorio = pf + pj
    // Tempo
    escreva("Quanto tempo de prazo para PF? :")
    leia(tempoPF)
    escreva("Quanto tempo de prazo para PJ? :")
    leia(tempoPJ)
    tempo = tempoPF + tempoPJ
    // Recebido
    escreva("Quanto foi recebido das PFs? :")
    leia(recebidoPF)
    escreva("Quanto foi recebido das PJs? :")
    leia(recebidoPJ)
    recebido = recebidoPF + recebidoPJ

    // Médias
    mediapf = recebidoPF / pf 
    mediapj = recebidoPJ / pj  
    tempogstPF = tempoPF / pf 
    tempogstPJ = tempoPJ / pj
    // Total 
    escreva("\nResultados:\n")
    escreva("Total de Relatórios: " + relatorio)
    escreva("\nTempo trabalhado: " + tempo + " horas")
    escreva("\nTotal Recebido: R$" + recebido)
    escreva("\nMédia de valor recebido PF: " + mediapf)
    escreva("\nMédia de valor recebido PJ: " + mediapj)
    escreva("\nMédia de tempo gasto PF: " + tempogstPF)
    escreva("\nMédia de tempo gasto PJ: " + tempogstPJ)
  }
}
