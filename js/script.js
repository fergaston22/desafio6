//simulador para saber los destinos que desea conocer el usuario
alert("Elija los tres destinos de sus sueños")

class destinos{
    constructor(paquete, transporte,alojamiento){

        this.paquete = paquete;
        this.transporte = transporte;
        this.alojamiento = alojamiento;

    }
}

let destinosExclusivos= [];
//for
for (let i =0; i < 3; i++){
    //info. necesaria para una base de datos(?)
    let paquete = prompt("Ingrese el destino que le gustaria visitar").toUpperCase();
    let transporte = prompt("Ingrese el transporte en el que le gustaria viajar").toUpperCase();
    let alojamiento = prompt("Ingrese el alojamiento que le gustaria").toUpperCase();

    destinosExclusivos.push(new destinos (paquete, transporte, alojamiento));

    
}
console.table(destinosExclusivos);

//for...of
for (let destinos of destinosExclusivos){
    document.write("<br>" +"Elegiste el destino: "+ destinos.paquete + "<br>");
    document.write("El medio de trasnporte en el que te gustaria viajar  es en " + destinos.transporte + "<br>");
    document.write("El tipo de alojamiento que te gustaria es: " + destinos.alojamiento + "<br>");

  
}












