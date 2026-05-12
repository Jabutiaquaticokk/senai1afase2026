function segredo(){
    alert("Você foi peixado🐟")
    open("https://spinning.fish/")
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

    document.getElementById("resultado1").innerHTML="Total devs: " + totalDEVS
}

function junin1(){
    alert("Bem vindo ao JS Salary Calculator!!")
    let salary, days
    let diary

    salary = Number(prompt("Insira seu salario Mensal: "))
    days = Number(prompt("Insira os dias trabalhados: "))
    diary = Number((salary/days))

    document.getElementById("resultado1").innerHTML="Seu salário diario é de R$ "+ diary.toFixed(2).replace('.',',')
}

function monika(){
    alert("Monika DEV")
    let n
    let chance

    n=Number(prompt("Quantas Vezes Usou o celular?"))
    chance = (0.1/(1+500* n))*100

    document.getElementById("resultado1").innerHTML="Sua chance é de " + chance.toFixed(5) + "%"
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
    
    document.getElementById("resultado1").innerHTML="Total Pontos: " + points

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
    
    document.getElementById("resultado1").innerHTML="Valor em Troca: R$ " + troca.toFixed(2)
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
    
    document.getElementById("resultado1").innerHTML="Saldo Final: R$ " + faltante.toFixed(2)

}

function tellesTransp(){
    alert("Bem vindo a Telles Transportes!!")

    let pesoBruto, tara
    let carga 

    pesoBruto=Number(prompt("Insira Peso Bruto(Kg):"))
    tara=Number(prompt("Insira Tara(Kg):"))
    carga=pesoBruto-tara
    

    document.getElementById("resultado1").innerHTML="Peso da Carga : " + carga + "Kg"
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
    
    document.getElementById("resultado1").innerHTML="<p>Sobraram "+vendas+" laranjas"+"</p><p>Foram vendidas " +(laranjasI-vendas)+ " laranjas</p>" 
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

    // document.getElementById("resultado2").innerHTML=("Venda por R$"+lucro+"<br>Recebera R$"+(lucro-obra))
    document.getElementById("resultado2").innerHTML="<p>Venda por R$"+lucro+"</p><p>Recebera R$"+(lucro-obra)+"</p>"

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

    document.getElementById("resultado2").innerHTML="Você Lucrou: R$ "+lucro.toFixed(2).replace('.',',')
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

    document.getElementById("resultado2").innerHTML="Lucro : R$"+lucro+"\nLucro PCT: " + pct.toFixed(2)+"%"
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

    document.getElementById("resultado2").innerHTML="Sobrou R$ "+sobra+" pra gastar esse mes ;>"
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
    document.getElementById("resultado2").innerHTML="Custo total: R$ "+custoTotal
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

    document.getElementById("resultado2").innerHTML="Frete: R$ "+frete
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
        document.getElementById("resultado4").innerHTML="Segue Viajem"
    }else{
        document.getElementById("resultado4").innerHTML="Não rola"
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
        document.getElementById("resultado4").innerHTML="Aprovado para o navio!"
    }else if(sabeNadar=="não" && temRecmnds=="sim"){
            document.getElementById("resultado4").innerHTML="Aprovado sob recomendação. Monitorar nas primeiras viagens"
        }else{
            document.getElementById("resultado4").innerHTML="Reprovado. Volte quando estiver mais preparado para o mar."
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
        document.getElementById("resultado4").innerHTML="Fumaça liberada. Que comecem os mistérios!"
    }else {
        document.getElementById("resultado4").innerHTML="Fumaça bloqueada. Aguardar condições ideais."
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
        document.getElementById("resultado3").innerHTML="Maior de Idade"
    }else{
        document.getElementById("resultado3").innerHTML="Menor de idade"
    }
    
}

