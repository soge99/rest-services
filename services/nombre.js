let responseNombreSexo = function(req,res){
    try{
        const {nombre,apellido_p,apellido_m,sexo} = req.body;

        let arreglo_datos = formatDatos(sexo,nombre, apellido_p, apellido_m);
        let mensaje = detSexo(arreglo_datos[0]);

        console.log('[Respuesta al cliente]',mensaje,arreglo_datos[1], arreglo_datos[2], arreglo_datos[3]);
        res.json({
            message: mensaje,
            nombre: arreglo_datos[1],
            apellido_p: arreglo_datos[2],
            apellido_m: arreglo_datos[3]
        })
        
    }catch(e){
        res.json({
            name: e.name,
            message: e.message
        })
        console.log(e.name , ':', e.message);
    }
    
}
    //pone la primera letra de la string en mayuscula
function formatDatos (sexo,nombre, apellido_p,apellido_m){

    let finalNombre = "";
    let nombreLower = nombre.toLowerCase();
    let apellidoPLower = apellido_p.toLowerCase();
    let apellidoMLower = apellido_m.toLowerCase();
    let sexoLower = sexo.toLowerCase();
    console.log('Datos Ingresados correctamente');
    let nombres = nombreLower.split(" ");
    for(let i =0; i < nombres.length; i++){
        let nombreLowerU = (nombres[i].charAt(0).toUpperCase() + nombres[i].slice(1));
        finalNombre = finalNombre +  " " + nombreLowerU ;
    }
    
    finalNombre = finalNombre.slice(1);
    let apellidoPLowerU=(apellidoPLower.charAt(0).toUpperCase() + apellidoPLower.slice(1));
    let apellidoMLowerU=(apellidoMLower.charAt(0).toUpperCase() + apellidoMLower.slice(1));

    let respuesta = [sexoLower, finalNombre,apellidoPLowerU,apellidoMLowerU]
    console.log("[datos formateados]",respuesta[0] + " " + respuesta[1] + " " + respuesta[2] + " " + respuesta[3])
    return(respuesta);
}
    
function detSexo(sexoLower){
    switch(sexoLower){
        case "m":
            console.log("[Determina sexo]", "Entrada: ", sexoLower, "- Salida: Sr", )
            return "Sr";
        case "f": 
            console.log("[Determina sexo]", "Entrada:", sexoLower, "- Salida: Sra")
            return "Sra";
        default:
            console.log("El dato de sexo ha sido completado de forma erronea")       
    }
}

module.exports = {
    responseNombreSexo
}