import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../../services/swapi.service';
import { Visita } from '../model/visita';
import { Visitas } from '../model/visitas';
import {BackendApiService } from '../../services/apibackend.service';
import {AppSettings} from '../../app.settings';





@Component({
  selector: 'app-visitas',
  templateUrl: '../view/visitas.component.html'
})
export class VisitasComponent implements OnInit {


   mostrar:boolean = true;
   headerPeople:Array<String>=["People","Count"];
   headerPlanet:Array<String>=["Planet","Count"];
   
   planets:any=[];
   peoples:any=[];

  constructor(private service:BackendApiService) {

   }

  ngOnInit() {
      let resp=this.service.getTopVisitas(AppSettings.PLANET);
       resp.subscribe((data)=>{this.planets=data; this.mostrar=false; });
       
       let respuesta=this.service.getTopVisitas(AppSettings.PEOPLE);
       respuesta.subscribe((data)=>{this.peoples=data; this.mostrar=false; });

  }
  

}
