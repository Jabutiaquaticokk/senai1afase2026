//info
let moradia,luz,agua,internet,stream,gas,tel,outros
let salario, sobra
//entr
salario=Number(prompt("Quanto recebeu este mês?"))
moradia=Number(prompt("Aluguel?"))
luz=Number(prompt("Luz?"))
agua=Number(prompt("Agua?"))
internet=Number(prompt("Internet?"))
stream=Number(prompt("streaming?"))
gas=Number(prompt("Com o Chevetão?"))
tel=Number(prompt("Telefone?"))
outros=Number(prompt("Outros gastos?"))
//proc
sobra=salario-(moradia+luz+agua+internet+stream+gas+tel+outros)
//exit
alert("Sobrou R$ "+sobra+" pra gastar esse mes ;>")
console.log("Sobrou R$ "+sobra+" pra gastar esse mes ;>")