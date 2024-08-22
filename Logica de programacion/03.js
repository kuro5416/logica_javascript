/*
 * Escribe un programa que imprima los 50 primeros números de la sucesión
 * de Fibonacci empezando en 0.
 * - La serie Fibonacci se compone por una sucesión de números en
 *   la que el siguiente siempre es la suma de los dos anteriores.
 *   0, 1, 1, 2, 3, 5, 8, 13...
 */

function fibonaci(n) {
    let matriz = [0,1];
    for (let i = 2; i<n; i++){
        matriz[i] = matriz[i-2] + matriz[i-1];
    }
    return matriz.join(", ");
}
console.log(fibonaci(50));