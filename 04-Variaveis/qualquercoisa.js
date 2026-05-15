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
let cont = 0
function incrCount(){
    
    cont=cont+1
    document.getElementById("p-contagem").innerHTML=cont
}

function decrCount(){
    cont=cont-1
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