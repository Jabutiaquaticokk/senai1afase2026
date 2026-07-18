// C >> CREATE 
// R >> READ 
// U >> UPDATE 
// D >> DELETE

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

function limparForm(){
 document.getElementById('input-nome').value=''
  document.getElementById('input-altura').value=''
  document.getElementById('input-cor').value=''
  document.getElementById('input-valor').value=''
  document.getElementById('input-id').value=''
  
}

function pesquisar(){
  document.getElementById('p-dados').innerHTML=''
  let nomeProcurado=document.getElementById('input-nome').value
  for(let i=0;i<nomes.length;i++){
      if(nomeProcurado==nomes[i].nome){
      document.getElementById('input-nome').value=nomes[i].nome
      document.getElementById('input-altura').value=nomes[i].altura
      document.getElementById('input-cor').value=nomes[i].cor
      document.getElementById('input-valor').value=nomes[i].valor
      document.getElementById('input-id').value=nomes[i].id
    }
  }
}

function salvar(){
  let id=Number(document.getElementById('input-id').value)
  for(let i=0;i<nomes.length;i++){
    if(id==nomes[i].id){
      nomes[i].nome=document.getElementById('input-nome').value
      nomes[i].altura=document.getElementById('input-altura').value
      nomes[i].cor=document.getElementById('input-cor').value
      nomes[i].valor=document.getElementById('input-valor').value
      nomes[i].id=document.getElementById('input-id').value
    }
  }
  mostrarDados()
  limparForm()
}

function removerDino(){
  let id=Number(document.getElementById('input-id').value)
  for(let i=0;i<nomes.length;i++){
    if(id==nomes[i].id){
      nomes.splice(i,1)
    }
    
    
    
  }
  mostrarDados()
  limparForm()
  
}