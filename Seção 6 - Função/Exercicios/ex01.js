function imprimirCalculo(n1 = 0, n2 = 0) {
    const soma = n1 + n2
    console.log(`A soma entre ${n1} e ${n2} é igual a ${soma}`)

    const subtracao = n1 - n2
    console.log(`A subtração entre ${n1} e ${n2} é igual a ${subtracao}`)

    const multiplicacao = n1 * n2
    console.log(`A multiplicação entre ${n1} e ${n2} é igual a ${multiplicacao}`)

    const divisao = n1 / n2
    console.log(`A divisão entre ${n1} e ${n2} é igual a ${divisao.toFixed(1)}`)
}

imprimirCalculo(4, 6)