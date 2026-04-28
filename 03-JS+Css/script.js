

// Nivel Médio

function precoBrique(){
    //info
let obra, lucro
//entr
obra=Number(prompt("Quanto gastou na obra?"))
//proc
lucro=obra*3
//exit
alert("Venda por R$"+lucro+"\nRecebera R$"+(lucro-obra))
console.log("Venda por R$"+lucro+"\nRecebera R$"+(lucro-obra))

document.getElementById("resultado").innerHTML=("Venda por R$"+lucro+"\nRecebera R$"+(lucro-obra))


}



