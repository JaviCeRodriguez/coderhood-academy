let numero = 10

function funcioncita () {
    numero = 20

    console.log(numero)
    funcioncita()
}

funcioncita()

console.log(numero)

// 1 + 2 + 3 + 4
// n = 1
// n = n + 1