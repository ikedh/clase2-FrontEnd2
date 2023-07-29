
const iniciarJuego = () => {

    alert("Bienvenidos al juego")
    const nombre = prompt("Por favor ingrese su nombre")

    console.log("El nombre del Jugador es")
    console.log(nombre);

    return nombre
}

 const nombreJugador = iniciarJuego()


/* -------------------------------------------------------------------------- */
/*                          CONSIGNA MESA DE TRABAJO                          */
/* -------------------------------------------------------------------------- */
// 1- Modificar la funcion de iniciarJuego(), validar si ingresa un dato válido como nombre.
// 2- Si no ingresa un texto, o tiene menos de 3 caracteres debemos volverle a pedir que lo ingrese.
// 3- Finalmente el nombre devuelto debe estar todo en mayúsculas.