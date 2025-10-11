import { Fabrica } from "./Fabrica.js";

//COMPROBAMOS EL DOM LO PRIMERO
document.addEventListener("DOMContentLoaded", () => { // () => {} es una funcion anonima.

    const ctx = document.getElementById('grafico').getContext('2d');
    let chart = null;

    function actualizarGrafico(datos) {
        const { contE, contM } = datos.factoria;
        if (chart) chart.destroy(); // destruir anterior si existe

        chart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Eléctricas', 'Mecánicas'],
                datasets: [{
                    data: [contE, contM],
                    backgroundColor: ['#8e44ad', '#9b59b6'],
                    borderWidth: 0
                }]
            },
            options: {
                cutout: '70%',
                animation: { animateRotate: true, duration: 1000 },
                plugins: {
                    legend: { display: true, position: 'bottom' }
                }
            }
        });
    }




    //Si pulsa el de 100
    document.getElementById('fabricar100').addEventListener('click', () => { 
        let fabrica = new Fabrica();
        const salida = fabrica.fabricar(100);
        document.getElementById('salida').innerText = salida; 

        actualizarGrafico(fabrica);
    });
    //Si pulsa el de 1000
    document.getElementById('fabricar1000').addEventListener('click', () => { 
        let fabrica = new Fabrica();
        const salida = fabrica.fabricar(1000);
        document.getElementById('salida').innerText = salida; 

        actualizarGrafico(fabrica);
    });

});

