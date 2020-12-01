// Async / Await
const data = {
    frontend: "Maxi",
    backend: "Mansi",
    design: "Martin",
};
// Devolver clave y valor de una matriz

const entries = Object.entries(data);
// convierte en matriz de array
console.log(entries);
console.log(entries.length);

const values = Object.values(data);
// devuelve un array con los valores del objeto
console.log(values);
console.log(values.length);

const string = "hola";
console.log(string.padStart(9, "Hola "));
0;
console.log(string.padEnd(11, " -----"));