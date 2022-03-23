// Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 3, 4, 5, 6, 7, 8)
imprimirSoma()

// Função com retorno
function soma(a = 0, b = 0) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())