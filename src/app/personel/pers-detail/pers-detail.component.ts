import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Dep } from 'src/app/models/dep';
import { Pers } from 'src/app/models/pers';
import { Pers1 } from 'src/app/models/pers1';
import { AlertifyService } from 'src/app/service/alertify.service';
import { DepService } from 'src/app/service/dep.service';
import { PersService } from 'src/app/service/pers.service';

@Component({
  selector: 'app-pers-detail',
  templateUrl: './pers-detail.component.html',
  styleUrls: ['./pers-detail.component.css'],
  providers:[PersService,DepService,AlertifyService]
})
export class PersDetailComponent implements OnInit {

  constructor(private persService:PersService,private activatedRoute:ActivatedRoute,private depDervice:DepService,private alertify:AlertifyService) { }
 
  per1:Pers1[]|any
  
  p:Pers1|any
  
  deps:Dep[]|undefined;
  per2=[];

  model2:Pers=new Pers();
  

  
  
  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      this.getById(params["id"])
    });

    this.depDervice.getDep().subscribe(data1=>{
      this.deps=data1;
    });
    
  }
  
  getById(id:any){
    this.persService.getPersById(id).subscribe(data=>{
      this.per1=data 
      this.p=this.per1[0]
      this.model2.id=this.per1[0]?.id
      this.model2.adsoyad=this.per1[0]?.adsoyad
      this.model2.telefon=this.per1[0].telefon
      this.model2.email=this.per1[0].email
      });
    }

    add(form:NgForm){
      this.persService.updatePers(this.model2).subscribe(data=>{})
      this.alertify.success("Personel Güncellendi")
    }

    deletep(){
      this.persService.deletePers(this.model2.id).subscribe(()=>{
        console.log("silindi")
      })
    }
  }


