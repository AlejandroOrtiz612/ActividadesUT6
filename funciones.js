/* Función suma */
var suma = function suma (a, b) {
	return a + b;	
}; 


/*Funcion Comprobar cadena */
var cadena ="Hola /n soy /nAlejandro"
function ComprobarCadena(cadena )
{
    var cadenaAComprobar=cadena.split("/n",3)
    console.log(cadenaAComprobar);
    if(cadenaAComprobar[2]=="Alejandro")console.log("El texto es correcto");
    else console.log("El texto no es correcto")
}
ComprobarCadena(cadena);

/* Exportación de funciones */
module.exports = {
	suma,ComprobarCadena
}
