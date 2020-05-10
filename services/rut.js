let formatear = function(rut){
    rutSinGuion=""
    try{
        for(i = 0; i<rut.length; i ++){
            if(rut[i] !="." && rut[i] !="-"){
                rutSinGuion += rut[i] 
            }
        }
    }catch(e){
        console.log("no hay datos");
    }
    console.log('[Formateo datos] Entrada:',rut, '- Salida:',rutSinGuion);
    return(rutSinGuion)
}

function validar_dv(rut){

    let secuencia = [2,3,4,5,6,7,2,3,4,5,6,7];
    let invert="";
    let multi = 0;

    let rutFormateado = formatear(rut)

    //Aqui empieza el algoritmo de calculo del DV
    for(i = rutFormateado.length -2; i >= 0; i--){ 
        invert = invert + rutFormateado[i];
    }
    for(i = 0; i<=invert.length-1; i ++){
        multi = multi + (Number(invert[i] * secuencia[i])); 
        
    }
    div = (Math.trunc(multi/11))*11;
    rest = multi - div;

    dv= 11-rest;
    if(dv == 11){
        dv = 0;
    }else if(dv == 10){
        dv = "k";
    }
    console.log('[Validacion DV] Rut:', rut, 'DV:',dv);
    return(dv);   
}

let response_validar_rut = function(req, res){
    let {rut} = req.body
    dv = validar_dv(rut)
    if(rut[rut.length - 1] == dv){
        console.log('[respuesta al cliente]: V')//V = valido
        res.json({
            message: 'V',    
        })
    }else{
        console.log('[Respuesta al cliente]: I')//I = invalido
        res.json({
            message: 'I',
        })
    }
}

module.exports = {response_validar_rut}