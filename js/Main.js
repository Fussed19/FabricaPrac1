import { Fabrica } from "./Fabrica.js";

//COMPROBAMOS EL DOM LO PRIMERO
document.addEventListener("DOMContentLoaded", () => { // () => {} es una funcion anonima.

    let chartG = null;
    let chartE = null;
    let chartM = null;

    function actualizarGrafico(datos) {
        const { contE, contM } = datos.factoria;
        const { contBN, contBE, contGal, contPul, contPint } = datos.estacion;
        console.log('Datos recibidos en actualizarGrafico:', datos);
        
        // Mostrar las gráficas
        document.getElementById('tituloGraficas').classList.remove('oculto');
        document.getElementById('graficoGeneral').classList.remove('oculto');
        document.getElementById('subgraficos').classList.remove('oculto');

        // Destruir gráficas anteriores si existen
        if (chartG instanceof Chart) {
            chartG.destroy();
            chartG = null;
        }
        if (chartE instanceof Chart) {
            chartE.destroy();
            chartE = null;
        }
        if (chartM instanceof Chart) {
            chartM.destroy();
            chartM = null;
        }

        // Obtener contextos
        const ctxG = document.getElementById('graficoGeneral').getContext('2d');
        const ctxE = document.getElementById('graficoElectrica').getContext('2d');
        const ctxM = document.getElementById('graficoMecanica').getContext('2d');

        // Crear gráficos 
        chartG = new Chart(ctxG, {
            type: 'doughnut',
            data: {
                labels: ['Eléctricas', 'Mecánicas'],
                datasets: [{
                    data: [contE, contM],
                    backgroundColor: ['#3498db', '#e74c3c'],
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

        chartE = new Chart(ctxE, {
            type: 'bar',
            data: {
                labels: ['Barnizado Normal', 'Barnizado Especial'],
                datasets: [{
                    label: 'Cantidad',
                    data: [contBN, contBE],
                    backgroundColor: ['#3498db', '#2ecc71'],
                }]
            },
            options: {
                scales: { y: { beginAtZero: true } },
                plugins: { legend: { display: false } },
                responsive: true,
                maintainAspectRatio: false
            }
        });

        chartM = new Chart(ctxM, {
            type: 'bar',
            data: {
                labels: ['Galvanizado', 'Pulido', 'Pintado'],
                datasets: [{
                    label: 'Cantidad',
                    data: [contGal, contPul, contPint],
                    backgroundColor: ['#9b59b6', '#f1c40f', '#e67e22'],
                }]
            },
            options: {
                scales: { y: { beginAtZero: true } },
                plugins: { legend: { display: false } },
                responsive: true,
                maintainAspectRatio: false
            }
        });
    }





    //Si pulsa el de 100
    document.getElementById('fabricar100').addEventListener('click', () => { 
        let fabrica = new Fabrica();
        const salida = fabrica.fabricar(100);
        console.log('DEBUG:', fabrica);
        document.getElementById('salida').innerText = salida; 

        actualizarGrafico(fabrica);
    });
    //Si pulsa el de 1000
    document.getElementById('fabricar1000').addEventListener('click', () => { 
        let fabrica = new Fabrica();
        const salida = fabrica.fabricar(1000);
        console.log('DEBUG:', fabrica);
        document.getElementById('salida').innerText = salida; 

        actualizarGrafico(fabrica);
    });
    //CAMPO PERSONALIZADO
    document.getElementById('fabricarPersonalizado').addEventListener('click', () => {
        const input = document.getElementById('cantidadPersonalizada');
        const cantidad = parseInt(input.value);

        if (isNaN(cantidad) || cantidad <= 0) {
            alert("Por favor, introduce una cantidad válida mayor que 0.");
            return;
        }

        const fabrica = new Fabrica();
        const salida = fabrica.fabricar(cantidad);
        document.getElementById('salida').innerText = salida;

        actualizarGrafico(fabrica);
    });

});

