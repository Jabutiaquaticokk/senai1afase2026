programa {
  funcao inicio() {
    real prompt, caracteres
    real precoToken= 5
    real precoCaracter = 1

    escreva("Quantos prompt gostaria de enviar? ")
    leia(prompt)
    real totalPrompt = precoToken * prompt
    escreva("Quantos caracteres vão ter para cada prompt? ")
    leia(caracteres)
    real totalCaracter = (precoCaracter * caracteres)
    real totalToken = (totalCaracter * prompt) + totalPrompt
    real custoDinheiro = totalToken * 0.150
    escreva("Esse é o custo em Tokens: " + totalToken)
    escreva("\nEsse é o preço em dinheiro: R$" + custoDinheiro)

  }
}
