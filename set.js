// não aceita repetição , não é indexado
const times = new Set()
times.add('Flamengo')
times.add('São Paulo').add('Palameiras')
times.add('Corinthians').add('Vasco')

console.log(times)
console.log(times.size)

console.log(times.has('flamengo'))
console.log(times.has('Flamengo'))
times.delete('Flamengo')
console.log(times.has('Flamengo'))

const nomes = ['Raquel', 'Joana', 'Luan']
const nomeSet = new Set(nomes)
console.log(nomeSet)