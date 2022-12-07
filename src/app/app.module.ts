import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { StudentListComponent } from './student-list/student-list.component';
import { CartableComponent } from './cartable/cartable.component';
import { TopHeadComponent } from './top-head/top-head.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JalaliPipe } from './pipe/persian-data-pipe';
import { MemberListService } from './service/member-list-service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    StudentListComponent,
    CartableComponent,
    TopHeadComponent,
    DashboardComponent,
    JalaliPipe
    ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
    ],
  providers: [MemberListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
