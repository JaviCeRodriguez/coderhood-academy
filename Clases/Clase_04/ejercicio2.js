/*
Hacer una función que reciba una serie de palabras separadas por espacios y que imprima
la misma frase pero en orden inverso.
*/

function invertirFrase(n) {
    let frase = "";
    for (let i = n.length - 1; i >= 0; i--) {
        frase += n[i];
    }
    return frase;
}

const partialReverse = value => {
    let aux_word = ''
    let new_value = ''
    const largo = value.length
    for (let i = 0; i < largo; i++){
        aux_word += value[i]
        if (value[i] === ' ' || i == largo - 1){
            new_value = aux_word + ' ' + new_value
            aux_word = '' 
        }
    }
    return new_value
}

const frasesita = 'Hola como andas?'
console.log(invertirFrase(frasesita))
console.log(partialReverse(frasesita)) // andas? como Hola

// Hola como andas
// sadna omoc aloH
// andas como Hola