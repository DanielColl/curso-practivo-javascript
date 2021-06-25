const list1 = [
    3500,
    17958,
    100,
    200,
    500,
    400000,
    9342,
];

const mitadLista1 = parseInt(list1.length / 2);

const calcularMediana = (list1) => list1.length % 2 === 0 
? (list1[mitadLista1 - 1] + list1[mitadLista1])/2
: list1[mitadLista1]

mediana = calcularMediana(list1.sort((a, b) => a - b));

console.log(list1.sort((a, b) => a - b));