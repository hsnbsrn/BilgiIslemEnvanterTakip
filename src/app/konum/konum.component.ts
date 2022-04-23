import { Component, OnInit } from '@angular/core';
import { Konum } from '../models/konum';
import { KonumService } from '../service/konum.service';
import { NgForm } from '@angular/forms';
import { DepService } from '../service/dep.service';
import { Dep } from '../models/dep';

@Component({
  selector: 'app-konum',
  templateUrl: './konum.component.html',
  styleUrls: ['./konum.component.css'],
  providers:[KonumService,DepService]
})
export class KonumComponent implements OnInit {

  constructor(private konumService:KonumService,private depservice:DepService) { }
  filterTerm!: string;
  konums!:Konum[]
  deps:Dep[]|undefined;
  model2:Konum=new Konum();
  id1:number=1
  ngOnInit() {
    this.konumService.getPers().subscribe(data=>{
      this.konums=data  
    });
    this.depservice.getDep().subscribe(data=>{
      this.deps=data;
    });
    

}

add(form:NgForm){
  
  this.konumService.addPers(this.model2).subscribe(data=>{})
}
}