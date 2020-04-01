{
    let inicio = () => {
        Mastermind.init();
        fichas = document.getElementsByTagName("circle"); //Todas las fichas, las 8 primeras con los colores para elegir
        fichasElegidas = document.getElementById("coloresElegidos").getElementsByTagName("circle");
        fichasSolucion = document.getElementById("resultadoAciertos").getElementsByTagName("circle");
        document.getElementById("btnReiniciar").addEventListener("click", reiniciar);
        for (let i = 8; i < 16; i++) {
            fichas[i].addEventListener("click", ponerFicha);
        }
        for (ficha of fichasElegidas) {
            ficha.addEventListener("click", quitarFicha);
        }
        document.getElementById("comprobar").addEventListener("click", checkIntento);

        copiaCombinacion = document.getElementById("combinaciones").cloneNode(true);
    }
    let reiniciar = () => {
        location.reload();
    }
    let ponerFicha = (event) => {
        for (ficha of fichasElegidas) {
            if (ficha.getAttribute("fill") == "gray") {
                ficha.setAttribute("fill", event.target.getAttribute("fill"));
                return;
            }
        }
    }
    let quitarFicha = (event) => {
        if (event.target.getAttribute("fill") !== "gray") {
            event.target.setAttribute("fill", "gray");
        }
    }
    let pintarSolucion = (solucion) => {
        for (let i = 0; i < solucion.length; i++) {
            if (solucion[i] == "negro") {
                fichasSolucion[i].setAttribute("fill", "black");
            } else if (solucion[i] == "blanco") {
                fichasSolucion[i].setAttribute("fill", "white");
            }
        }
    }
    let checkIntento = () => {
        for (ficha of fichasElegidas) {
            if (ficha.getAttribute("fill") == "gray") {
                return
            }
        }
        intento = [];
        let solucion;
        for (ficha of fichasElegidas) {
            if (ficha.getAttribute("fill") == "red") {
                intento.push("rojo")
            } else if (ficha.getAttribute("fill") == "yellow") {
                intento.push("amarillo")
            } else if (ficha.getAttribute("fill") == "orange") {
                intento.push("naranja")
            } else if (ficha.getAttribute("fill") == "blue") {
                intento.push("azul")
            } else if (ficha.getAttribute("fill") == "green") {
                intento.push("verde")
            } else if (ficha.getAttribute("fill") == "brown") {
                intento.push("marrón")
            } else if (ficha.getAttribute("fill") == "white") {
                intento.push("blanco")
            } else if (ficha.getAttribute("fill") == "black") {
                intento.push("negro")
            }
        }
        solucion = Mastermind.comprobarCoincidencia(intento);
        pintarSolucion(solucion);

        let comprobarSiHasGanado = (solucion) => {
            for (let i = 0; i <= 3; i++) {
                if (solucion[i] != "negro") {
                    return false;
                }
            }
            return true;
        }
        if (comprobarSiHasGanado(solucion)) {
            confirm("!!HAS GANADO¡¡");
            reiniciar();
        } else {
            intento = "";
            masIntentos();
        }
    }

    let masIntentos = () => {
        document.getElementById("combinaciones").parentNode.insertBefore(copiaCombinacion, document.getElementById('combinaciones'));
        copiaCombinacion = document.getElementById("combinaciones").cloneNode(true);
        fichasElegidas = document.getElementById("coloresElegidos").getElementsByTagName("circle");
        fichasSolucion = document.getElementById("resultadoAciertos").getElementsByTagName("circle");

        for (ficha of fichasElegidas) {
            ficha.addEventListener("click", quitarFicha);
        }
        document.getElementById("combinaciones").nextSibling.style.pointerEvents = "none";
    }
    document.addEventListener("DOMContentLoaded", inicio);
}