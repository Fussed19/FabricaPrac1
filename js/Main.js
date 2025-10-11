import { Fabrica } from "./Fabrica.js";

//COMPROBAMOS EL DOM LO PRIMERO
document.addEventListener("DOMContentLoaded", () => { // () => {} es una funcion anonima.

    //Si pulsa el de 100
    document.getElementById('fabricar100').addEventListener('click', () => { 
        let fabrica = new Fabrica();
        const salida = fabrica.fabricar(100);
        document.getElementById('salida').innerText = salida; 
    });
    //Si pulsa el de 1000
    document.getElementById('fabricar1000').addEventListener('click', () => { 
        let fabrica = new Fabrica();
        const salida = fabrica.fabricar(1000);
        document.getElementById('salida').innerText = salida; 
    });

});

