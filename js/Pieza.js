export class Pieza {
    //CONSTRUCTOR
    constructor(listaNombres){
        this.nombre=this.seleccionarValor(listaNombres); 
        this.codigo=this.generarCodigo(); 
        this.fecha=new Date().toLocaleString();
    }

    //METODOS
    generarCodigo(){
        //GENERAMOS SOLO NUMERO PORQUE LA LETRA SE ESPECIFICA SEGUN TIPO DE PIEZA
        let codigo = ""; 
        for(let i = 0; i<10; i++){
            codigo += Math.floor(Math.random() * 10); //Numero entre 0 y 9
        }

        return codigo;
    }

    seleccionarValor(lista){ //ESTE METODO RECIBE UNA LISTA Y SELECIONA UN ELEMENTO (Todos igual de probables)
        return lista[Math.floor(Math.random() * lista.length)];
    }
}     

export class PiezaElectrica extends Pieza {
    //CONSTRUCTOR
    constructor(){
        const nombresElectrica = [
            "Placa ABS", "Centralita encendido",  "Bornes cableado",
            "Alternador", "Encendido"
        ]
        const voltajes = [
            3.3, 5, 12, 240
        ]
        const potencias = [
            1, 5, 10, 20
        ]
        super(nombresElectrica);

        this.potencia = this.seleccionarValor(potencias);
        this.voltaje = this.seleccionarValor(voltajes);
        this.codigo += "E"; //Añadimos la E como identificador de electrica en el codigo
    }

}

export class PiezaMecanica extends Pieza {
    //CONSTRUCTOR
    constructor(){
        const nombresMecanica = [
            "Larguero inferior", "Guardabarros", "Larguero superior",
            "Subchasis", "Puerta"
        ]
        const materiales = [
            "Acero", "Titanio", "Carbono"
        ]

        super(nombresMecanica);
        this.material = this.seleccionarValor(materiales);
        this.codigo += "M"; //Añadimos la M como identificador de mecanica en el codigo
    }
    
}