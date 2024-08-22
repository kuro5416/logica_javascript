// Función para calcular el Máximo Común Divisor (MCD) usando el algoritmo de Euclides
function gcd(a, b) {
    // Asegúrate de que a y b sean positivos
    a = Math.abs(a);
    b = Math.abs(b);
    
    // El algoritmo de Euclides
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    
    return a;
}

// Ejemplo de uso
let num1 = 704;
let num2 = 480;
console.log(`El MCD de ${num1} y ${num2} es ${gcd(num1, num2)}`);
