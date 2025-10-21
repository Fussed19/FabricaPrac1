import { Fabrica } from "./Fabrica.js";

//COMPROBAMOS EL DOM LO PRIMERO
document.addEventListener("DOMContentLoaded", () => { // () => {} es una funcion anonima.

    const ctxG = document.getElementById('graficoGeneral').getContext('2d');
    const ctxE = document.getElementById('graficoElectrica').getContext('2d');
    const ctxM = document.getElementById('graficoMecanica').getContext('2d');

    let chartG = null;
    let chartE = null;
    let chartM = null;

    function actualizarGrafico(datos) {
        const { contE, contM } = datos.factoria;
        const { contBN, contBE, contGal, contPul, contPint } = datos.estacion;

        if (chartG) chart.destroy(); // destruir anterior si existe
        if (chartE) chart.destroy();
        if (chartM) chart.destroy();
        //GRAFICA GENERAL
        chartG = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Eléctricas', 'Mecánicas'],
                datasets: [{
                    data: [contE, contM],
                    backgroundColor: ['#e9ff23ff', '#ff0000c0'],
                    borderWidth: 0
                }]
            },
            options: {
                cutout: '60%',
                animation: { animateRotate: true, duration: 1000 },
                plugins: {
                    legend: { display: true, position: 'bottom' }
                },
                responsive: true,
                maintainAspectRatio: false
            }
        });
        //GRAFICA ELECTRICA
        chartE = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Barnizado Normal', 'Barnizado Especial'],
                datasets: [{
                    label: 'Cantidad',
                    data: [contBN, contBE],
                    backgroundColor: ['#f2ff82ff', '#48b400d3'],
                }]
            },
            options: {
                scales: {
                    y: { beginAtZero: true }
                },
                plugins: {
                    legend: { display: false }
                },
                responsive: true,
                maintainAspectRatio: false
            }
        });
        //GRAFICA MECANICA
        chartM = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Galvanizado', 'Pulido', 'Pintado'],
                datasets: [{
                    label: 'Cantidad',
                    data: [contGal, contPul, contPint],
                    backgroundColor: ['#f1cd89ff', '#886825ff', '#4d2e00ff'],
                }]
            },
            options: {
                scales: {
                    y: { beginAtZero: true }
                },
                plugins: {
                    legend: { display: false }
                },
                responsive: true,
                maintainAspectRatio: false
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

