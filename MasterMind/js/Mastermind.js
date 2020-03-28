let Mastermind = function(){
    let arrayObjetivo=[];
    const COLORES = ["rojo","amarillo","naranja","azul","verde","marrón","blanco","negro"];
    
    let init = function(){
        for(i=0; i<4; i++){
            arrayObjetivo.push(COLORES[Math.floor(Math.random() * COLORES.length)]);
        }
        
        return arrayObjetivo;
    }
    let mostrar = function(){
        return arrayObjetivo;
    }
    let comprobarCoincidencia = function(intento){
        let aciertos=[];
        let arrayComprobaciones = arrayObjetivo.slice();
        intento.forEach(function(element, index){
            if(element===arrayComprobaciones[index]){
                aciertos.push("negra");
                arrayComprobaciones[index] = null;
            }
        });

        intento.forEach(function(element){
            let index = arrayComprobaciones.indexOf(element);
            if(arrayComprobaciones.indexOf(element) != -1){
                aciertos.push("blanca");
                arrayComprobaciones[index] = null;
            }
        });
        return aciertos;
    }
    return{
        init:init,
        mostrar:mostrar,
        comprobarCoincidencia:comprobarCoincidencia
    }
}();