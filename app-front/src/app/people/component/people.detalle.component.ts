import { Component, OnInit, Output,EventEmitter, Input} from '@angular/core';
import { SwapiService } from '../../services/swapi.service';
import { Peoples } from '../model/peoples';
import {Servicio } from '../../utilidad/datos.service';





@Component({
  selector: 'app-people-detail',
  template: `
  <div *ngIf="mostrar">
    <h2 class="text-center">People details</h2>
    <table class="table table-striped custab">
         <thead>
        <tr>
            <th *ngFor="let header of headerColumnsDetails">{{header}}</th>
        </tr>
    </thead>
    <tbody>
        <tr *ngFor="let peoples of peoplesArray">
            <td>{{peoples.name}}</td>
            <td>{{peoples.height}}</td>
            <td>{{peoples.mass}}</td>
            <td>{{peoples.hair_color}}</td>
            <td>{{peoples.skin_color}}</td>
            <td>{{peoples.eye_color}}</td>
            <td>{{peoples.gender}}</td>
         </tr>
    </tbody>
    </table>
    </div>
    `,
  styleUrls: ['../style/people.component.css']
})
export class PeopleDetailComponent {

 valor : string;
headerColumnsDetails: Array<string> = ['Name','Height','Mass','Hair color','Skin color',
                           'Eye color','Gender'];

                                            
 peoplesArray: Array<Peoples>=[];
 mostrar:boolean=false;
 peoples:Peoples;
 mensaje:any;


  constructor(private service:SwapiService,private servicio:Servicio) {
     servicio.getValue.subscribe(data=>{ 
      this.mensaje = data;  
       for (let clave of this.mensaje.valor){
		  let resp=this.service.getPeopleForPlanet(clave);
	      resp.subscribe((response: any) => {      
	      this.peoples=response;
	      this.peoplesArray.push(this.peoples);
	      this.mostrar=true;
	     }) 
	    }
      
      
    }) 
   }
 
}