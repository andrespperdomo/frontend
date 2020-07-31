export class Visita{
     id:number;
     visitado:string;
     conteo:number;
     tipoVisita:string;
     
     constructor(
     id:number,
     visitado:string,
     conteo:number,
     tipoVisita:string
    ){
      this.id=id;
      this.visitado=visitado;
      this.conteo=conteo;
      this.tipoVisita=tipoVisita;
    }
}