function start(){
    let dia=Number(prompt('Quantos dias possui a Sprint?'))
    let bugs=0
    let totalBugs=0
    let mediaBugs=0
    for(let i=1;i<=dia;i++){
        
        
        bugs=Number(prompt('Quantas tarefas foram concluidas?'))
        totalBugs=totalBugs+bugs
        document.getElementById('rel').innerHTML+='Dia '+i+' | '+bugs+' bugs encontrados '+'<br>'
        
        if(i==dia){
            document.getElementById('rel').innerHTML+='================================='+'<br>'
            document.getElementById('rel').innerHTML+=totalBugs+' bugs encontrados no total'+'<br>'
            mediaBugs=totalBugs/dia
            document.getElementById('rel').innerHTML+="Média de bugs: "+mediaBugs+'<br>'
        }
    }
}