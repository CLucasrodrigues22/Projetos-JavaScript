// operador ... rest(juntar)/spread(espalhar)
// usar rest ocm parâmetro de função

// usar spread com objeto
const funcionario = { nome: 'Maria', salario: 12444.00 }
const clone = { ativo: true, ...funcionario }
console.log(clone)

// usar spread com array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Mario', ...grupoA, 'Lucas']
console.log(grupoFinal)

