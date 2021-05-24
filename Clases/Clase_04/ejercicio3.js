/*
 Hacer una función que reciba como parámetro tres números enteros y que lo ordene de
mayor a menor
*/

function minNum(num_1, num_2, num_3) {
    let min = 0;
    if (num_1 > num_2) {
        if (num_3 > num_2) {
            min = num_2;
        } else {
            min = num_3;
        }
    } else {
    if (num_3 > num_1) {
        min = num_1;
    } else {
        min = num_3;
    }
    }
    return min;
   }
   function maxNum(num_1, num_2, num_3) {
    let max = 0;
    if (num_1 < num_2) {
    if (num_3 < num_2) {
    max = num_2;
    } else {
    max = num_3;
    }
    } else {
    if (num_3 < num_1) {
    max = num_1;
    } else {
    max = num_3;
    }
    }
    return max;
   }
   function ordenar(num_1, num_2, num_3) {
    let max = maxNum(num_1, num_2, num_3);
    let min = minNum(num_1, num_2, num_3);
    let medio = num_1 + num_2 + num_3 - max - min;
    return max + " " + medio + " " + min;
   }
   console.log(ordenar(33, 77, 36)); // 77 36 33