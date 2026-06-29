function rodarWhile(){
    let i=0//1o pilar
    while(i<50){//2o pilar
        i++//3o pilar
        console.log(i)
        

    }

    
    
}

function rodarFor(){
    for(let i=0;i<=50;i++){
        console.log(i)
    }
}

function rodarDoWhile(){
    let i=0
    do{
        i++
        console.log(i);
        
    }while(i<50)
}

function exempoDoWhile(){
    let idade
    
    do{
        idade=Number(prompt('Digita sua idade'))
    }while(idade<18)
    alert('Entrou no sistema')
    open('https://spinning.fish/')
}

function exempoDoWhileLimit(){
    let idade
    let tentativas=3
    do{
        tentativas--
        idade=Number(prompt('Digita sua idade'))
        if(idade<18){alert('Idade errada')
            alert('Digita direito')
        }
    }while(idade<18&&tentativas>0)
    
}