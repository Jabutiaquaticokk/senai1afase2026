

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
let parN=[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
function par(){
    document.getElementById('resultados2').innerHTML=' '
    for(let i=0;i<parN.length;i++){
        if(i==2){
            parN[2]=12
        }
        document.getElementById('resultados2').innerHTML+=parN[i]+' - '
        
    }
}
let fruits=['banana', 'maçã', 'uva']
function frutas(){
    document.getElementById('resultados2').innerHTML=' '
    for(let i=0;i<fruits.length;i++){
        document.getElementById('resultados2').innerHTML+=fruits[i]+', '

    }
}

function admorango(){
    fruits.push('morango')
}

function removeFruta(){
    console.log(fruits);
    
    fruits.splice(1,1)
    console.log(fruits);
}
let friends=['Pedro', 'Ronaldo', 'Genésio']
let fredis=['Yan', 'Rodolfo', 'Gui']
let ageFrends=[17,27,42,16,15]
function amigos(){
    for(let i=0;i<friends.length;i++){
        document.getElementById('resultados2').innerHTML+=friends[i]+', '+fredis[i]+', '

    }
}
function amigosIdade(){
    for(let i=0;i<ageFrends.length;i++){
        document.getElementById('resultados2').innerHTML+=ageFrends[i]+', '

    }
}

function amigosSoma(){
    let amigosSoma
    amigosSoma=ageFrends[0]+ageFrends[1]
    document.getElementById('resultados2').innerHTML+=ageFrends[0]+' + '+ageFrends[1]+' = '+amigosSoma
}

function mediaIdade(){
    let media=0
    let medidade
    for(let i=0;i<ageFrends.length;i++){
       media= media+ageFrends[i] 

    }
    medidade=media/ageFrends.length
    document.getElementById('resultados2').innerHTML=medidade
}

let compras=['Maçãs', 'Pão', 'Leite']

function listaCompras(){
    document.getElementById('resultados2').innerHTML=' '
    for(let i=0;i<compras.length;i++){
       document.getElementById('resultados2').innerHTML+=compras[i]+'-'

    }

}

function itemCompra(){
    compras.push('Sabonete')
    compras.push('Arroz')

}

function removeCompra(){
    compras.splice(2,1)
    let contemPao=compras.includes('Pão')
    console.log(contemPao)
}
let n=[]
function loop(){
    let i=-1
    let o=0
    do{
        i+=2
        n.push(i)
    }while(n.length<5)
    console.log(n);
    do{
        n[o]=n[o]*2
        o++
    }while(o<n.length)
    console.log(n);
    
}

let city=['Jaraguá', 'Joinville', 'Blumenau']
function santacatarina(){
    document.getElementById('resultados2').innerHTML='Talvez esteja em '+city[0]+', '+city[1]+' ou '+city[2]+'. Lá por Santa Catarina[...]'
}
   
//busca de indice
const personagens=['Guilherme', 'Lurian', 'Baiano','Lauan','Gabriel','Renan'];

const lista = document.getElementById("lista");
const seletor = document.getElementById("seletor");



for(let i=0;i<personagens.length;i++){;
    const nome=personagens[i];
    const celula=document.createElement('div');
    celula.className='celula';
    celula.id='item - '+i;
    celula.innerHTML=`<span class='valor'>${nome}</span><span class='idx'>[${i}]</span>`;
    lista.appendChild(celula);

    const opt=document.createElement('option');
    opt.value=nome
    opt.textContent=nome
    seletor.appendChild(opt)
    

}

function buscarIndice(){
    const celulas=document.querySelectorAll('.celula')
    for(let i=0;i<celulas.length;i++){
        celulas[i].classList.remove('destaque')
    }
        const nomeEscolhido=seletor.value

        let indice= -1
        let n=0
        while(n<personagens.length){
            if(personagens[n]===nomeEscolhido){
                indice=n;
                break;
            }n++;
        }
    

    document.getElementById('resultado').textContent=`'${nomeEscolhido}' está no indice ${indice}`;
   document.getElementById("item - " + indice).classList.add("destaque"); 
}

function addnome(){
    let novoNome= ''
   novoNome=document.getElementById('input').value
    console.log(novoNome);
    
    let i=personagens.length
    personagens.push(novoNome)
    document.getElementById("lista").innerHTML+=personagens[i]+'['+i+']'
    
    
}