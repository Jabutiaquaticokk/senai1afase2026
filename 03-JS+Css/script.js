function segredo(){
    alert("67")
    open("https://youtu.be/_P5vR9pz5Hc?si=2uv-hnz4ppOocHjx")
}
// Atividades

// Nivel Fácil
function guilhermePortoes(){
    alert("Bem vindo ao RH Guilherme Portões!!")
    //Info
    let clt, pj, estagiario
    let totalDEVS
    //Entrada
    clt = Number(prompt("Quantos CLT's tem na equipe?"))
    pj = Number(prompt("Quantos PJ's tem na equipe?"))
    estagiario = Number(prompt("Quantos Estagiarios tem na Equipe?"))
    //Processo
    totalDEVS = clt + pj + estagiario
    //Saida

    document.getElementById("resultado").innerHTML="Total devs: " + totalDEVS
}

function junin1(){
    alert("Bem vindo ao JS Salary Calculator!!")
    let salary, days
    let diary

    salary = Number(prompt("Insira seu salario Mensal: "))
    days = Number(prompt("Insira os dias trabalhados: "))
    diary = Number((salary/days))

    document.getElementById("resultado").innerHTML="Seu salário diario é de R$ "+ diary.toFixed(2)
}

function monika(){
    alert("Monika DEV")
    let n
    let chance

    n=Number(prompt("Quantas Vezes Usou o celular?"))
    chance = (0.1/(1+500* n))*100

    document.getElementById("resultado").innerHTML="Sua chance é de " + chance.toFixed(5) + "%"
}

function peba(){
    // Info
    let wins, draw
    let points
    // Read
    wins = prompt("Número de vitorias: ")
    wins = Number(wins)
    draw = prompt("Empates: ")
    draw = Number(draw)
    // process
    points = wins * 3 + draw
    // saidas
    
    document.getElementById("resultado").innerHTML="Total Pontos: " + points

}

function pepequeno(){
    alert("Bem Vindo a Pé Pequeno!")
    //Info
    let preco, qntd
    let troca
    
    // 67
    //Entrada
    qntd = Number(prompt("Insira Quantidade: "))
    preco = Number(prompt("Insira Valor: R$ "))
    //Process
    troca = preco * qntd
    //Saida
    
    document.getElementById("resultado").innerHTML="Valor em Troca: R$ " + troca.toFixed(2)
}

function peErnam(){
    //Info
    let gastos
    let donate, dizimo
    let faltante
    //Enter
    gastos = Number(prompt("Quanto foi gasto esse mês?"))
    donate = Number(prompt("Quanto Recebemos de doações?"))
    dizimo = Number(prompt("Quanto foi recebido de Dizimo?"))
    //Procs
    faltante = (donate + dizimo) - gastos
    //Leave
    
    document.getElementById("resultado").innerHTML="Saldo Final: R$ " + faltante.toFixed(2)

}

function tellesTransp(){
    alert("Bem vindo a Telles Transportes!!")

    let pesoBruto, tara
    let carga 

    pesoBruto=Number(prompt("Insira Peso Bruto(Kg):"))
    tara=Number(prompt("Insira Tara(Kg):"))
    carga=pesoBruto-tara
    

    document.getElementById("resultado").innerHTML="Peso da Carga : " + carga + "Kg"
}

function trajPomar(){
        alert("Bem Vindo a Trajeto Pomar!!!")
    //Info
    let laranjasI, laranjasF
    let vendas
    //Entr
    laranjasI = Number(prompt("Quantas laranjas foram enviadas?"))
    laranjasF = Number(prompt("Quantas laranjas foram Vendidas?"))
    //Procs
    vendas = laranjasI - laranjasF
    //Saida
    
    document.getElementById("resultado").innerHTML="<p>Sobraram "+vendas+" laranjas"+"</p><p>Foram vendidas " +(laranjasI-vendas)+ " laranjas</p>" 
}

// Nivel Médio

function precoBrique(){
    //info
    let obra, lucro
    //entr
    obra=Number(prompt("Quanto gastou na obra?"))
    //proc
    lucro=obra*3
    //exit
    alert("Venda por R$"+lucro+"\nRecebera R$"+(lucro-obra))
    console.log("Venda por R$"+lucro+"\nRecebera R$"+(lucro-obra))

    // document.getElementById("resultado").innerHTML=("Venda por R$"+lucro+"<br>Recebera R$"+(lucro-obra))
    document.getElementById("resultado").innerHTML="<p>Venda por R$"+lucro+"</p><p>Recebera R$"+(lucro-obra)+"</p>"

}

function betteBets(){

    //info
    let fartura
    let premio, presente, comicoes
    let lucro
    //entr
    fartura=Number(prompt("Quanto Faturou Hoje?"))
    premio=Number(prompt("Quanto pagou em premiações?"))
    presente=Number(prompt("Quanto Pagou as autoridades?"))
    comicoes=Number(prompt("Quanto pagou aos funcionarios?"))
    //proc
    lucro=fartura-premio-presente-comicoes
    //outr

    document.getElementById("resultado").innerHTML="Você Lucrou: R$ "+lucro
}

function cptGanso(){
    //info
    let suply, ticket, items
    let lucro, pct
    //entr
    suply=Number(prompt("Gastos com Suprimentos/Mercadorias?"))
    ticket=Number(prompt("Lucro com ingressos?"))
    items=Number(prompt("Lucro com Itens?"))
    //proc
    lucro=(ticket+items)-suply
    pct=(lucro/suply)*100
    //exit

    document.getElementById("resultado").innerHTML="Lucro : R$"+lucro+"\nLucro PCT: " + pct.toFixed(2)+"%"
}

