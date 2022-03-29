function criarProduto(nome, preco) {
    return {
        nome: nome,
        preco: preco
    }
}

console.log(criarProduto('Telefone', 1900))
console.log(criarProduto('Computador', 3500))