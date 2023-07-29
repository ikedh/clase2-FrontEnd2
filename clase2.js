/* let tratoPersonalizado = confirm("Desea un trato personalizado?")

console.log(tratoPersonalizado);


if(tratoPersonalizado){
    let nombre = prompt("Por favor, introduzca su nombre");
    alert("Le damos la bienvenida a nuestro sitio "+ nombre +". ¡Muchas     gracias por visitarnos, estamos a su disposición! ?");
} else {
    alert("Gracias por conectarse.")
} */


/* let randomSimple = Math.random() //0,89444234
let numRedondo= Math.round(randomSimple)


console.log(numRedondo)






function pedirJugada() {
    
    let eleccion = 0;

    do {
        
        eleccion = parseInt(prompt("Ingrese para jugar: 1(piedra), 2(papel) o 3(tijera)"));

       
    } while (isNaN(eleccion) || eleccion < 1 || eleccion > 3)

    
    console.log("----------------------------");
    console.log("La eleccion del jugador es:")
    console.log(eleccion);
    console.log("----------------------------");

   
    return eleccion;
}



function jugadaRandom() {
    let numero = parseInt(Math.random() * 3 + 1);

   
    console.log("----------------------------");
    console.log("La computadora saca:")
    console.log(numero);
    console.log("----------------------------");


    return numero;
}






/* -------------------------------------------------------------------------- */
/*                                  FUNCION 4                                 */
/* -------------------------------------------------------------------------- */
// 👇 Esta funcion nos devuelve el resultado de la partida según las elecciones.
// Comparamos la eleccion de cada uno para saber quien pierde y quien gana.

let pelis = ["Bastardos sin Gloria","Barbie",33]

for(let peli of pelis){
    console.log(peli)
}


function compararJugadas() {
    const RESULTADOS_POSIBLES = ['¡Genial, ganaste!', 'Esto fue un empate.', 'Una lástima, perdiste.'];

    const eleccionJugador = pedirJugada();
    const eleccionComputadora = jugadaRandom();

    
    let resultadoRonda = RESULTADOS_POSIBLES[0];

  
    if (eleccionJugador === eleccionComputadora) {
        resultadoRonda = RESULTADOS_POSIBLES[1];

        
    } else if ((eleccionJugador === 1 && eleccionComputadora === 2) || (eleccionJugador === 2 && eleccionComputadora === 3) || (eleccionJugador === 3 && eleccionComputadora === 1)) {
        resultadoRonda = RESULTADOS_POSIBLES[2];
    }

    
    return resultadoRonda;
}

const resultadoDePartida = compararJugadas()
console.log(resultadoDePartida);
alert(resultadoDePartida);



/* -------------------------------------------------------------------------- */
/*                          CONSIGNA MESA DE TRABAJO                          */
/* -------------------------------------------------------------------------- */
// 1- Crear una función que reciba como parametro un texto (la frase de resultado de la partida).
// 2- La función debe mostrar por consola el resultado de la partida.
// 3- A su vez debe mostrar al usuario una alerta con el resutado de la partida.
// 4- Finalmente, si el resultado fue una derrota debe mostrarle al usuario un mensaje de aliento para desearle suerte en la próxima oportunidad.


