const palindromo = (palabra) => {
    palabra.replace(' ', '');
    palabra.toLowerCase();

    let palabraInvertida = palabra.split('').reverse().join('');
   if(palabra === palabraInvertida){
       return true;
   }
   else{
      return false;
   }
}


let palabra = prompt("Ingrese una palabra");
let esPalindromo = palindromo(palabra);

if(esPalindromo){
    document.write("Es palindromo");
}
else{
    document.write("No es");
}
// console.log(palindromo("Luz azul"))