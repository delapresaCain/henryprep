function esPositivo(num) {
  // La función recibe un entero. Devuelve como resultado un string que indica si el número
  // es positivo o negativo.
  // Si el número es positivo ---> "Es positivo".
  // Si el número es negativo ---> "Es negativo".
  // Si el número es 0, devuelve false.
  // Tu código:

// if (num > 0) return "Es positivo";
// else if (num < 0) return "Es negatuvo";
// else return false;

// switch (num) {
//   case (num > 0):
//     return "Es positivo";
//     case (num < 0):
//       return "Es negativo";
//       default:
//         return false;
// }

return (num > 0) ? "Es positivo" : (num < 0) ? "Es negativo" : false;

}

module.exports = esPositivo;