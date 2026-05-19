// let global="Sou uma função global"
// function funcao1(){
//     let local='soy una variable local'
//     console.log(local);
//     console.log(global);
// }

// function funcao2(){
//     console.log(global);
//     // console.log(local);
    
// }

// funcao1()
// funcao2()
let total = 0
function harryPloter(){
    let valor=Number(document.getElementById('inputVenda').value)
    total=total+valor
    console.log(valor)
    document.getElementById('p-total').innerHTML="Total venda R$"+total.toFixed(2)
    document.getElementById('listaVenda').innerHTML+="R$"+valor.toFixed(2)+'<br>'
    document.getElementById('inputVenda').value=''
    document.getElementById('inputVenda').focus()
}

function dado(){
    
}



let cont = 0
function incrCount(){
    
    // cont=cont+1
    cont++
    document.getElementById("p-contagem").innerHTML=cont
}

function decrCount(){
    cont--
    document.getElementById("p-contagem").innerHTML=cont
}

function maisdez(){
    cont=cont+10
    document.getElementById("p-contagem").innerHTML=cont
}

function menossdez(){
    cont=cont-10
    document.getElementById("p-contagem").innerHTML=cont
}

function reset(){
    cont=0
    document.getElementById("p-contagem").innerHTML=cont
}

function peixe(){
    open('https://spinning.fish/')
}