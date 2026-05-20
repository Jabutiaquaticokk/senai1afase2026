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
// Math.ceil(Math.random()*10)
let round=0
let pontos=0
let rolagens=0

function dado4(){
    let numero=Math.ceil(Math.random()*4)
    round=numero
    pontos=pontos+numero
    rolagens=rolagens+1
    document.getElementById('p-numerodado').innerHTML="d4 = "+round
    document.getElementById('p-pontos').innerHTML=pontos+' pontos'
    document.getElementById('p-rolagens').innerHTML=rolagens+' rolagens'
    document.getElementById('numeros').innerHTML+="d4 "+numero+'<br>'
}

function dado6(){
    let numero=Math.ceil(Math.random()*6)
    round=numero
    pontos=pontos+numero
    rolagens=rolagens+1
    document.getElementById('p-numerodado').innerHTML="d6 = "+round
    document.getElementById('p-pontos').innerHTML=pontos+' pontos'
    document.getElementById('numeros').innerHTML+="d6 "+numero+'<br>'
    document.getElementById('p-rolagens').innerHTML=rolagens+' rolagens'
}

function dado10(){
    let numero=Math.ceil(Math.random()*10)
    round=numero
    pontos=pontos+numero
    rolagens=rolagens+1
    document.getElementById('p-numerodado').innerHTML="d10 = "+round
    document.getElementById('p-pontos').innerHTML=pontos+' pontos'
    document.getElementById('numeros').innerHTML+="d10 "+numero+'<br>'
    document.getElementById('p-rolagens').innerHTML=rolagens+' rolagens'
}

function dado12(){
    let numero=Math.ceil(Math.random()*12)
    round=numero
    pontos=pontos+numero
    rolagens=rolagens+1
    document.getElementById('p-numerodado').innerHTML="d12 = "+round
    document.getElementById('p-pontos').innerHTML=pontos+' pontos'
    document.getElementById('numeros').innerHTML+="d12 "+numero+'<br>'
    document.getElementById('p-rolagens').innerHTML=rolagens+' rolagens'
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

// Jogo do Dino
let dinos=['Espinossauro', 'T-Rex', 'Braquiossauro', 'Velocirraptor', 'Estegossauro', 'Triceratopo', 'Anquilossauro', 'Alossauro', 'Parassaurolofo', 'Carnotauro']
const btnDado=document.getElementById("btn-dado")
let escolha
let aleatorio=Math.floor(Math.random() * dinos.length)
let resultado=dinos[aleatorio]
console.log(resultado)



