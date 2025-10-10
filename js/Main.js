import { Fabrica } from "./Fabrica.js";

let fabrica = new Fabrica();

document.getElementById('fabricar100').addEventListener('click', () => { 
    const salida = fabrica.fabricar(100);
    document.getElementById('salida').innerText = salida; 
});

document.getElementById('fabricar1000').addEventListener('click', () => { 
    const salida = fabrica.fabricar(1000);
    document.getElementById('salida').innerText = salida; 
});