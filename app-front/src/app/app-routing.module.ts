import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanetsComponent } from './planets/component/planets.component';
import { PeopleComponent } from './people/component/people.component';
import { NgbdModalComponent } from './modal/component/modal.component';
import { VisitasComponent } from './visitas/component/visitas.component';
import { SpinnerComponent } from './spinner/spinner.component';


const routes: Routes = [
 // {path:"",redirectTo:"register",pathMatch:"full"},
   {path:"planets",component:PlanetsComponent},
   {path:"people",component:PeopleComponent},
   {path:"dialog",component:NgbdModalComponent},
    {path:"visitas",component:VisitasComponent},
     {path:"spinner",component:SpinnerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
