function imprimirDiv(dividendo = 0, divisor = 0) {
    resultado = dividendo / divisor
    resDiv = dividendo % divisor
    console.log(`A divisão entre ${dividendo} e ${divisor} é igual a ${resultado} e o resto da divisão é ${resDiv}`)
}

imprimirDiv(10, 2)