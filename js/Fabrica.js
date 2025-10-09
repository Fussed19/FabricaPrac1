import { Factoria } from "./Factoria.js";
import { EstacionTratamiento } from "./EstacionTratamiento.js";

export class Fabrica{
    //CONSTRUCTOR
    constructor(){
        this.factoria = new Factoria();
        this.estacion = new EstacionTratamiento();
        this.almacen = [];
    }

    fabricar(n){
        for(let i = 0; i<n;i++){
            this.almacen.push(this.estacion.procesarPieza(this.factoria.generarPieza()));  
            /*PArece enrevesado, pero simplemente desde dentro a fuera:  
                1- this.factoria.generarPieza --> devuelve una pieza generada aleatoriamente
                2- this.estacion.procesasrPieza --> le añade la marca segun tipo
                3- this.almacen.push --> esto es opcional, simplemente guarda las piezas generadas en un array 
                (gasto de memoria inecesario para el enunciado, pero se hace logico que se guarden las piezas generadas)
                */
        }

        return this.exportarDatos(n);
    }

    exportarDatos(n){
        return `Piezas totales: ${n} 
· Eléctricas: ${this.factoria.contE}
  - Barniz normal: ${this.estacion.contBN}
  - Barniz especial: ${this.estacion.contBE}
· Mecánicas: ${this.factoria.contM}
  - Galvanizadas: ${this.estacion.contGal}
  - Pulidas: ${this.estacion.contPul}
  - Pintadas: ${this.estacion.contPint}`;
    }
}

