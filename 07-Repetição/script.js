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

function atv1(){
    let n=0
    while(n<10){
        n++
        let quadrada
        quadrada=n*n
        document.getElementById('total').innerHTML+=n+'²'+' = '+quadrada+'<br>'
        
    }
    document.getElementById('total').innerHTML+='<hr>'
}



function atv2(){
    let num=10
    while(num>0){
        document.getElementById('total').innerHTML+=num+'<br>'
        num--
    }
    document.getElementById('total').innerHTML+='<hr>'
}

function atv3(){
    let n=0
    while(n<100){
        n++
        let soma
        soma=n+n
        document.getElementById('total').innerHTML+=n+' + '+n+' = '+soma+'<br>'
        
    }
}

function atv4(){
    let tabuada=0
    while(tabuada<10){
        tabuada++
        let resposta=5*tabuada
        document.getElementById('total').innerHTML+='5'+' x '+tabuada+' = '+resposta+'<br>'
        
    }
    document.getElementById('total').innerHTML+='<hr>'
}

function atv5(){
    let tabuada=0
    let n=Number(prompt('insira um numero'))
    while(tabuada<10){
        tabuada++
        let resposta=n*tabuada
        document.getElementById('total').innerHTML+=n+' x '+tabuada+' = '+resposta+'<br>'
    }
    document.getElementById('total').innerHTML+='<hr>'
}

function atv6(){
    let n=-1
    while(n<20){
        n=n+2
        document.getElementById('total').innerHTML+=n+'<br>'
    }
    document.getElementById('total').innerHTML+='<hr>'
}

function atv7(){
    let num=0
    while(num<10){
        num++
        document.getElementById('total').innerHTML+=num+'<br>'
       
    }
    document.getElementById('total').innerHTML+='<hr>'
    while(num>0){
        document.getElementById('total').innerHTML+=num+'<br>'
        num--
    }
    document.getElementById('total').innerHTML+='<hr>'
}

function atv8(){
    let n=Number(prompt('Insira um Numero'))
    let resposta=1
    while(n>=1){
        resposta=resposta*n
        
        if(n>1){
            
            document.getElementById('total').innerHTML+=n+' x '
            
        }else if(n<=1){
            document.getElementById('total').innerHTML+=n+ ' = '+resposta
        }
        n=n-1
    }
    
}
//BOTÃO DE RESET
function reset(){
    document.getElementById('total').innerHTML=''
}