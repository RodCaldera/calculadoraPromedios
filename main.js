//Variables y constantes a utilizar
let calificacionTrabajos= parseInt(prompt("Ingresa tu calificación de trabajos en clase"))
const porcentajeTrabajos=5
let calificacionProyecto= parseInt(prompt("Ingresa tu calificación de proyecto"))
const porcentajeProyecto=3
let calificacionExamen= parseInt(prompt("Ingresa tu calificación de examen"))
const porcentajeExamen=2
let trabajos = 0
let proyecto = 0
let examen = 0
let promedio=0

//Función
function calcularPorcentaje(calificacion, porcentaje){
    resultado = calificacion*porcentaje
} 

//Cálculos
calcularPorcentaje(calificacionTrabajos, porcentajeTrabajos);
trabajos=resultado;


calcularPorcentaje(calificacionProyecto, porcentajeProyecto);
proyecto=resultado;


calcularPorcentaje(calificacionExamen, porcentajeExamen);
examen=resultado;

promedio= (trabajos+proyecto+examen)/10;
alert("Tu promedio es " + promedio);

//Condicional

if(promedio<8){
    alert("Neceistas reforzar tus conocimientos. Preséntate a regularización.")
} else{
    alert("Buen trabajo. Sigue así.")
}


 
 