let senha
function financa(){
    senha=prompt("Insira Senha:")
    if(senha=="0171"){
    alert("Lucro")
    }else{
        open("https://spinning.fish/")
    }
}

//Jogo
let dinoSorteado=''
let dinoEscolhido=''
function escolherDino(n){
    dinoEscolhido=n
    dinoSorteado=parseInt(Math.random()*10)
    console.log(dinoEscolhido)
    console.log(dinoSorteado)

    console.log(convertDino(dinoEscolhido))
    console.log(convertDino(dinoSorteado))
    document.getElementById("outdinoSelect").innerHTML=convertDino(dinoEscolhido)
    document.getElementById("outdinoSorteio").innerHTML=convertDino(dinoSorteado)
}

function convertDino(n){
     let dino=''
     if(n==0){
        dino='Espinossauro'
     }else if(n==1){
        dino='T-rex'
     }else if(n==2){
        dino='Braquiossauro'
     }else if(n==3){
        dino='Velocirraptor'
     }else if(n==4){
        dino='Estegossauro'
     }else if(n==5){
        dino='Triceratopo'
     }else if(n==6){
        dino='Anquilossauro'
     }else if(n==7){
        dino='Carnotauro'
     }else if(n==8){
        dino='Alossauro'
     }else if(n==9){
        dino='Parassaurolofo'
     }

     return(dino)
}