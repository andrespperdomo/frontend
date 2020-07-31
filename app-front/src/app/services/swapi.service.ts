import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AppSettings} from '../app.settings';


@Injectable({
  providedIn: 'root'
})
export class SwapiService {


 private BASE_URL ="https://swapi.dev/api";
  
  constructor(private http:HttpClient) { }

/*
  public doRegistration(user){
    return this.http.post("http://localhost:9090/register",user,{responseType:'text' as 'json'});
  }
*/
  public getPlanetsAll(){
    return this.http.get(this.BASE_URL +"/planets/");
  }
   public getPeopleAll(){
    return this.http.get(this.BASE_URL +"/people/");
  }
  
  public getPeopleForPlanet(urlPersona){
   return this.http.get(urlPersona);
  }
  public getPaginationPlanet(page){
    return this.http.get(this.BASE_URL + "/planets/?page="+page);
  }
  public getPaginationPeople(page){
    return this.http.get(this.BASE_URL+"/people/?page="+page);
  }
}