function guess(){
    let numero=Math.ceil(Math.random()*10)
    let chute 
    chute=Number(prompt("Diga um Número"))
    if(chute==numero){
        document.getElementById("resultado3").innerHTML="Acertou"
    }else{
        document.getElementById("resultado3").innerHTML="Errooou"
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
    document.getElementById("resultado3").innerHTML=(diaS)
}

function parImpar(){
    let num1=Number(prompt("Digite o número"))
    let resposta
    if(num1%2 === 0){
        resposta="par"
    }else{
        resposta="impar"
    }
    document.getElementById("resultado3").innerHTML=(resposta)
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

    document.getElementById("resultado3").innerHTML=(result) 
}

function numeros(){
    let nA, nB 

    nA=Number(prompt("Insira o Primeiro Número"))
    nB=Number(prompt("Insira o Segundo Número"))

    if(nA>nB){
        document.getElementById("resultado3").innerHTML= (nA+" é maior")
    }else {
        document.getElementById("resultado3").innerHTML= (nB+" é maior")
    }
}

//Atividades refatoradas

function tellesRef(){
    let peso, distance, volume, frete
    //entrada
    peso=Number(prompt("Insira o Peso"))
    distance=Number(prompt("Insira a Distância"))
    volume=Number(prompt("Insira o volume"))
    
    //process
    if(peso==0||distance==0||volume==0){
        alert("Valores Invalidos")
    }else{
    frete=15+(2*peso)+(0.05*distance)+(10*volume)
    }
    //saidas

    document.getElementById("resultado6").innerHTML="Frete: R$ "+frete
}

function betteRef(){
    //info
    let fartura
    let premio, presente, comicoes
    let lucro, meta, mensage
    //entr
    meta=Number(prompt("Qual a meta do Mês?"))
    fartura=Number(prompt("Quanto Faturou Hoje?"))
    premio=Number(prompt("Quanto pagou em premiações?"))
    presente=Number(prompt("Quanto Pagou as autoridades?"))
    comicoes=Number(prompt("Quanto pagou aos funcionarios?"))
    //proc
    
    lucro=fartura-premio-presente-comicoes
    if(meta>=lucro){
        mensage="Bateu a Meta"
    }else{
        mensage="Não bateu a Meta"
    }
    //outr

    document.getElementById("resultado6").innerHTML="Fartura: R$"+fartura.toFixed(2).replace('.',',')+"<br>"+"Premiações: R$"+premio.toFixed(2).replace('.',',')+"<br>"+"Presentes: R$"+presente.toFixed(2).replace('.',',')+"<br>"+"Comissões: R$"+comicoes.toFixed(2).replace('.',',')+"<br>"+"Lucro: R$ "+lucro.toFixed(2).replace('.',',')+"<br>"+mensage
}

function pepequenoRef(){
    alert("Bem Vindo a Pé Pequeno!")
    //Info
    let preco, qntd
    let troca
    
    //Entrada
    qntd = Number(prompt("Insira Quantidade: "))
    preco = Number(prompt("Insira Valor: R$ "))
    //Process
    troca = preco * qntd
    //Saida
    if(qntd==0||preco==0){
        document.getElementById("resultado6").innerHTML="Valores invalidos"
    }else if(qntd>100){
        document.getElementById("resultado6").innerHTML="Entrar em contato com a loja" 
    }else{
        document.getElementById("resultado6").innerHTML="Valor em Troca: R$ " + troca.toFixed(2)
    }
}

function guiPortoesRef(){
    //Info
    let clt, pj, estagiario
    let totalDEVS, regra
    //Entrada
    clt = Number(prompt("Quantos CLT's tem na equipe?"))
    pj = Number(prompt("Quantos PJ's tem na equipe?"))
    estagiario = Number(prompt("Quantos Estagiarios tem na Equipe?"))
    //Processo
    totalDEVS = clt + pj + estagiario
    if(clt>=(pj+estagiario)){
        regra=" Dentro das regularidades"
    }else{
        regra=" Precisamos de uma maior força CLT"
    }
    //Saida

    document.getElementById("resultado6").innerHTML="Total devs: " + totalDEVS+"<br>"+" CLTs: "+clt+"<br>"+" PJs: "+pj+"<br>"+" Estagiários: "+estagiario+"<br>"+regra
}

function pomarRef(){
    //Info
    let laranjasI, laranjasF
    let vendas, aviso
    //Entr
    laranjasI = Number(prompt("Quantas laranjas foram enviadas?"))
    laranjasF = Number(prompt("Quantas laranjas foram Vendidas?"))
    //Procs
    vendas = laranjasI - laranjasF
    if(vendas==0){
        aviso="O estoque deve ser maior no próximo dia."
    }else{
        aviso="Estoque Suficiente."
    }
    //Saida
    
    document.getElementById("resultado6").innerHTML="Sobraram "+vendas+" laranjas"+"<p>Foram vendidas " +(laranjasI-vendas)+ " laranjas</p>"+"<br>"+aviso
}

function nambucoRef(){
     //Info
    let gastos
    let donate, dizimo
    let faltante, aviso
    //Enter
    gastos = Number(prompt("Quanto foi gasto esse mês?"))
    donate = Number(prompt("Quanto Recebemos de doações?"))
    dizimo = Number(prompt("Quanto foi recebido de Dizimo?"))
    //Procs
    faltante = (donate + dizimo) - gastos
    if(faltante<gastos){
        aviso="Lembrarais para que vossos irmãos contribuam."
    }else{
        aviso="Meta atingida, divida paga."
    }
    //Leave
    
    document.getElementById("resultado6").innerHTML="Saldo Final: R$ " + faltante.toFixed(2)+"<br>"+aviso
}

//Desafios

function starUber(){
    //info
    let distance
    let time, minute, hour, days, months, years
    //entrada
    distance=Number(prompt("Insira a distância (km)"))
    
    //processo
    time=distance/300000
    
    //saída
    document.getElementById("resultado5").innerHTML= "Tempo esperado= "+time.toFixed(3)+"s"
    //2a etapa
    if(time>=60){
       minute=time/60
       document.getElementById("resultado5").innerHTML+= "<br>"+" ou= "+minute.toFixed(2)+"min"
    }
    if(time>=60){
        hour=minute/60
        
       document.getElementById("resultado5").innerHTML+= "<br>"+" ou= "+hour.toFixed(2)+"h"
    }
    if(hour>=24){
        days=hour/24
        document.getElementById("resultado5").innerHTML+= "<br>"+" ou= "+days.toFixed(0)+" dias"
    }
    if(days>30){
        months=days/30
        document.getElementById("resultado5").innerHTML+= "<br>"+" ou= "+months.toFixed(0)+" meses"
    }
    if(months>12){
        years=months/12
        document.getElementById("resultado5").innerHTML+= "<br>"+" ou= "+years.toFixed(0)+" anos"
    }
}

function garcom(){
    let prestacao, salario, emprestimo
    let pctSalario
    
    salario=Number(prompt("Insira seu salário"))
    prestacao=Number(prompt("Quantas prestações deseja pagar?"))
    emprestimo=Number(prompt("Valor do emprestimo"))
    if(salario<=0 || prestacao<=0 || emprestimo<=0){
        document.getElementById("resultado5").innerHTML= "Valores Inválidos"
    }

    pctSalario=salario*0.3

    if(emprestimo<=pctSalario){
        document.getElementById("resultado5").innerHTML="Empréstimo Concedido"
    }else {
        document.getElementById("resultado5").innerHTML= "Empréstimo Recusado"
    }
}

function garcomBonus(){
    let prestacao, salario, emprestimo
    let pctSalario, aPagar
    let juros 

    salario=Number(prompt("Insira seu salário"))
    alert("Será aplicado 2% de Juros sob o Valor do Empréstimo")
    prestacao=Number(prompt("Quantas prestações deseja pagar?"))
    emprestimo=Number(prompt("Valor do emprestimo"))
    if(salario<=0 || prestacao<=0 || emprestimo<=0){
        document.getElementById("resultado5").innerHTML= "Valores Inválidos"
    }
    juros=(emprestimo*0.02)*prestacao
    pctSalario=salario*0.3
    if(prestacao>1){
        aPagar=emprestimo+juros
    }else{
        aPagar=emprestimo
    }
    if(emprestimo<=pctSalario){
        document.getElementById("resultado5").innerHTML="Empréstimo Concedido<p>"+" A pagar: R$"+aPagar+"</p>"
    }else {
        document.getElementById("resultado5").innerHTML= "Empréstimo Recusado, Valor Ultrapassa o limite"
    }
}

