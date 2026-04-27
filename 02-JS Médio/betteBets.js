
//info
let fartura
let premio, presente, comicoes
let lucro
//entr
fartura=Number(prompt("Quanto Faturou Hoje?"))
premio=Number(prompt("Quanto pagou em premiações?"))
presente=Number(prompt("Quanto Pafou as autoridades?"))
comicoes=Number(prompt("Quanto pagou aos funcionarios?"))
//proc
lucro=fartura-premio-presente-comicoes
//outr
alert("Você Lucrou: R$ "+lucro)