function real(partes, ...valores) {
    const resultado = []
    valores.forEach((valor, indicec) => {
        valor = isNaN(valores) ? valor : `R$${valor.toFixed(2)}`
        resultado.push(partes[indice], valor)
    })
    return resultado.join('')
}

