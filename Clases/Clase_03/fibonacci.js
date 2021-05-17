/*
En matemáticas, la sucesión o serie de Fibonacci es la
siguiente sucesión infinita de números naturales:
0 , 1 , 1 , 2 , 3 , 5 , 8 , 13 , 21
La sucesión comienza con los números 0 y 1,a partir de estos
cada término es la suma de sus dos anteriores

Sea una variable numerica entera y positiva 'limite':
    Recorrer desde 0 hasta limite
    Imprimir tantos terminos de la secuencia como repeticions de 0 hasta limite
Ejemplo: si limite = 6, imprimir 0, 1, 1, 2, 3, 5
*/

let fib_n = 0
let fib_n2 = 0
let fib_n1 = 1
const limite = 6

for (let i = 1; i <= limite; i++){
    console.log(`${fib_n}`)
    
    fib_n2 = fib_n1
    fib_n1 = fib_n

    fib_n = fib_n2 + fib_n1 // Formula de Fibonacci: f(n) = f(n-2) + f(n-1)
}