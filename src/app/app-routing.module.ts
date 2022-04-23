import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CihazComponent } from './cihaz/cihaz.component';
import { DepartmanComponent } from './departman/departman.component';
import { KasaComponent } from './kasa/kasa.component';
import { KonumDetailComponent } from './konum/konum-detail/konum-detail.component';
import { KonumComponent } from './konum/konum.component';
import { PersDetailComponent } from './personel/pers-detail/pers-detail.component';
import { PersonelComponent } from './personel/personel.component';
import { TableComponent } from './table/table.component';



const routes: Routes = [
  {path:'departman',component:DepartmanComponent},
  {path:'personel',component:PersonelComponent},
  {path:"persDetail/:id",component:PersDetailComponent},
  {path:'table-component',component:TableComponent},
  {path:'konum',component:KonumComponent},
  {path:"konumDetail/:id",component:KonumDetailComponent},
  {path:"cihaz",component:CihazComponent},
  {path:"Kasa/:id",component:KasaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
   declarations: [	
   ],
   providers:[]
})
export class AppRoutingModule { }
