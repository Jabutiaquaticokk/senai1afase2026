const personagens = [
    "Lúcio Fernando",
    "Mônica",
    "Capitão Ganso",
    "Gill Bates",
    "Junin"
];

for(let i=0;i<personagens.length;i++){
    document.getElementById('div-nome').innerHTML+='['+i+'] '+personagens[i]+'<br>'
}


function addGillBates(){
    document.getElementById('div-nome').innerHTML=''
    personagens.push('Gill Bates')
    for(let i=0;i<personagens.length;i++){
        document.getElementById('div-nome').innerHTML+='['+i+'] '+personagens[i]+'<br>'
    }
        
}

function addDonaBete(){
    document.getElementById('div-nome').innerHTML=''
    personagens.push('Dona Bete')
    for(let i=0;i<personagens.length;i++){
        document.getElementById('div-nome').innerHTML+='['+i+'] '+personagens[i]+'<br>'
    }
         
}

function removerUltimo(){
    document.getElementById('div-nome').innerHTML=''
    personagens.pop()
    for(let i=0;i<personagens.length;i++){
        document.getElementById('div-nome').innerHTML+='['+i+'] '+personagens[i]+'<br>'
    }
         
}

function removerPrimeiro(){
    document.getElementById('div-nome').innerHTML=''
    personagens.shift()
    for(let i=0;i<personagens.length;i++){
        document.getElementById('div-nome').innerHTML+='['+i+'] '+personagens[i]+'<br>'
    }
         
}

function removerEspecifico(){
    document.getElementById('div-nome').innerHTML=''
    for(let i=0;i<personagens.length;i++){
            if(personagens[i]==='Capitão Ganso'){
                personagens.splice(i,1)
            }
        document.getElementById('div-nome').innerHTML+='['+i+'] '+personagens[i]+'<br>'
    }
         
}

function removerEspecifico2(){
    document.getElementById('div-nome').innerHTML=''
    personagens.splice(4&&3,2)
    for(let i=0;i<personagens.length;i++){  
        document.getElementById('div-nome').innerHTML+='['+i+'] '+personagens[i]+'<br>'
    }
         
}
const personagens2 = [
    "Peba",
    "Bilu",
    "Waldisney",
    'GENéZio'
];
for(let i=0;i<personagens2.length;i++){
    document.getElementById('div-nome.2').innerHTML+='['+i+'] '+personagens2[i]+'<br>'
}

function addPadre(){
    document.getElementById('div-nome.2').innerHTML=''
    personagens2.push("Padre Ernan Buco")
    for(let i=0;i<personagens2.length;i++){
    document.getElementById('div-nome.2').innerHTML+='['+i+'] '+personagens2[i]+'<br>'
    }
}

function add2(){
    document.getElementById('div-nome.2').innerHTML=''
    personagens2.push("GENéZio","Kowalski")
    for(let i=0;i<personagens2.length;i++){
    document.getElementById('div-nome.2').innerHTML+='['+i+'] '+personagens2[i]+'<br>'
    }
}

function indice(){
    let uaudisnei=personagens2.indexOf('Waldisney')
    console.log(uaudisnei);
    
}
function existe(){
    let uaudisnei=personagens2.includes('Heitor Tuga')
    console.log(uaudisnei);
    
}
function reverter(){
    document.getElementById('div-nome.2').innerHTML=''
    personagens2.reverse()
    for(let i=0;i<personagens2.length;i++){
    document.getElementById('div-nome.2').innerHTML+='['+i+'] '+personagens2[i]+'<br>'
    }
}
function popsEshifts(){
    document.getElementById('div-nome.2').innerHTML=''
    personagens2.pop()
    personagens2.shift()
    for(let i=0;i<personagens2.length;i++){
    document.getElementById('div-nome.2').innerHTML+='['+i+'] '+personagens2[i]+'<br>'
    }
}