import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Dep } from 'src/app/models/dep';
import { Konum } from 'src/app/models/konum';
import { DepService } from 'src/app/service/dep.service';
import { KonumService } from 'src/app/service/konum.service';


@Component({
  selector: 'app-konum-detail',
  templateUrl: './konum-detail.component.html',
  styleUrls: ['./konum-detail.component.css'],
  providers:[DepService,KonumService]
})
export class KonumDetailComponent implements OnInit {

  constructor(private depService:DepService,private konumService:KonumService,private activatedRoute:ActivatedRoute) { }

    deps:Dep[]|undefined;
    konum:Konum[]|any
    k:Konum|any
    model2:Konum=new Konum();
    ngOnInit() {
      this.activatedRoute.params.subscribe(params=>{
        this.getById(params["id"])
      });
  
      this.depService.getDep().subscribe(data1=>{
        this.deps=data1;
      });
      
    }
    
    getById(id:any){
      this.konumService.getPersById(id).subscribe(data=>{
        this.konum=data 
        this.k=this.konum[0]
        this.model2.id=this.konum[0].id
        this.model2.DepId=this.konum[0].DepId
        });
      }
  
      add(form:NgForm){
        this.konumService.updatePers(this.model2).subscribe(data=>{})
      }
  
      deletep(){
        this.konumService.deletePers(this.model2.id).subscribe(()=>{
          console.log("silindi")
        })
      }
  }


