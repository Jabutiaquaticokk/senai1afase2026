alert("Bem vindo ao JS Salary Calculator!!")
let salary, days
let diary

salary = Number(prompt("Insira seu salario Mensal: "))
days = Number(prompt("Insira os dias trabalhados: "))
diary = Number((salary/days))
alert("Seu salário diario é de R$ "+ diary.toFixed(2))