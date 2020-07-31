import { Component, OnInit, Output,EventEmitter, Input} from '@angular/core';





@Component({
  selector: 'app-spinner',
  template: `<div class="content" *ngIf="mostrar"><div class="spinner"></div></div>`,
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent  implements OnInit{

 @Input() private mostrar:boolean;

ngOnInit() {

}
  

}