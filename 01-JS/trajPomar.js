alert("Bem Vindo a Trajeto Pomar!!!")
//Info
let laranjasI, laranjasF
let vendas
//Entr
laranjasI = Number(prompt("Quantas laranjas foram enviadas?"))
laranjasF = Number(prompt("Quantas laranjas foram Vendidas?"))
//Procs
vendas = laranjasI - laranjasF
//Saida
console.log("Sobraram "+vendas+" laranjas")
console.log("Foram vendidas " +(laranjasI-vendas)+ " laranjas" )