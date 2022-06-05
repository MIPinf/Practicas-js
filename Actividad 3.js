const NAME = prompt('Ingrese su nombre').toUpperCase();
let age = parseInt(prompt('Ingrese su edad'));

if(age >= 18){
    alert('Bienvenido al Sitio');
}else if(age >= 18  && NAME === 'Raul'){
    alert('Puede acceder a los archivos ocultos');
}else if(age >= 18  && NAME === 'Javier'){
    alert('Puede acceder a los archivos ocultos');
}else{
    alert('Acceso Denegado');
}
//Ejercicio 2
let fristUser = prompt('Ingrese la  primer posición de la mano').toLowerCase();
let secondUser = prompt('Ingrese la  segunda posición de la mano').toLowerCase();


if(fristUser === 'piedra' && secondUser === 'tijeras'){
    alert('El ganador es el primer usuario')

}else if(fristUser === 'papel' && secondUser === 'tijeras'){
    alert('El ganador es el segundo usuario')

}else if(fristUser === 'piedra' && secondUser === 'tijeras'){
    alert('El ganador es el primer usuario')

}else if(fristUser === 'tijeras' && secondUser === 'piedra'){
    alert('El ganador es el segundo usuario')

}else if(fristUser === 'papel' && secondUser === 'piedra'){
    alert('El ganador es el primer usuario')

}else if(fristUser === 'piedra' && secondUser === 'papel'){
    alert('El ganador es el segundo usuario')

}else if(fristUser === secondUser){
    alert('Empate')
}else{
    alert('Error al ingresar los datos')
}
//Ejercicio3
let number = parseFloat(prompt('Ingrese un número'));

let operation = number % 2;

if (operation === 0) {
    alert('✅ El ' + number + ' es par.');
} else {
    alert('❌ El ' + number + ' es impar.');
}
//Ejercicio 4
let number = parseFloat(prompt('Ingrese un número'));

if (number === 1000) {
    alert('Felicidades Ganaste un premio. 👏🏼🥳');
} else {
    alert('El número ingresado fue: ' + number + '\nLo sentimos, sigue participando. 😥');
}
//Ejercicio 5
let fristNumber = parseFloat(prompt('Ingrese el primer número'));
let secondNumber = parseFloat(prompt('Ingrese el segundo número'));


if (fristNumber > secondNumber) {
    alert('El primer número es mayor que el segundo.')
}else if(secondNumber > fristNumber) {
    alert('El segundo número es mayor que el primero.')
}else if(fristNumber === secondNumber){
    alert('Los numeros son iguales')
}else {
    alert('Ingreso datos erroneos')
}


if (fristNumber > secondNumber) {
    alert('El primer número es mayor que el segundo.')
} else {
    alert('El segundo número es mayor que el primero.')
}
//Ejercicio 6
let fristNumber = Number(prompt('Ingrese el primer número'));
let secondNumber = Number(prompt('Ingrese el segundo número'));
let thirdNumber = Number(prompt('Ingrese el tercer número'));

if (fristNumber > secondNumber && thirdNumber < secondNumber) {
    alert('El primer número es el mayor')
} else if (secondNumber > fristNumber && thirdNumber < secondNumber) {
    alert('El segundo número es el mayor')
} else if (thirdNumber>  secondNumber && fristNumber  < secondNumber){
    alert('El tercer número es el mayor')


}else if(secondNumber === thirdNumber && fristNumber > secondNumber){
    alert('El primer número es el mayor')
}else if(fristNumber === thirdNumber && secondNumber > fristNumber){
    alert('El segundo número es el mayor')
}else if(fristNumber === secondNumber && thirdNumber > fristNumber){
    alert('El tercer número es el mayor')


}else if(fristNumber === secondNumber && fristNumber > thirdNumber){
    alert('El primer y segundo número son iguales y son mayores al tercero')
}else if(secondNumber === thirdNumber && secondNumber > fristNumber){
    alert('El segundo y tercer número son iguales y son mayores al primero')
}else if(fristNumber === thirdNumber && fristNumber > secondNumber){
    alert('El primer y tercer número son iguales y son mayores al segundo')
}else if(fristNumber === secondNumber && fristNumber === thirdNumber){
    alert('Los tres números son iguales')
}else{
    alert('Se ingresaron datos erroneos')
}