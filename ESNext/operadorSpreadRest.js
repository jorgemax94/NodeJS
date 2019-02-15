// operador ... rest (juntar)//spread(separar)
//usar rest com parametros de função

//usar spread com ojeto
const funcionario = {
    nome: 'Maria',
    salario: 12349.99
}
const clone = {
    ativo: true,
    ...funcionario
}

console.log(clone)

//usar spread com array
const grupoA = ['João', 'Pedro', 'Glória']
const grupoB = ['Maria', 'Rafaela', ...grupoA]
console.log(grupoB)