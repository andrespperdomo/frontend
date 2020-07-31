import { Component, OnInit, Output,EventEmitter, Input} from '@angular/core';



@Component({
  selector: 'app-pagination',
  templateUrl: '../view/pagination.component.html',
  styleUrls: ['../style/pagination.component.css']
})
export class PaginationComponent implements OnInit {

 @Input() private page:number;
 
 @Input() private totalPages:number;
 @Input() private numShops:number;
 @Output() paginaEmitter: EventEmitter<number>=new EventEmitter;
 
 mostrar:boolean=true;
 
 
   constructor() {
  
   }

  ngOnInit() {
    
  }
  
  siguiente(){
   this.page++;
   this.pasarPagina();
   this.mostrar=false;
  }
  anterior(){
    this.page--;
    this.pasarPagina();
  }
  pasarPagina(){
  this.mostrar=true;
  this.paginaEmitter.emit(this.page);
  this.mostrar=false;
  }
   

}
