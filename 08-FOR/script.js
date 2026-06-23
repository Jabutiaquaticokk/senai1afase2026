// let i=0

// while(i<=10){
//     console.log(i);
//     i++;
// }

// for(let i=0;i<=20;i+=2){
//     console.log(i)
// }

//EXERCICIOS FOR

function atv1(){
    let soma=0
    for(let i=1;i<=10;i++){
        soma+=i
        document.getElementById('total').innerHTML+=soma+'<br>'
    }
}

function atv2(){
    let ada=0
    for(let tabu=1;tabu<=10;tabu++){
        ada=tabu*5
        document.getElementById('total').innerHTML+=tabu+' x '+'5'+' = '+ada+'<br>'
    }
}

function atv3(){
    let quadra=0
    for(let i=1;i<=10;i++){
        quadra=i*i
        document.getElementById('total').innerHTML+=i+'² = '+quadra+'<br>'
    }
}

function atv4(){
    let palavra='JAVASCRIPT'
    palavra.length//conta o numero de caracteres
    // console.log(palavra.length)
    // console.log(palavra[9]) pegando o indice 9 da lista
    document.getElementById('total').innerHTML+=palavra+'<br>'
    for(let i=0;i<10;i++){
        
        document.getElementById('total').innerHTML+=palavra[i]+'<br>'
        //PALAVRA[i=numero do caracter]
    }
}

function atv5(){
    let mult=0
    for(let i=1;i<=10;i++){
        mult=i*3
        document.getElementById('total').innerHTML+=mult+'<br>'
    }
}

function atv6(){
    for(let i=0;i<10;i++){
        document.getElementById('total').innerHTML+='*'
    }
}

function atv7(){
    let soma=0
    for(i=0;i<=20;i+=2){
        soma=i+i
        document.getElementById('total').innerHTML+=i+'+'+i+'='+soma+'<br>'
    }
}

function atv8(){
    for(let i=0;i<=50;i+=5){
        document.getElementById('total').innerHTML+=i+'<br>'
    }
}

function atv9(){
    for(let i=0;i<8;i++){
        document.getElementById('total').innerHTML+='Olá!<br>'
    }
}

function atv10(){
    let soma=0
    for(let i=1;i<=15;i+=2){
        soma=i+i
        document.getElementById('total').innerHTML+=i+'+'+i+'='+soma+'<br>'
    }
}

function atv11(){
    let soma=0
    for(let i=0;i<=15;i+=2){
        soma=i+i
        document.getElementById('total').innerHTML+=i+'+'+i+'='+soma+'<br>'
    }
}


function atv12(){
    let seq=''
    for(let i=1;i<=5;i++){
        seq+=i
        document.getElementById('total').innerHTML+=seq+'<br>'
    }
}

function atv13(){
    let fat=1
    for(let i=1;i<=5;i++){
        fat=fat*i
    }
    document.getElementById('total').innerHTML+='A fatorial de 5 é ='+fat
}

function atv14(){

}