let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1
console.log(num1)


console.log(++num1 === num2--) // Precedencia prioriza ++num1 ao inves de num1++
console.log(num1 === num2)