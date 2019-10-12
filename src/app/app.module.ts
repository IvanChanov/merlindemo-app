import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { NavbarComponent } from './components/navbar/navbar.component';
import { ApplicationdataComponent } from './components/applicationdata/applicationdata.component';
import { CcapprovalComponent } from './components/ccapproval/ccapproval.component';
import { CcagendaComponent } from './components/ccagenda/ccagenda.component';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ApplicationdataComponent,
    CcapprovalComponent,
    CcagendaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
