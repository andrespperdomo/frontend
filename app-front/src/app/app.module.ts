import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppSettings } from './app.settings';
import { PlanetsComponent } from './planets/component/planets.component';
import { PeopleDetailComponent } from './people/component/people.detalle.component';
import { PlanetsDetailComponent } from './planets/component/planets.detalle.component';
import { PeopleComponent } from './people/component/people.component';
import { VisitasComponent } from './visitas/component/visitas.component';
import { PaginationComponent } from './pagination/component/pagination.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { HttpConfigInterceptor } from './interceptor/httpconfig.interceptor';

import { SwapiService } from './services/swapi.service';
import { LoaderService } from './services/loader.service';
import { Servicio } from './utilidad/datos.service';
import { BackendApiService } from './services/apibackend.service';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

import {NgbActiveModal,NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalComponent } from './modal/component/modal.component';
import { NgbdModalContent } from './modal/component/modal.component';


@NgModule({
  declarations: [
    AppComponent,
    PlanetsComponent,
    PeopleComponent,
    VisitasComponent,
    NgbdModalComponent,
    NgbdModalContent,
    PeopleDetailComponent,
    PlanetsDetailComponent,
    PaginationComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [SwapiService,Servicio,BackendApiService, NgbActiveModal,AppSettings,LoaderService,
  {provide:HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor,multi:true}],
   entryComponents: [NgbdModalComponent,NgbdModalContent],
  bootstrap: [AppComponent]
})
export class AppModule { }
