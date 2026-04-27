alert("Monika DEV")
let n
let chance

n=Number(prompt("Quantas Vezes Usou o celular?"))
chance = (0.1/(1+500* n))*100
alert("Sua chance é de " + chance.toFixed(1) + "%")
console.log(n)