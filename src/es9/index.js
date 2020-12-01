const obj = {
    name: "Maxi",
    age: 25,
    country: "AR",
};

// En all dejo todos los demas datos
let { name, ...all } = obj;

console.log(name, all);

const obj1 = {
    name: "Maxi",
    age: 25,
};
const obj2 = {
    ...obj1,
    country: "Ar",
};

console.log(obj2);

// Funcion promesa
const holaMundo = () => {
    return new Promise((res, rej) => {
        true
            ?
            setTimeout(() => res("Hola Mundo"), 3000) :
            rej(new Error("Error Test"));
    });
};

holaMundo()
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
    .finally(() => console.log("Ya finalizo"));

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec("2020-11-30");
const yaer = match[1];
const month = match[2];
const day = match[3];

console.log(match);
console.log(`${day}/${month}/${yaer}`);