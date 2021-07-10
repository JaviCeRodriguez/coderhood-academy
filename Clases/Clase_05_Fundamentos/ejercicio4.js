// Dado un array de estudiantes de una universidad, mostrar los nombres de los estudiantes de la carrera Ingenieria en computacion.

let alumnos = [
    {
      nombre: 'Ema',
      carrera: 'Ingenieria en computacion'
    },
    {
      nombre: 'Luis',
      carrera: 'Produccion audiovisual'
    },
    {
      nombre: 'Pablo',
      carrera: 'Ingenieria en computacion'
    },
    {
      nombre: 'Meison',
      carrera: 'Ingenieria en computacion'
    }
]

alumnos.map(alumno => {
    if (alumno.carrera === 'Ingenieria en computacion') {
        console.log(alumno.nombre);
    }
})
