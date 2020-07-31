import { Component, OnInit, Output,EventEmitter, Input} from '@angular/core';
import { Planet } from '../model/planet';
import { Planets } from '../model/planets';
import { Peoples } from '../../people/model/peoples';
import { SwapiService } from '../../services/swapi.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalContent } from '../../modal/component/modal.component';
import { NgbdModalComponent } from '../../modal/component/modal.component';
import {Servicio } from '../../utilidad/datos.service';
import {BackendApiService } from '../../services/apibackend.service';
import { Visita } from '../../visitas/model/visita';
import {AppSettings} from '../../app.settings';




@Component({
 providers:[NgbdModalComponent],
  selector: 'app-planets',
  templateUrl: '../view/planets.component.html',
  styleUrls: ['../style/planets.component.css']
})
export class PlanetsComponent implements OnInit {
  
 names : string [];

  planet:any=[];
  peoples:any;

  message:any;
  
  headerColumns: Array<string> = ['Name','Rotation period','Orbital period','Diameter','Climate',
                           'Gravity','Terrain','Surface water','Population'];
                           
  peoplesList: Array<Peoples> = [];
  
  visita:Visita = new Visita(0,"",0,"");
  
  
  public shops: Array<any> = []; //Listado de tiendas
 
  public page: Number = 1; //Número de página en la que estamos. Será 1 la primera vez que se carga el componente
 
  public totalPages: number; //Número total de páginas
 
  public numShops: number; //Total de tiendas existentes
 
  private numResults: number = 10;
  

  constructor(private service:SwapiService,private modalService: NgbdModalComponent,private servicio:Servicio,
              private serviceApiBackend:BackendApiService) {  
   }

  ngOnInit() {     
      let resp=this.service.getPlanetsAll();
       resp.subscribe((data)=>{this.planet=data;
       });
      this.pagination(this.page);  
  }
  
  openDialog(planets){
   this.registrarVisita(planets);
   const array = planets.residents;
   this.servicio.setValue(array);
   this.modalService.open('false');
  }
  
   registrarVisita(planet){
    if(planet!=null && planet!=undefined){
	     this.visita=new Visita(0,planet.name,0,AppSettings.PLANET);
		 let resp=this.serviceApiBackend.registroVisitas(this.visita);
	       resp.subscribe((data)=>this.message=data);
     }
  }
  
  pagination(page){
     let resp=this.service.getPaginationPlanet(page);
       resp.subscribe((data)=>{
        const dataPagination:any =data; 
        this.planet=dataPagination;
        this.numShops=dataPagination.count;
         this.totalPages = Math.round(this.numShops / this.numResults);
       });
  }
  
  
  //Función para pasar de página
 
  //Esta función se ejecuta cada vez que se desencadena
 
  //un evento sobre el componente hijo (app-pagination)
 
  goToPage(page: number){
 
    this.page = page;
 
   this.pagination(page);
 
  }

}
