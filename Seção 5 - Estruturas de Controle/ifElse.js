const imprimiResultado = function(nota) {
    if(nota >= 7) {
        console.log('Aprovado!')
    } else {
        console.log('Reprovado!')
    }
}

imprimiResultado(6)
imprimiResultado(10)
imprimiResultado('Epa!') // Cuidado!!!