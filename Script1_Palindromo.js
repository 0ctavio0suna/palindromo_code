function esPalindromo(cadena) {
    var cadenaLimpia = cadena.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    var cadenaInvertida = cadenaLimpia.split('').reverse().join('');
    return cadenaLimpia === cadenaInvertida;
}

function verificarPalindromo() {
    var frase = prompt('Introduce una frase para verificar si es un pal�ndromo:');
    var resultado = esPalindromo(frase) ? '�La frase es un pal�ndromo!' : 'La frase no es un pal�ndromo.';
    console.log(resultado);
}

window.onload = function () {
    verificarPalindromo();
};
