const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

var chineses;
var menorSalario;

axios.get(url).then(response => {
    const funcionarios = response.data;

    chineses = funcionarios.filter(nacionalidadeChinesaEMulher);


    menorSalario = chineses.reduce((total, salario) => {
        if (total.salario < salario.salario) {
            return total;
        } else {
            return salario;
        }
    })
    console.log(menorSalario)
})



var nacionalidadeChinesaEMulher = (x) => {
    return x.pais === 'China' &&
        x.genero === 'F';
}