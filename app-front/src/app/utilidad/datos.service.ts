//our root app component
import {Component, NgModule, VERSION, Injectable} from '@angular/core'
import { BehaviorSubject } from 'rxjs';

// SERVICIO QUE COMUNICA
@Injectable({
  providedIn: 'root'
})
export class Servicio{
  getValue: BehaviorSubject<any> = new BehaviorSubject({});
  
  setValue(value){
    return this.getValue.next({valor: value});
  }
  
}

