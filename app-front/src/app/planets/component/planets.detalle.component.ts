import { Component, OnInit, Output,EventEmitter, Input} from '@angular/core';
import { Planets } from '../model/planets';
import { SwapiService } from '../../services/swapi.service';
import {Servicio } from '../../utilidad/datos.service';
import {BackendApiService } from '../../services/apibackend.service';
import { Visita } from '../../visitas/model/visita';
import {AppSettings} from '../../app.settings';

@Component({
  selector: 'app-planet-detail',
  template: `
  <div class="container col-md-12" *ngIf="mostrar">
  <h2 class="text-center">Planet detail</h2>
    <div class="row">
                   <div class="col-md-6">
                        <label> Name: </label>
                        <input type="text" [(ngModel)]="planets.name" 
                            class="form-control" />
                      </div>      
                     <div class="col-md-6">   
                        <label for="Name"> Rotation period: </label>
                        <input required type="text" [(ngModel)]="planets.rotation_period"
                            class="form-control" maxlength="28" placeholder="Enter your fullname..." />
                      </div>      	
    </div>
    <div class="row">
                    <div class="form-group col-md-6">
                        <label for="Name"> Orbital period: </label>
                        <input required type="text" [(ngModel)]="planets.orbital_period" 
                            class="form-control phone" maxlength="28" placeholder="Enter your fullname..." />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="Name"> Diameter: </label>
                        <input required type="text" [(ngModel)]="planets.diameter" 
                            class="form-control phone" maxlength="28" placeholder="Enter your fullname..." />
                    </div>
          </div>      
             <div class="row">
                    <div class="form-group col-md-6">
                        <label for="Name">Climate: </label>
                        <input required type="text" [(ngModel)]="planets.climate" 
                            class="form-control phone" maxlength="28" placeholder="Enter your fullname..." />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="Name"> Gravity: </label>
                        <input required type="text" [(ngModel)]="planets.gravity" 
                            class="form-control phone" maxlength="28" placeholder="Enter your fullname..." />
                    </div>
          </div>
          <div class="row">
                    <div class="form-group col-md-6">
                        <label for="Name">Terrain: </label>
                        <input required type="text" [(ngModel)]="planets.terrain" 
                            class="form-control phone" maxlength="28" placeholder="Enter your fullname..." />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="Name"> Population: </label>
                        <input required type="text" [(ngModel)]="planets.population" 
                            class="form-control phone" maxlength="28" placeholder="Enter your fullname..." />
                    </div>
          </div>          
      
</div>
    `,
  styleUrls: ['../style/planets.component.css']
})
export class PlanetsDetailComponent implements OnInit{

 message:any=[]; 
 mensaje:any=[];                                                
 planets: Planets;
 visita:any;
 
 mostrar:boolean=false;
 count:number=0;
 



  constructor(private service:SwapiService,private servicio:Servicio,private serviceApiBackend:BackendApiService) {}
   
   ngOnInit() {
     this.findPeopleForPlanetDetail();
   }
   
   findPeopleForPlanetDetail(){ 
      this.servicio.getValue.subscribe(data=>{
      this.mensaje = data;
	      let servicioSuscription=this.service.getPeopleForPlanet(this.mensaje.valor)
	      .subscribe((response: any) => { 
	      this.count++;  
	      this.planets=response;
	      this.mostrar=true;
	      if(this.count==1){
	        this.registrarVisita(this.planets); 
	      }     
	     })
    })   
   }
   
   registrarVisita(planet){
    if(planet!=null && planet!=undefined){
     this.visita=new Visita(0,planet.name,0,AppSettings.PLANET);
	 let resp=this.serviceApiBackend.registroVisitas(this.visita);
       resp.subscribe((data)=>this.message=data);
    }
  }
  
  

}