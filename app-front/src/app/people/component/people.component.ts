import { Component, Input, OnInit } from '@angular/core';
import { People } from '../model/people';
import { Peoples } from '../model/peoples';
import { Planets } from '../../planets/model/planets';
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
  selector: 'app-people',
  templateUrl: '../view/people.component.html',
  styleUrls: ['../style/people.component.css']
})
export class PeopleComponent implements OnInit {


  closeResult: string;

  people:People=[];

  message:any;
  
  planets:Planets;
  
  parametro:boolean=false;
  
  visita: Visita=new Visita(0,"",0,"");
  
  headerColumns: Array<string> = ['Name','Height','Mass','Hair color','Skin color',
                           'Eye color','Birth year','Gender','Created','Edited'];
                           
                           
  public shops: Array<any> = []; //Listado de tiendas
 
  public page: Number = 1; //Número de página en la que estamos. Será 1 la primera vez que se carga el componente
 
  public totalPages: number; //Número total de páginas
 
  public numShops: number=0; //Total de tiendas existentes
 
  private numResults: number = 10;     
  
  mostrar:boolean=true;                    



  constructor(private service:SwapiService,private modalService: NgbdModalComponent,
  private servicio:Servicio,private serviceApiBackend:BackendApiService) {
  
   }

  ngOnInit() {
      let resp=this.service.getPeopleAll();
       resp.subscribe((data)=>{this.people=data;
       });
       this.pagination(this.page);       
 }
  
 openDialog(people){
   this.registrarVisita(people)
   const array = people.homeworld;
	this.servicio.setValue(array);
    this.modalService.open(true);
  }
  
  registrarVisita(people){
     this.visita=new Visita(0,people.name,0,AppSettings.PEOPLE);
	 let resp=this.serviceApiBackend.registroVisitas(this.visita);
       resp.subscribe((data)=>this.message=data);
  }
  
    pagination(page){
     let resp=this.service.getPaginationPeople(page);
       resp.subscribe((data)=>{
       const dataPagination: any = data;
        this.people=dataPagination;
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
