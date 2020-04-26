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
                return false;
            }
        }
        intento = [];
        let solucion;
        for (ficha of fichasElegidas) {
            intento.push(ficha.getAttribute("fill"));
        }
        solucion = Mastermind.comprobarCoincidencia(intento);
        pintarSolucion(solucion);

        if(solucion.length === 4 && solucion.every((i)=>i === "negro")){
            document.getElementById("modal").style.display= "block";
            document.getElementById("comprobar").disabled = true;;
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