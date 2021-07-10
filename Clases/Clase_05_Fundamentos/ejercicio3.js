// Dado un array de alumnos de Coderhood Academy, indicar quien es el que lidera el ranking de participacion en Discord

let alumnos = [
    {
      nombre: 'MiaFate',
      ranking: 4
    },
    {
      nombre: 'Argentum',
      ranking: 2
    },
    {
      nombre: 'Lucas',
      ranking: 1
    },
    {
      nombre: 'Ema',
      ranking: 3
    }
]

const {nombre, ranking} = alumnos.find(a => a.ranking === 1) // Busco el alumno con el ranking 1 (es único)

console.log(`El lider de la lista es ${nombre}`)