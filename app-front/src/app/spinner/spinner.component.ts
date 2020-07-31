import { Component, OnInit, Output,EventEmitter, Input} from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderService } from '../services/loader.service';




@Component({
  selector: 'app-spinner',
  template: `<div class="content" *ngIf="isLoading| async"><div class="spinner"></div></div>`,
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent{

 constructor(public loaderService:LoaderService) { }

isLoading: Subject<boolean> = this.loaderService.isLoading; 


}