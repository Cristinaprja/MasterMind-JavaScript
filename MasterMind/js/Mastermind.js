let Mastermind = function () {
    let arrayObjetivo = [];
    const COLORES = ["red", "yellow", "orange", "blue", "green", "brown", "white", "black"];

    let init = function () {
        for (let i = 0; i < 4; i++) {
            arrayObjetivo.push(COLORES[Math.floor(Math.random() * COLORES.length)]);
        }
        console.log(arrayObjetivo);
        return arrayObjetivo;
    }
    let mostrar = function () {
        return arrayObjetivo;
    }
    let comprobarCoincidencia = function (intento) {
        let arrayCorrectos = [];
        let resultado = [];
        let arrayComprobaciones = arrayObjetivo.slice();

        intento.forEach(function (elemento, index) {
            if (elemento == arrayComprobaciones[index]) {
                console.log("dentro if");
                resultado.push("negro");
                arrayCorrectos.push(index);
            }
        });

        arrayCorrectos.forEach(function (elemento, index) {
            for (let i = 0; i < 4; i++) {
                if (i == arrayCorrectos[index]) {
                    arrayComprobaciones[i] = 1;
                    intento[i] = 0;
                }
            }
        });

        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                if (intento[i] == arrayComprobaciones[j] && i != j) {
                    resultado.push("blanco");
                    arrayComprobaciones[j] = 1;
                    break;
                }
            }
        }
        console.log(resultado);
        return resultado;
    }

    return {
        init: init,
        mostrar: mostrar,
        comprobarCoincidencia: comprobarCoincidencia
    }
}();