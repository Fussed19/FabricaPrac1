import { Fabrica } from "./Fabrica.js";
//SI el DOM esta cargado 
document.addEventListener("DOMContentLoaded", () => {

    // CODIGO DE LAS GRÁFICAS
    //https://www.chartjs.org/ Documentación de la que he extraido ejemplos para implementar mis gráficas.
    
    let chartG = null;
    let chartE = null;
    let chartM = null;
    //Función para actualizar los gráficos
    function actualizarGrafico(datos) {
        const { contE, contM } = datos.factoria;
        const { contBN, contBE, contGal, contPul, contPint } = datos.estacion;

        //BOrrar clase oculto para mostrar gráficos
        document.getElementById('tituloGraficas').classList.remove('oculto');
        document.getElementById('graficoGeneral').classList.remove('oculto');
        document.getElementById('subgraficos').classList.remove('oculto');

        //Destruir gráficos previos si existen
        if (chartG) { chartG.destroy(); chartG = null; }
        if (chartE) { chartE.destroy(); chartE = null; }
        if (chartM) { chartM.destroy(); chartM = null; }

        const ctxG = document.getElementById('graficoGeneral').getContext('2d');
        const ctxE = document.getElementById('graficoElectrica').getContext('2d');
        const ctxM = document.getElementById('graficoMecanica').getContext('2d');

        //GRAFICO GENERAL
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
                animation: { animateRotate: true, duration: 800 },
                plugins: {
                    legend: { display: true, position: 'bottom' }
                },
                responsive: true,
                maintainAspectRatio: true
            }
        });

        //GRÁFICO PIEZAS ELÉCTRICAS
        chartE = new Chart(ctxE, {
            type: 'bar',
            data: {
                labels: ['Barnizado Normal', 'Barnizado Especial'],
                datasets: [{
                    label: 'Cantidad',
                    data: [contBN, contBE],
                    backgroundColor: ['#3498db', '#2ecc71']
                }]
            },
            options: {
                scales: { y: { beginAtZero: true } },
                plugins: { legend: { display: false } },
                responsive: true,
                maintainAspectRatio: true
            }
        });

        //GRÁFICO PIEZAS MECÁNICAS
        chartM = new Chart(ctxM, {
            type: 'bar',
            data: {
                labels: ['Galvanizado', 'Pulido', 'Pintado'],
                datasets: [{
                    label: 'Cantidad',
                    data: [contGal, contPul, contPint],
                    backgroundColor: ['#9b59b6', '#f1c40f', '#e67e22']
                }]
            },
            options: {
                scales: { y: { beginAtZero: true } },
                plugins: { legend: { display: false } },
                responsive: true,
                maintainAspectRatio: true
            }
        });
    }

    //BOTONES
    //Boton 100
    document.getElementById('fabricar100').addEventListener('click', () => { 
        const fabrica = new Fabrica();
        const salida = fabrica.fabricar(100);
        document.getElementById('salida').innerText = salida; 
        actualizarGrafico(fabrica);
    });
    //Boton 1000
    document.getElementById('fabricar1000').addEventListener('click', () => { 
        const fabrica = new Fabrica();
        const salida = fabrica.fabricar(1000);
        document.getElementById('salida').innerText = salida; 
        actualizarGrafico(fabrica);
    });
    //Boton custom
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
