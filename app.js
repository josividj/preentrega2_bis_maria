///CAJA MÁGICA DE NUMEROS
///La idea final (no todavía) es hacer un concurso entre diferentes escuelas para ver cuál es la que saca más cantidad de números primos
///se crea una clase Participante donde cada participante (distinto cada uno del otro) del concurso ingresa su nombre y un número (sólo que éste es elegido al azar con el método MATH mediante la función elegirNumero)
///Luego una función cargarDatos donde se ingresa el nombre del participante y se le asigna un número
///Otra función cargarAlumno: aquí se crean nuevas instancias de Participantes y se le asocia la función cargar datos
///finalmente se crea una constante arrayAlumnos para almacenar los objetos (Participantes) creados.

///Y se evalúan los números ingresados por cada participante del array y se analiza si son pares, impares y/o primos.

let numero;
let nombre;
let sumaPar = 0;
let sumaImpar = 0;
let sumaPrimos = 0;

const messagePar = 'El número ingresado es PAR!';
const messageImpar = 'El número ingresado es IMPAR!';
const messagePrimos = 'además es un número PRIMO!!!';

alert('Bienvenido al juego de la caja mágica!!!');

const arrayAlumnos = new Participante().cargarAlumno(); // Creamos una nueva instancia de Participante y llamamos al método cargarAlumno()
console.log(arrayAlumnos); // Imprimimos el array de alumnos resultante
let i = 0;
while (i < arrayAlumnos.length) {
    arrayAlumnos.forEach((peque) => {
        console.log(peque.nombre);
        console.log(peque.numeroElegido);
        alert(peque.nombre + ' Ud. ha ingresado el número : ' + peque.numeroElegido); 
        numero = peque.numeroElegido;

        function esPar(numero) {
            return numero % 2 === 0;
        }

        function esPrimo(numero) {
            for (let i = 2; i < numero; i++) {
                if (numero % i === 0) {
                    return false;
                }
            }
            return numero !== 1;
        }


        if (esPar(numero)) {
            alert(messagePar);
            sumaPar++;
        } else {
            alert(messageImpar);
            sumaImpar++;
        }

        if (esPrimo(numero)) {
            alert(messagePrimos);
            sumaPrimos++;
        }
        alert(peque.nombre + ' Hasta este momento Ud. ha obtenido: ' + '\n' + sumaPar + ' número/s par/es; ' + '\n' + sumaImpar + ' número/s impar/es; y ' + '\n' + sumaPrimos + ' número/s primos!!!');
        i++;
        sumaImpar = 0;
        sumaPar = 0;
        sumaPrimos = 0;
    })
};

let y = 0;
while (y < arrayAlumnos.length) {
  alert("El array de alumnos está formado por los siguientes objetos: Nombre: " + arrayAlumnos[y].nombre + ", Número: " + arrayAlumnos[y].numeroElegido);
  y++;
}
