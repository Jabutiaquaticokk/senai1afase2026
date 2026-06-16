// let contador=0 //inicialização
// //(cond repetição)
// while(contador<10){
//    alert('Contador: '+contador)
//    contador++//contagem
// }//volta e testa novamente a condição

// let peso


// let saco=0
// while(saco<10){
//     peso=Number(prompt('Digite o Peso'))

// if(peso>1.1||peso<0.9){
//     alert('fora da tolerância do peso')
// }
//     saco++
// }

// let i=0
// let total=0
// while(i<3){
//     i++
//    let preco=Number(prompt('Insira o Preço do '+i+'°'+' produto:'))
//    total=total+preco
//    document.getElementById('total').innerHTML+=i+'° produto: '+' R$ '+preco.toFixed(2)+'<br>'
// }
// alert(total)

// EXERCICIOS \\
//PARTE 1
//1
let n=0
function atv1(){
    while(n<10){
        n++
        let quadrada
        quadrada=n*n
        document.getElementById('total').innerHTML+=n+'²'+' = '+quadrada+'<br>'
        
    }
}

let num=10

function atv2(){
    while(num>0){
        document.getElementById('total').innerHTML+=num+'<br>'
        num--
    }
}
let soma=0
function atv3(){

}

let tabuada=0
function atv4(){
    while(tabuada<10){
        tabuada++
        let resposta=5*tabuada
        document.getElementById('total').innerHTML+='5'+' x '+tabuada+' = '+resposta+'<br>'

    }
    
}

function atv5(){
    let n=Number(prompt('insira um numero'))
    while(tabuada<10){
        tabuada++
        let resposta=n*tabuada
        document.getElementById('total').innerHTML+=n+' x '+tabuada+' = '+resposta+'<br>'
    }
    
}

function reset(){
    document.getElementById('total').innerHTML=''
}