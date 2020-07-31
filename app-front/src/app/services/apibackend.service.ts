import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AppSettings} from '../app.settings';

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {

  private BASE_URL = window["cfgApiBaseUrl"] + "/api";

  constructor(private http:HttpClient) { }

 public registroVisitas(visitas){
  return this.http.post(this.BASE_URL+ "/visitas",visitas,{responseType:'text' as 'json'});
 } 
 
 public getTopVisitas(tipoVisita){
   return this.http.get(this.BASE_URL + "/visitas?tipoVisita=" +tipoVisita);
 }
  
}
