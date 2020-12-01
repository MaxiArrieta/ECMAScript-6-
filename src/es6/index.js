function newFunction(name, age, country) {
    var name = name || "Mansi";
    var age = age || 25;
    var country = country || "AR";
    console.log(name, age, country);
}

// ES6

function otherFunction(name = "Maxi", age = 24, country = "AR") {
    console.log(name, age, country);
}

otherFunction("Mansi", 25, "AR Merlo");

let hola = "Hola";
let mundo = "Mundo";
let fraseEpica = hola + " " + mundo;
let fraseEpica2 = `${hola} ${mundo}`;
console.log(fraseEpica2);

// multi linea
let lorem =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius est non pulvinar aliquet. Integer non est augue \n" +
    "tiam sit amet nibh elementum, malesuada nunc sed, imperdiet mauris.";

let lorem2 = `Nullam ligula turpis, feugiat at tincidunt et, dapibus id dolor. Sed bibendum ante ac lectus maximus, in convallis quam egestas.
raesent vitae nisl ultricies, facilisis augue non, maximus purus.
Donec ac vestibulum ante.`;

console.log(lorem);
console.log(lorem2);