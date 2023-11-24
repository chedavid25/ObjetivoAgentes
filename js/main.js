
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
