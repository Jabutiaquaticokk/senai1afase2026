alert("Bem Vindo a Pé Pequeno!")
//Info
let preco, qntd
let troca
//Entrada
qntd = Number(prompt("Insira Quantidade: "))
preco = Number(prompt("Insira Valor: R$ "))
//Process
troca = preco * qntd
//Saida
console.log("Valor em Troca: R$ " + troca.toFixed(2))
alert("Valor em Troca: R$ " + troca.toFixed(2))