import {PiezaElectrica, PiezaMecanica} from './Pieza.js';

export class Factoria {
    //CONSTRUCTOR
    constructor( p1){ 
        // p1 es el porcentaje relativos de probabilidad de que sea de un tipo u otro en % (el p2 se deduce del p1)
        this.contE = 0; this.contM = 0; // Contadores de piezas, por defecto en 0
 
    }

    //METODOS
    generarPieza(p1) {
            if ((Math.floor(Math.random() * 100)) < p1) { // CASO P1 Electrico
                this.contE++;
                return new PiezaElectrica;
            } else { // CASO P2 Mecanico
                this.contM++;
                return new PiezaMecanica;
            }
        }
}