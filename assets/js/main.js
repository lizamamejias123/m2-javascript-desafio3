// Multiplicacion
// pedir al usuario un numero entre el 1 y el 20
var numero = Number.parseInt(prompt("Ingresa un número del 1 al 20"));
// validar el numero con arrow function
let verificar = numero => {
    if (numero >= 1 && numero <= 20) {
        numero;
    } else {
        alert("Número ingresado no corresponde a lo solicitado, recuerda que tiene que ser un número entre el 1 y el 20")
    }
}
// Realizar for para hacer la tabla de multiplicar del numero seleccionado
// // Titulo en consola
console.log(`Tabla de multiplicar del numero ${numero}`)
// // For con las tablas
for (i = 1; i <= numero; i++) {
    console.log(`${i} x ${numero} = ${i*numero}`)
}
// Realizar for para hacer lista de factorial hasta el numero pedido
// // Titulo en consola
console.log(`Factorial hasta el número ${numero}`)
// // Realizaremos un for dentro de otro for, en el primer for calcularemos el factorial del numero y en el otro for calcularemos los siguientes facrtoriales del 1 hasta el numero
for (let i = 1; i <= numero; i++) {
    let factorial = 1;
    for (let j = 1; j <= i; j++) {
        factorial = factorial * j;
    }
    console.log(`Factorial de ${i} es ${factorial}`)
}