function jurosSimples(base, taxa, tempo) {
    for (let c = 1; c <= tempo; c++) {
        let res = base * taxa / 100
        console.log(res.toFixed(2))
    }
}

function jurosCompostos(base, taxa, tempo) {
    for (let c = 1; c <= tempo; c++) {
        let res = base * taxa / 100
        console.log(res.toFixed(2))
        base += base * taxa / 100
    }
}

jurosSimples(1000, 10, 3)
console.log('--------')
jurosCompostos(1000, 10, 3)