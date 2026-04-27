
//info
let peso, distance, volume, frete
//entrada
peso=Number(prompt("Insira o Peso"))
distance=Number(prompt("Insira a Distância"))
volume=Number(prompt("Insira o volume"))
//process
frete=15+(2*peso)+(0.05*distance)+(10*volume)
//saidas
alert("Frete: R$ "+frete)