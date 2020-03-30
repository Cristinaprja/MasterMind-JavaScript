let Mastermind = function(){
    let arrayObjetivo=[];
    const COLORES = ["rojo","amarillo","naranja","azul","verde","marrón","blanco","negro"];
    let hasGanado = false;
    
    let init = function(){
        for(i=0; i<4; i++){
            arrayObjetivo.push(COLORES[Math.floor(Math.random() * COLORES.length)]);
        }
        console.log(arrayObjetivo);
        return arrayObjetivo;
    }
    let mostrar = function(){
        return arrayObjetivo;
    }
    let comprobarCoincidencia = function(intento){
        if (!hasGanado){
            comprobarHasGanado(comprobaciones(intento));
        }
        return comprobaciones(intento);
    }
    let comprobaciones = function(intento){
        arrayCorrectos =[];
        // arrayComprobaciones = arrayObjetivo.slice();
        arrayCombinacionAux = arrayObjetivo.slice();
        resultado = [];

        intento.forEach(function(elemento, index){
            if(elemento == arrayObjetivo[index]){
                
                resultado.push("negro");
                arrayCorrectos.push(index);
            }
        });
    
        arrayCorrectos.forEach(function(elemento, index){
            for(let i = 0; i < 4; i++){
                if(i == arrayCorrectos[index]){
                    arrayCombinacionAux[index] = -1;
                }
            } 
        });

        for(let i = 0; i< 4; i++){
            for(let j = 0; j < 4; j++){
                if(i != j && intento[i] == arrayCombinacionAux[j]){
                    resultado.push("blanco");
                    arrayCombinacionAux[j] = -1;
                }
            }    
        }

        console.log(resultado);
        return resultado;
    }
    let comprobarHasGanado = function (resultado){
        if(resultado.length == 4){
            hasGanado = true;
            resultado.forEach(function(i){
                if(i != "negro"){
                    hasGanado = false;
                }
            });
        }
        return hasGanado;
        
    }

    return{
        init:init,
        mostrar:mostrar,
        comprobarCoincidencia:comprobarCoincidencia
    }
}();