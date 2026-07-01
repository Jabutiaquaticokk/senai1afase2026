

const nomes=[
  "Lúcio Fernando",
  "Rivaldo Jesus",
  "Mônica",
  "Capitão Ganso",
  "Peba",
  "Gill Bates",
  "Dona Bete",
  "Kowalski",
  "Heitor Tuga",
  "Junin",
  "Padre Ernan Buco",
  "GENéZio",
  "Bilu",
  "Waldisney",
  "Tião",
  'Ronaldo'
];

const produtos = [
  "Smartphone",
  "Notebook",
  "Teclado Mecânico",
  "Mouse Sem Fio",
  "Monitor 4K",
  "Cadeira Gamer",
];

let precos=[1250,3500,250,100,1200,500]
let poproduto
function produto(){
    document.getElementById('precos').innerHTML=' '
    for(let i=0;i<produtos.length;i++){
        let j=i+1
        document.getElementById('precos').innerHTML+='<p class="produtos">'+j+'° :'+produtos[i]+'</p>'
    }

}
function produtoePreco(){
    document.getElementById('precos').innerHTML=' '
    for(let i=0;i<produtos.length;i++){
        let j=i+1
        document.getElementById('precos').innerHTML+='<p>'+j+'° :'+produtos[i]+': R$ '+precos[i].toFixed(2).replace('.',',')+'</p>'
    }
    
}

function produtoPop(){
    poproduto=produtos.pop()
    precos.pop()
    console.log(poproduto);
    console.log(produtos);
    
}

function adproduto(){
    let produto, preco
    do{
        produto=prompt('Insira um Produto')
    }while(produto=='')
    do{
        preco=Number(prompt('Insira o preço do produto'))
    }while(preco<=0)
        produtos.push(produto)
        precos.push(preco)
}

function temporada(){
    for(let melancia=0;melancia<=precos.length;melancia++){
        precos[melancia]=precos[melancia]*4
        
        
    }
}

//exercicios da semana

let semana=['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo']

function diadasemana(){
    document.getElementById('resultados').innerHTML=' '
    for(let i=0;i<semana.length;i++){
        document.getElementById('resultados').innerHTML+=semana[i]+', '

    }
}

function feriado(){
    semana.push('Feriado')
}

function remover(){
    semana.pop()
}