import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cihaz } from '../models/cihaz';
import { Kasa } from '../models/kasa';
import { Konum } from '../models/konum';
import { Tur } from '../models/tur';
import { CihazService } from '../service/cihaz.service';
import { KasaService } from '../service/kasa.service';
import { KonumService } from '../service/konum.service';
import { TurService } from '../service/tur.service';

@Component({
  selector: 'app-cihaz',
  templateUrl: './cihaz.component.html',
  styleUrls: ['./cihaz.component.css'],
  providers:[CihazService,KonumService,KasaService,TurService]
})
export class CihazComponent implements OnInit {

  constructor(private cihazService:CihazService,private konumService:KonumService,private turService:TurService,private kasaService:KasaService) { }

  customClass: string = 'customClass';
  

  cihazs:Cihaz[]|undefined
  cihaz1:Cihaz= new Cihaz()
  filterTerm!: string;
  filterTerm1!: string;
  model2:Kasa=new Kasa();
  konums:Konum[]|undefined
  turs:Tur[]|undefined
  kasas:Kasa[]|undefined
  ngOnInit() {
    this.cihazService.getCihaz().subscribe(data=>{
      this.cihazs=data;
    })
    this.konumService.getPers().subscribe(data=>{
      this.konums=data
    })
    this.turService.getTur().subscribe(data=>{
      this.turs=data
    })
    this.kasaService.getKasa().subscribe(data=>{
      this.kasas=data
    })
  }
  
  kasaAdd(form:NgForm){
  
    this.kasaService.addKasa(this.model2).subscribe(data=>{})
  
  }

}
