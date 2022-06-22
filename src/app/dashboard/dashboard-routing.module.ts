import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';



//Routes especifica rotas.
const routes: Routes =[
  {path: 'dashboard', component: DashboardComponent },
];

@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]

})
export class DashboardRoutingModule { }
