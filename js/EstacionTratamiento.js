import { PiezaElectrica, PiezaMecanica } from './Pieza.js';

export class EstacionTratamiento {
    //CONSTRUCTOR
    constructor(){
        //CONTADORES 
        this.contBN = 0; this.contBE= 0; 
        this.contGal= 0; this.contPul= 0; this.contPint= 0; 
    }

    //METODOS

    procesarPieza(pieza){
        if(pieza instanceof PiezaElectrica){ //Comprobamos si es una instancia de electrica
            if(pieza.potencia<10){ // SI ES DE 1 o 5W
                this.contBN++;
                pieza.marca = "Barnizado Normal";
                return pieza;
            } else { // SI ES DE 10 o 20W
                this.contBE++;
                pieza.marca = "Barnizado Especial";
                return pieza;
            }
        } else if(pieza instanceof PiezaMecanica){ //Caso contrario, pieza mecanica
            if(pieza.material == "Acero"){ //SI es de acero
                this.contGal++;
                pieza.marca = "Galvanizada";
                return pieza;
            } else if(pieza.material == "Titanio"){ //SI es de titanio
                this.contPul++;
                pieza.marca = "Pulida";
                return pieza;
            } else { //SI es de carbono
                this.contPint++;
                pieza.marca = "Pintada";
                return pieza;
            }
        }
    }
}