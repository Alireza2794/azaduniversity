import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartableComponent } from './cartable/cartable.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentListComponent } from './student-list/student-list.component';

const routes: Routes = [
  {path : 'dashboard' , title: 'Dashboard' , component : DashboardComponent },
  {path : 'studen-list' , title : 'Student list' , component : StudentListComponent},
  {path : 'cartable' , title :'Cartable' , component : CartableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
