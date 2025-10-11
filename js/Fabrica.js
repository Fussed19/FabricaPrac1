import { Factoria } from "./Factoria.js";
import { EstacionTratamiento } from "./EstacionTratamiento.js";

export class Fabrica{
    //CONSTRUCTOR
    constructor(){
        this.factoria = new Factoria();
        this.estacion = new EstacionTratamiento();
        this.almacen = [];
    }
    //METODOS

    fabricar(n){
        for(let i = 0; i<n;i++){
            this.almacen.push(this.estacion.procesarPieza(this.factoria.generarPieza()));  
            /*Parece enrevesado, pero simplemente desde dentro a fuera:  
                1- this.factoria.generarPieza --> devuelve una pieza generada aleatoriamente
                2- this.estacion.procesasrPieza --> le añade la marca segun tipo
                3- this.almacen.push --> esto es opcional, simplemente guarda las piezas generadas en un array 
                (gasto de memoria inecesario para el enunciado, pero se hace logico que se guarden las piezas generadas)
                */
        }

        return this.exportarDatos(n);
    }
    //Este devuelve una cadena con los resultados
    exportarDatos(n){
        return `Piezas totales: ${n} 
    \n\t · Eléctricas: ${this.factoria.contE}
    \n\t\t - Barniz normal: ${this.estacion.contBN}
    \n\t\t - Barniz especial: ${this.estacion.contBE}
    \n\t · Mecánicas: ${this.factoria.contM}
    \n\t\t - Galvanizadas: ${this.estacion.contGal}
    \n\t\t - Pulidas: ${this.estacion.contPul}
    \n\t\t - Pintadas: ${this.estacion.contPint}`;
    }
}

