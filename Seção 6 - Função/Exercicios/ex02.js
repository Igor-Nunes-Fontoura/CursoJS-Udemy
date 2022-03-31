function tipoTriangulo(a = 0, b = 0, c = 0) {
    let tipoDoTriangulo
    if (a === b && b === c) {
        tipoDoTriangulo = 'Equilátero'
    } else if (a !== b && b !== c && a !== c) {
        tipoDoTriangulo = 'Escaleno'
    } else {
        tipoDoTriangulo = 'Isósceles'
    }

    console.log(`O tipo desse triangulo é ${tipoDoTriangulo}`)
}

tipoTriangulo(2, 1, 3)