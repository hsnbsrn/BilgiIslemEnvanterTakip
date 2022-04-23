import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Dep } from '../models/dep';
import { Pers } from '../models/pers';
import { Pers1 } from '../models/pers1';
import { DepService } from '../service/dep.service';
import { PersService } from '../service/pers.service';


@Component({
  selector: 'app-personel',
  templateUrl: './personel.component.html',
  styleUrls: ['./personel.component.css'],
  providers:[DepService,PersService]
})


export class PersonelComponent implements OnInit {

  constructor(private depservice:DepService,private persservice:PersService) { }
  filterTerm!: string;
  deps:Dep[]|undefined;
  model : Dep = new Dep();
  pers!:Pers[];
  model2:Pers=new Pers();
  searchValue:string|undefined;
  per1:Pers1[]|any
  p:Pers1|any
  
  ngOnInit() {
    this.depservice.getDep().subscribe(data=>{
      this.deps=data;
    });
    this.persservice.getPers().subscribe(data=>{
      this.pers=data;
    });
    
    
    
    
}
add(form:NgForm){
  
  this.persservice.addPers(this.model2).subscribe(data=>{})

}


}
