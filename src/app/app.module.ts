import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmanComponent } from './departman/departman.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PersonelComponent } from './personel/personel.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { CommonModule } from '@angular/common';
import { PersDetailComponent } from './personel/pers-detail/pers-detail.component';
import { PersService } from './service/pers.service';
import { KonumComponent } from './konum/konum.component';
import { TableComponent } from './table/table.component';
import { KonumDetailComponent } from './konum/konum-detail/konum-detail.component';
import { CihazComponent } from './cihaz/cihaz.component';
import { KasaComponent } from './kasa/kasa.component';
import { AnimationBuilder } from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
  declarations: [						
    AppComponent,
      DepartmanComponent,
      PersonelComponent,
      TableComponent,
      PersDetailComponent,
      KonumComponent,
      KonumDetailComponent,
      CihazComponent,
      KasaComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,RouterModule,
    BrowserModule,
    FormsModule,
    Ng2SearchPipeModule,
    CommonModule,
    RouterModule,
    AccordionModule,
    BrowserAnimationsModule,
    TooltipModule,
    ProgressbarModule.forRoot(),
    FontAwesomeModule
    
    
    
    
    
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
