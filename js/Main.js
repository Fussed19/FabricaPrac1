import { Fabrica } from "./Fabrica.js";



document.getElementById('fabricar100').addEventListener('click', () => { 
    let fabrica = new Fabrica();
    const salida = fabrica.fabricar(100);
    document.getElementById('salida').innerText = salida; 
});

document.getElementById('fabricar1000').addEventListener('click', () => { 
    let fabrica = new Fabrica();
    const salida = fabrica.fabricar(1000);
    document.getElementById('salida').innerText = salida; 
});