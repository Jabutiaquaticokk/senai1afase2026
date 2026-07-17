// C >> CREATE 
// R >> READ 
// U >> UPDATE 
// D >> DELETE

// let dino={
//     nome: "T-Rex",
//     altura: 3.5,
//     cor: "Verde",
//     valor: 1000000
    

// }

// console.log(dino);
// const dinos=[]

// function teste(){
//     let dino={
//     nome: "T-Rex",
//     altura: 3.5,
//     cor: "Verde",
//     valor: 1000000
//     }

//     dinos.push(dino)
// }

const nomes=[{
    id: 1715688000001,
    nome: "Tiranossauro Rex",
    altura: "6.0",
    cor: "Verde e Marrom",
    valor: "500"
  },
  {
    id: 1715688000002,
    nome: "Tricerátops",
    altura: "3.0",
    cor: "Cinza",
    valor: "35"
  },
  {
    id: 1715688000003,
    nome: "Velociraptor",
    altura: "1.5",
    cor: "Bege com listras",
    valor: "250"
  },
  {
    id: 1715688000004,
    nome: "Braquiossauro",
    altura: "15.0",
    cor: "Verde claro",
    valor: "80"
  },
  {
    id: 1715688000005,
    nome: "Estegossauro",
    altura: "4.0",
    cor: "Marrom com placas alaranjadas",
    valor: "40"
  }]



function cadastrar(){
    
    const dino={
    id: Date.now(),
    nome: document.getElementById('input-nome').value,
    altura: document.getElementById('input-altura').value,
    cor: document.getElementById('input-cor').value,
    valor: document.getElementById('input-valor').value,
    }

    // document.getElementById('p-dados').innerHTML+='ID: #'+dino.id+'<br>NOME: '+dino.nome+'<br>ALTURA: '+dino.altura+'cm<br>COR: '+dino.cor+'<br>VALOR: R$'+dino.valor+'<br><hr>'
    
    nomes.push(dino)
    document.getElementById('input-nome').value=''
    document.getElementById('input-altura').value=''
    document.getElementById('input-cor').value=''
    document.getElementById('input-valor').value=''
    
    document.getElementById('input-nome').focus()
}

function mostrarDados(){
  document.getElementById('p-dados').innerHTML=''
    for(let i=0;i<nomes.length;i++){
        document.getElementById('p-dados').innerHTML+='<div class="card-dino"><h3>'+nomes[i].nome+'</h3>ID: <label>#'+nomes[i].id+'</label><br>'+'<ALTURA: '+nomes[i].altura+'cm<br>COR: '+nomes[i].cor+'<br>VALOR: R$'+nomes[i].valor+'.00<br><hr></div>'
    }
}

function removerDino(){
 
  
}