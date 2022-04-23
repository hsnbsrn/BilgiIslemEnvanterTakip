import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Kasa } from '../models/kasa';
import { Konum } from '../models/konum';
import { AlertifyService } from '../service/alertify.service';
import { KasaService } from '../service/kasa.service';
import { KonumService } from '../service/konum.service';

@Component({
  selector: 'app-kasa',
  templateUrl: './kasa.component.html',
  styleUrls: ['./kasa.component.css'],
  providers:[KasaService,KonumService,AlertifyService]
})
export class KasaComponent implements OnInit {

  constructor(private kasaService:KasaService,private activatedRoute:ActivatedRoute,private alertify:AlertifyService,private konumService:KonumService) { }

  kasa1:Kasa[]|any
  k:Kasa|any
  model2:Kasa=new Kasa
  konums:Konum[]|undefined
  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      this.getById(params["id"])
    });
    this.konumService.getPers().subscribe(data=>{
      this.konums=data
    })
  }
  getById(id:any){
    this.kasaService.getKasaById(id).subscribe(data=>{
      this.kasa1=data
      this.k=this.kasa1[0]
      this.model2.Cihazid=this.k.Cihazid
      this.model2.Anakart=this.k.Anakart
      this.model2.Dvi=this.k.Dvi
      this.model2.EkranKarti=this.k.EkranKarti
      this.model2.Hdmi=this.k.Hdmi
      this.model2.Ip=this.k.Ip
      this.model2.Islemci=this.k.Islemci
      this.model2.Vga=this.k.Vga
      this.model2.Konumid=this.k.Konumid
      
      });
    }
    add(form:NgForm){
      this.kasaService.updateKasa(this.model2).subscribe(data=>{})
      this.alertify.success("Cihaz Güncellendi")
    }
    deletep(){
      this.kasaService.deleteKasa(this.model2.Cihazid).subscribe(()=>{
        console.log("silindi")
      })
    }

}
