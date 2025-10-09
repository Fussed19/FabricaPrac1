import { PiezaElectrica, PiezaMecanica } from './Pieza.js';

export class EstacionTratamiento {
    //CONSTRUCTOR
    constructor(){
        //CONTADORES 
        this.contBN; this.contBE; this.contGal; this.contPul; this.contPint; 
    }

    //METODOS

    procesarPieza(pieza){
        if(pieza instanceof PiezaElectrica){ //Comprobamos si es una instancia de electrica
            if(pieza.potencia<10){ // SI ES DE 1 o 5W
                contBN++;
                pieza.marca = "Barnizado Normal";
                return pieza;
            } else { // SI ES DE 10 o 20W
                contBE++;
                pieza.marca = "Barnizado Especial";
                return pieza;
            }
        } else if(pieza instanceof PiezaMecanica){ //Caso contrario, pieza mecanica
            if(pieza.material == "Acero"){ //SI es de acero
                contGal++;
                pieza.marca = "Galvanizada";
                return pieza;
            } else if(pieza.material == "Titanio"){ //SI es de titanio
                contPul++;
                pieza.marca = "Pulida";
                return pieza;
            } else { //SI es de carbono
                contPint++;
                pieza.marca = "Pintada";
                return pieza;
            }
        }
    }
}