function manoJuca(){
    //info
    let moradia,luz,agua,internet,stream,gas,tel,outros
    let salario, sobra
    //entr
    salario=Number(prompt("Quanto recebeu este mês?"))
    moradia=Number(prompt("Aluguel?"))
    luz=Number(prompt("Luz?"))
    agua=Number(prompt("Agua?"))
    internet=Number(prompt("Internet?"))
    stream=Number(prompt("streaming?"))
    gas=Number(prompt("Com o Chevetão?"))
    tel=Number(prompt("Telefone?"))
    outros=Number(prompt("Outros gastos?"))
    //proc
    sobra=salario-(moradia+luz+agua+internet+stream+gas+tel+outros)
    //exit

    document.getElementById("resultado").innerHTML="Sobrou R$ "+sobra+" pra gastar esse mes ;>"
}

function sarumano(){
     //info
    let shows, bombas = 7
    let precoUnit, custoTotal
    //entr
    shows=Number(prompt("Quantos shows Ira Realizar?"))
    precoUnit=Number(prompt("Qual valor das bombas?"))
    //proc
    custoTotal=(precoUnit*bombas)*shows
    //exit
    document.getElementById("resultado").innerHTML="Custo total: R$ "+custoTotal
}

function tellesPreco(){
     
    //info
    let peso, distance, volume, frete
    //entrada
    peso=Number(prompt("Insira o Peso"))
    distance=Number(prompt("Insira a Distância"))
    volume=Number(prompt("Insira o volume"))
    //process
    frete=15+(2*peso)+(0.05*distance)+(10*volume)
    //saidas

    document.getElementById("resultado").innerHTML="Frete: R$ "+frete
}
//SQ006

function verificarProvis(){
    //info
    let marujos, food
    let foodperppl
    //entr
    marujos=Number(prompt("Quantidades de marujos"))
    food=Number(prompt("Quanto de comida estão Levando?"))
    //proc
    foodperppl=food/marujos
    //exit
   
    if(marujos>=10 && foodperppl>=1.5){
        document.getElementById("resultado").innerHTML="Segue Viajem"
    }else{
        document.getElementById("resultado").innerHTML="Não rola"
    }

}

function testesGanso(){
    //info
    let age, sabeNadar, temRecmnds
    //entr
    sabeNadar = prompt("Sabe nadar?")
    age=Number(prompt("Qual sua Idade?"))
    temRecmnds=prompt("Tens Recomendações?")
    //proc
    if(age>=16 && sabeNadar=="sim"){
        document.getElementById("resultado").innerHTML="Aprovado para o navio!"
    }else if(sabeNadar=="não" && temRecmnds=="sim"){
            document.getElementById("resultado").innerHTML="Aprovado sob recomendação. Monitorar nas primeiras viagens"
        }else{
            document.getElementById("resultado").innerHTML="Reprovado. Volte quando estiver mais preparado para o mar."
        }

    

}

function misticSmoke(){
    //info
    let windSpeed, kids
    //entr
    kids=Number(prompt("Crianças Pequenas?"))
    windSpeed=Number(prompt("Velocidade do Vento:"))
    //exit
    if(kids==0||windSpeed>=0.5){
        document.getElementById("resultado").innerHTML="Fumaça liberada. Que comecem os mistérios!"
    }else {
        document.getElementById("resultado").innerHTML="Fumaça bloqueada. Aguardar condições ideais."
    }
}

function deslocamento(){
    let som, figurino


}

//SQ002


function verificarIdade(){
    let idade

    idade=Number(prompt("Insira sua Idade:"))

    if(idade>=18){
        document.getElementById("resultado").innerHTML="Maior de Idade"
    }else{
        document.getElementById("resultado").innerHTML="Menor de idade"
    }
    
}

function guess(){
    let numero=Math.ceil(Math.random()*10)
    let chute 
    chute=Number(prompt("Diga um Número"))
    if(chute==numero){
        document.getElementById("resultado").innerHTML="Acertou"
    }else{
        document.getElementById("resultado").innerHTML="Errooou"
    }
    
}

function week(){
    let diaS, numero 

    numero=Number(prompt("Insira um número (1-7)"))
    if(numero==1){
       diaS="Domingo" 
    }else if(numero==2){
        diaS="Segunda"
    }else if(numero==3){
        diaS="Terça"
    }else if(numero==4){
        diaS="Quarta"
    }else if(numero==5){
        diaS="Quinta"
    }else if(numero==6){
        diaS="Sexta"
    }else if(numero==7){
        diaS="Sábado"
    }else{
       diaS="A semana só tem 7 dias"  
    }
    document.getElementById("resultado").innerHTML=(diaS)
}

function parImpar(){
    let num1=Number(prompt("Digite o número"))
    let resposta
    if(num1%2 === 0){
        resposta="par"
    }else{
        resposta="impar"
    }
    document.getElementById("resultado").innerHTML=(resposta)
}

function calculadora(){
    let n1, n2, result
    let opera
    n1=Number(prompt("Insira o primeiro numero"))
    n2=Number(prompt("Insira o Segundo numero"))
    opera=prompt("Insira uma  operação ( + , - , * , / )")

    if(opera=="+"){
        result=(n1+n2)
    }else if(opera=="-"){
        result=(n1-n2)
    }else if(opera=="*"){
        result=(n1*n2)
    }else if(opera=="/"){
        result=(n1/n2)
    }else{
        alert("Nenhum número/operação Inserida!")
    }

    document.getElementById("resultado").innerHTML=(result) 
}

function numeros(){
    let nA, nB 

    nA=Number(prompt("Insira o Primeiro Número"))
    nB=Number(prompt("Insira o Segundo Número"))

    if(nA>nB){
        document.getElementById("resultado").innerHTML= (nA+" é maior")
    }else {
        document.getElementById("resultado").innerHTML= (nB+" é maior")
    }
}