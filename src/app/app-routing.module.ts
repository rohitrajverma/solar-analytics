import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailsComponent } from './details/details.component';


const routes: Routes = [
  { path: 'home', component: DashboardComponent },
  { path: 'details/:code', component: DetailsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
