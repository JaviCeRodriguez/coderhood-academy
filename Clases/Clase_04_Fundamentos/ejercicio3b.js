/*
 Hacer una función que reciba como parámetro tres números enteros y que lo ordene de
mayor a menor
*/

const mayorToMenor = (a, b, c) => {
    return [a, b, c].sort((i, j) => j - i)
}

console.log(mayorToMenor(42, 3, 22))