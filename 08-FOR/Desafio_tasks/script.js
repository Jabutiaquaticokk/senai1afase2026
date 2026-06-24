function start(){
    let dia=Number(prompt('Quantos dias possui a Sprint?'))
    let tasks=0
    let n=Number()
    for(let i=1;i<=dia;i++){
        
        
        tasks=Number(prompt('Quantas tarefas foram concluidas?'))
        n=n+tasks
        document.getElementById('rel').innerHTML+='Dia '+i+' | '+tasks+' Tarefa(s) concluidas '+'<br>'
        
        if(i==dia){
            document.getElementById('rel').innerHTML+='================================='+'<br>'
            document.getElementById('rel').innerHTML+=i+' dia(s) trabalhado(s) | '+n+' tarefas concluida(s)'
        }
    }
    
}