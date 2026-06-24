function start(){
    let dia=Number(prompt('Quantos dias possui a Sprint?'))
    let bugs=0
    let totalBugs=0
    let mediaBugs=0
    let maisBug=0
    let diaMais=0
    let menosBug=0
    let diaMenos=0
    let diazero=0
    let diadez=0
    for(let i=1;i<=dia;i++){
        
        
        bugs=Number(prompt('Quantos bugs foram encontrados?'))
        totalBugs=totalBugs+bugs
        document.getElementById('rel').innerHTML+='Dia '+i+' | '+bugs+' bugs encontrados '+'<br>'
        if(bugs>maisBug){
            maisBug=bugs
            diaMais=i
        }
        if(menosBug>bugs||menosBug<1){
            menosBug=bugs
            diaMenos=i
        }
        if(bugs<1){
            diazero++
        }
        if(bugs>10){
            diadez++
        }
        if(i==dia){
            document.getElementById('rel').innerHTML+='================================='+'<br>'
            document.getElementById('rel').innerHTML+=totalBugs+' bugs encontrados no total'+'<br>'
            mediaBugs=totalBugs/dia
            document.getElementById('rel').innerHTML+="Média de bugs: "+mediaBugs+'<br>'+'Dia com mais bugs: Dia '+diaMais+' | '+maisBug+' bugs<br>'+'Dia com menos bugs: Dia '+diaMenos+' | '+menosBug+' bugs<br>'+'Dias com mais de 10 bugs: '+diadez+'<br>'+'Dias sem bugs: '+diazero
        }
    }
}