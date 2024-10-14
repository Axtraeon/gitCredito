//Vamos a hacer una funcion que devuelva los elementos repetidos que hay.
//[2,3,2,2] --> [3,1]

let matrizRepetidos = [2,3,2,2]

function repetidos(matrizRepetidos) {
    let vistos = [];
    let resultado = [];
  
    matrizRepetidos.forEach(elemento => { //elemento sera el numero actual que estamos procesando
      // Si el elemento ya ha sido visto, no lo añadimos de nuevo
      if (!vistos.find(elementfd => elementfd === elemento)) {
        /**
        - vistos.find(elementfd => elementfd === elemento) busca en el array vistos si hay algún elemento (elementfd) que sea igual (===) al elemento actual.

        - Si find encuentra un elemento, retorna ese elemento.

        - El operador ! (negación) delante de vistos.find(elementfd => elementfd === elemento) convierte el resultado en true si find NO encuentra ningún "elemento" (es decir, si el elemento no ha sido procesado antes).
         */
        let contador = matrizRepetidos.filter(elementft => elementft === elemento).length; // Contamos cuántas veces aparece
        resultado.push(contador); // Añadimos el número de repeticiones
        vistos.push(elemento); // Marcamos que este número ya lo hemos procesado
      }
    });
  
    return resultado;
  }
  
  let final = repetidos(matrizRepetidos);
  console.log(final); // [1, 3]