import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Tur } from '../models/tur';

@Injectable({
  providedIn: 'root'
})
export class TurService {

constructor(private httpClient:HttpClient) { }

path="http://localhost:40281/api/Tur"

getTur():Observable<Tur[]>{
  return this.httpClient.get<Tur[]>(this.path);
}
handleError(err: HttpErrorResponse){
  let errorMesage="";
  
  if(err.error instanceof ErrorEvent){

    errorMesage='Bir hata oluştu '+err.error.message

  }else{
    errorMesage= 'Sistemsel bir hata'
  }
  return throwError(()=>errorMesage);
}

}
