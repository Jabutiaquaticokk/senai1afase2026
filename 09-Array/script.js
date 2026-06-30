let idades=[18,20,12,35,14,15,38,57,67,99,94]
let precos=[]
const produtos = [
  "Smartphone",
  "Notebook",
  "Teclado Mecânico",
  "Mouse Sem Fio",
  "Monitor 4K",
  "Cadeira Gamer",
  "Mesa de Escritório",
  "Lâmpada Inteligente",
  "Cabo HDMI",
  "Fone de Ouvido Bluetooth",
  "Caixa de Som",
  "Smart TV 55 polegadas",
  "Micro-ondas",
  "Geladeira Frost Free",
  "Fogão 4 Bocas",
  "Máquina de Lavar",
  "Aspirador de Pó Robô",
  "Ferro de Passar",
  "Liquidificador",
  "Cafeteira Elétrica",
  "Ventilador de Mesa",
  "Ar-condicionado Split",
  "Roteador Wi-Fi 6",
  "Pen Drive 64GB",
  "HD Externo 1TB",
  "SSD 512GB",
  "Placa de Vídeo",
  "Memória RAM 16GB",
  "Processador",
  "Placa Mãe",
  "Fonte de Alimentação 600W",
  "Gabinete ATX",
  "Webcam Full HD",
  "Microfone Condensador",
  "Tripé para Câmera",
  "Câmera DSLR",
  "Cartão de Memória 128GB",
  "Mochila para Notebook",
  "Camiseta Básica",
  "Calça Jeans",
  "Tênis de Corrida",
  "Relógio Smartwatch",
  "Óculos de Sol",
  "Perfume Masculino",
  "Creme Hidratante Facial",
  "Shampoo Anticaspa",
  "Condicionador",
  "Sabonete Líquido",
  "Pasta de Dente Clareadora",
  "Escova de Dente Elétrica",'Chevette Sl 2.0'
];
function array00(){
    
    
    for(let i=0;i<idades.length;i++){
        console.log('Idade: '+idades[i]);
        
    }
    
    
}

function precose(){
    let n=Math.ceil(Math.random()*100)
    precos.push(n)
    console.log(precos);
    document.getElementById('precos').innerHTML=' '
    for(let i=0;i<precos.length;i++){
        document.getElementById('precos').innerHTML+=precos[i]+'<br>'
        
    }
        
    
}

function produto(){
    for(let i=0;i<produtos.length;i++){
        document.getElementById('precos').innerHTML+=produtos[i]+'<br>'
    }

}