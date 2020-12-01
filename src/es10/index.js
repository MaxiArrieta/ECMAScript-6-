let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];

console.log(array.flat(2));

let array2 = [1, 2, 3, 4, 5];

console.log(array2.flatMap((value) => [value, value * 2]));

// Trim() trimStart() espacios al inicio
// trimEnd() espacios al final
/*
try {
    
} catch  {
    // No hace falta pasar el error
    error
}
 */

// Convertir array a objeto
let entries = [
    ["name", "Maxi"],
    ["edad", 25],
    ["ciudad", "Merlo"],
];

console.log(Object.fromEntries(entries));

let mySimbol = `Mi Simbolo`;
let symbol = Symbol(mySimbol);
console.log(symbol.description);