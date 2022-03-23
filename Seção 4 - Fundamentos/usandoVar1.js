{
    {
        {
            {
                var sera = 'Sera???'
            }
        }
    }
}
console.log(sera) // Variavel no escopo global

function teste() {
    var local = 123
}
teste()
// console.log(local) ERRO! Variavel no escopo da função