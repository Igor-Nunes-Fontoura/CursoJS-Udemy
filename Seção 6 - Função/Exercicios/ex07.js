function bhaskara(a = 0, b = 0, c = 0) {
    let delta = b ** 2 - 4 * a * c
    if (delta < 0) {
        console.log('Delta é negativo')
    } else {
        let raiz1 = (-b + Math.sqrt(delta)) / (2 * a)
        let raiz2 = (-b - Math.sqrt(delta)) / (2 * a)
        console.log(`As raizes são ${raiz1} e ${raiz2}`)
    }
}

bhaskara(2, 12, -14)