
let gastoMensual = document.querySelector('.gastoMensual');
let condicionDeAgente = document.querySelector('.condicionDeAgente');
let btnCalcularObjetivo = document.querySelector('.btnCalcularObjetivo');
let botonCalcularObjetivo = document.querySelector('.botonCalcularObjetivo');
let respuestaInputs = document.querySelector('.respuestaInputs');

function calcularYMostrar() {
    let gastoMensualValor = parseFloat(gastoMensual.value);
    let gastoAnual = gastoMensualValor * 12;
    let condicionDeAgenteValor = parseFloat(condicionDeAgente.value) /100;
    let objetivo = gastoAnual / condicionDeAgenteValor;
    let objetivoEnDolares = objetivo.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    respuestaInputs.textContent = "El objetivo que deberías alcanzar es: " + objetivoEnDolares;
}

btnCalcularObjetivo.addEventListener('click', calcularYMostrar);


/* ------------------------------------------------------------------------------------------------------ */

/* LLamados a los inputs donde escribe el agente */

let objetivoAnual = document.querySelector('.objetivoAnual');
let ticketPromedio = document.querySelector('.ticketPromedio');
let preListingAcm = document.querySelector('.preListingAcm');
let acmCaptacion = document.querySelector('.acmCaptacion');
let captacionVenta = document.querySelector('.captacionVenta');

/* LLamados a las respuestas de gestión */


let respuestaCantidadPreListing = document.querySelector('.respuestaCantidadPreListing');
let respuestaCantidadAcm = document.querySelector('.respuestaCantidadAcm');
let respuestaCantidadCaptaciones = document.querySelector('.respuestaCantidadCaptaciones');
let respuestaCantidadVentas = document.querySelector('.respuestaCantidadVentas');
let respuestaCantidadVentasDeMiCartera = document.querySelector('.respuestaCantidadVentasDeMiCartera');
let btnCalcularGestion = document.querySelector('.btnCalcularGestion');



// Función para calcular y mostrar la gestión
function calcularGestion() {
    // Obtener los valores de los elementos
    let objetivoAnualValor = parseFloat(objetivoAnual.value);
    let ticketPromedioValor = parseFloat(ticketPromedio.value);
    let captacionVentaValor = parseFloat(captacionVenta.value)/100;
    let acmCaptacionValor = parseFloat(acmCaptacion.value)/100;
    let preListingAcmValor = parseFloat(preListingAcm.value)/100;
  
    // Calcular las gestiones y mostrar los resultados
    let cantidadVentas = objetivoAnualValor / 3000
    let cantidadCaptaciones = cantidadVentas / captacionVentaValor;
    let cantidadAcm = cantidadCaptaciones / acmCaptacionValor;
    let cantidadPreListing = cantidadAcm / preListingAcmValor;
  
    // Mostrar los resultados en los elementos correspondientes
    respuestaCantidadVentas.textContent = `Cantidad de Ventas: ${cantidadVentas.toFixed(2)}`;
    respuestaCantidadCaptaciones.textContent = `Cantidad de Captaciones: ${cantidadCaptaciones.toFixed(2)}`;
    respuestaCantidadAcm.textContent = `Cantidad de ACM: ${cantidadAcm.toFixed(2)}`;
    respuestaCantidadPreListing.textContent = `Cantidad de Pre-Listings: ${cantidadPreListing.toFixed(2)}`;
  }
  
  // Asignar la función al evento click del botón
  btnCalcularGestion.addEventListener('click', calcularGestion);

