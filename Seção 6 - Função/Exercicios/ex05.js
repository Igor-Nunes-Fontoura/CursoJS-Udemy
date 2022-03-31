function imprimir(n1, n2) {
    const res = n1 + n2
    return `R$${res.toFixed(2)}`
}

console.log(imprimir(0.1, 0.2))