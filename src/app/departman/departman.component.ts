import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DepService } from '../service/dep.service';
import { Dep } from '../models/dep';
import {MatTableDataSource, MatTableModule, _MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-departman',
  templateUrl: './departman.component.html',
  styleUrls: ['./departman.component.css'],
  providers:[DepService]
})
export class DepartmanComponent implements OnInit {

  constructor(private depService:DepService) { }

  deps:Dep[]|undefined
  model : Dep = new Dep();
  
  ngOnInit() {
    this.depService.getDep().subscribe(data=>{
      this.deps=data
    })
    
  }

  add(form:NgForm){
    this.depService.addDep(this.model).subscribe(data=>{})
  }
}
