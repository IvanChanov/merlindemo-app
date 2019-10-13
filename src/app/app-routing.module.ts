import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ApplicationdataComponent } from './components/applicationdata/applicationdata.component';
import { CcagendaComponent } from './components/ccagenda/ccagenda.component';
import { CcapprovalComponent } from './components/ccapproval/ccapproval.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'appdata', component: ApplicationdataComponent },
  { path: 'ccagenda', component: CcagendaComponent },
  { path: 'ccapproval', component: CcapprovalComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
