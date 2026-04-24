//Info
let gastos
let donate, dizimo
let faltante
//Enter
gastos = Number(prompt("Quanto foi gasto esse mês?"))
donate = Number(prompt("Quanto Recebemos de doações?"))
dizimo = Number(prompt("Quanto foi recebido de Dizimo?"))
//Procs
faltante = (donate + dizimo) - gastos
//Leave
console.log("Saldo Final: R$ " + faltante.toFixed(2))