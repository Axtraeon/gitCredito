"use strict";
/*
En este ejercicio queremos verificar si un número de 16 dígitos introducido por el 
usuario es un número válido de tarjeta de crédito. 
Para ello, investiga sobre el algoritmo de Luhn.
La verificación ha de tener lugar en una función llamada verificarNumeroTarjeta()
*/

function pideCredito(){
    let numeroTarjeta = prompt ("Introduce el numero de tarjeta"); //El prompt te devuelve siempre un String
    if (verificarNumeroTarjeta(numeroTarjeta)) {
        alert("El número de tarjeta es válido.");
    } else {
        alert("El número de tarjeta NO es válido.");
    }
}

function verificarNumeroTarjeta(numero) {
    // Convertimos el número a string para poder trabajar con los dígitos
    let numStr = numero.toString();
    
    // Verificamos que el número tenga exactamente 16 dígitos
    if (numStr.length !== 16) {
        return false;
    }

    let suma = 0;
    let esSegundoDigito = false;

    // Recorremos los dígitos desde el último hacia el primero
    for (let i = numStr.length - 1; i >= 0; i--) {
        let digito = parseInt(numStr[i]);

        // Si es el segundo dígito desde el final, lo multiplicamos por 2
        if (esSegundoDigito) {
            digito = digito * 2;
            // Si el resultado es mayor que 9, sumamos los dígitos del producto (restamos 9 es equivalente)
            if (digito > 9) {
                digito = digito - 9;
            }
        }

        // Sumamos el dígito (modificado o no) a la suma total
        suma = suma + digito;

        // Alternamos si es segundo dígito o no
        esSegundoDigito = !esSegundoDigito;
    }

    // El número es válido si la suma es divisible por 10
    return (suma % 10 === 0);
}

