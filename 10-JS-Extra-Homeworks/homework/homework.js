// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto) {
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí

  // var nuevoArray = [];
  // var keys = Object.keys(objeto); //obtenemos en un array. todas nuestras claves
  // var values = Object.values(objeto); //obtenemos en un array. todos nuestros valores
  // for (let i = 0; i < keys.length; i++) {
  //   for (let j = 0; j < values.length; j++) {
  //     nuevoArray.push([keys[i], values[j]])
  //     i++;
  //   }
  // }
  // return nuevoArray;

  var array = [];
  for (clave in objeto) {
    array.push([clave, objeto[clave]])
  }
  return array;
}

function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí

  /*En principio debemos crear un objeto donde guardar nuestro clave-valor. 
  La logica que vamos a utilizar en este ejercicio es en principio verificar con un for, si la primera letra que vamos a recorrer de nuestro
  cadena, ya existe en nuestro objeto. En caso de que ya exista, vamos a aumentarlo, y en caso de que no exista creariamos una nueva propiedad
  en el objeto un kew-value con esa letra no existente, y lo inecializariamos en 1.
  */
  var obj = {};
  for (let i = 0; i < string.length; i++) {
    if (obj.hasOwnProperty(string[i])) {    /* con .hasOwnProperty preguntas si existe en cada iteraccion la letram si existe, string[]*/
      obj[string[i]] = obj[string[i]] + 1;
    }
    else {
      obj[string[i]] = 1;
    }
  }
  return obj;
}

function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí   

  //String.prototype.reverse = function()
  var mayuscula = '';
  var minuscula = '';
  for (i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) {
      mayuscula = mayuscula + s[i];
    }
    else {
      minuscula = minuscula + s[i];
    }
  }
  return (mayuscula + minuscula)
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var conv = str.split(' ');
  var fraseInvertida = [];
  for (let i = 0; i < conv.length; i++) {
    fraseInvertida.push(conv[i].split('').reverse().join(''))
  }

  return fraseInvertida.join(' ');
}


function capicua(numero) {
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let num = numero.toString();
  let numeroInvertido = num.split('').reverse().join('');
  if (num === numeroInvertido) return 'Es capicua';
  else {
    return 'No es capicua';
  }
}

function deleteAbc(cadena) {
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  //utilizar un filter

  var sinABC = '';
  for (i = 0; i < cadena.length; i++) {
    if (cadena[i] === 'a' || cadena[i] === 'b' || cadena[i] === 'c') {
      continue;
    }
    else {
      sinABC += cadena[i];
    }
  }
  return sinABC;

}




function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  const arrayOrdenado = arr.sort(
    function (a, b) {
      return a.length - b.length;
    }
  );
  return arrayOrdenado;
}


function buscoInterseccion(arreglo1, arreglo2) {
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí 
  var nuevoArray = [];
  for (let i = 0; i < arreglo2.length; i++) {
    if (arreglo1.includes(arreglo2[i])) {
      nuevoArray.push(arreglo2[i])
    }
  }

  return nuevoArray;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  deObjetoAmatriz,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};

