import { Fabrica } from "./Fabrica.js";

const fabrica = new Fabrica();

window.fabricar = function(n){
    fabrica.fabricar(n);
    document.getElementById("output").textContent = fabrica.exportarDatos(n);
};

