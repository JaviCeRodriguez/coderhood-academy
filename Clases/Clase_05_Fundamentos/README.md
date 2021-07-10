# Ejercicios
Aca hubo un error con las consignas, pero acá vemos objetos y arrays. Métodos push() y pop().

## Ejercicio 1
```js
/* Recopilación de datos personales */

// Esta función obtiene los datos de una persona y los devuelve. (Se podría usar window.prompt para obtenerlos)

function obtenerDatosPersonales() {

    // Se obtienen los datos de alguna forma
    let nombre = "Pepe";
    let apellido = "Pipo";
    let edad = 99;
    let profesion = "Programador";
    let animeFavorito = "Evangelion";

    // TODO: Devolver esta información en una estructura de datos.
}


let datosPersonales = obtenerDatosPersonales();

// Imprimir los datos obtenidos
console.log(datosPersonales);

// TODO: Imprimir la profesión de la persona
// TODO: Agregar el campo "procesado" y asignarle el valor "true" e imprimir todos los datos nuevamente.
```


## Ejercicio 2
```md
- un taller mecanico tiene una lista de autos para arreglar en el dia, de cada auto sabemos:
    - nombre del duenio
    - valor del arreglo
    - tiempo que tarda el arreglo (en horas)
    - lista de repuestos necesarios

el duenio del taller quiere saber
1. cual es el arreglo mas caro y los repuestos que necetia
2. todos los arreglos para personas que se llamen `juan`
3. el precio total los arreglos
```

## Ejercicio 3
```js
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
```

## Ejercicio 4
```js
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
```