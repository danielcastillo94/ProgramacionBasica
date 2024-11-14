let num1 = prompt('INGRESA EL PRIMER VALOR DE TU RANGO');
let num2 = prompt('INGRESA EL SEGUNDO VALOR DE TU RANGO');

let inicio = Math.min(num1,num2);
let final = Math.max(num1,num2);

const arreglo = [];
for (let i = inicio; i <= final; i++){
arreglo.push(i);

}

document.write(arreglo);

/// AGREGA ELEMENTIO AL FINAL
//numeros.push(-10);
//document.write(numeros);