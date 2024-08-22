/*
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 */

function esPrimo(num) {
    if (num <= 1) return false; 
    if (num <= 3) return true;  
   
    if (num % 2 === 0 || num % 3 === 0) return false;
  
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
  
    return true;
  }
  
  function main(x){
    for (let i = 0; i<x;i++){
        if(esPrimo(i)){
            console.log(i);
        }
    }
  }

  main(100)
  