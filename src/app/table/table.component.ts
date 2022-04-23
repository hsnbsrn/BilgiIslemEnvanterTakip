import { Component, OnInit, ViewChild } from '@angular/core';
import { Pers1 } from '../models/pers1';
import { PersService } from '../service/pers.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers:[PersService]
})


export class TableComponent implements OnInit {



  constructor(private persService:PersService) { }
  per1!:Pers1;
  idn:number=1002

  ngOnInit() {
    // this.getById(this.idn)
    console.log(this.per1)
    }

    // getById(id:any){
    //   this.persService.getPersById(id).subscribe(data=>{
    //     this.per1=data
    //   });
    // }
  }


