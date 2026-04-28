//info
let suply, ticket, items
let lucro, pct
//entr
suply=Number(prompt("Gastos com Suprimentos/Mercadorias?"))
ticket=Number(prompt("Lucro com ingressos?"))
items=Number(prompt("Lucro com Itens?"))
//proc
lucro=(ticket+items)-suply
pct=(lucro/suply)*100
//exit
alert("Lucro : R$"+lucro+"\nLucro PCT: " + pct.toFixed(2)+"%")
console.log("Lucro : R$"+lucro+"\nLucro PCT: " + pct.toFixed(2)+"%")