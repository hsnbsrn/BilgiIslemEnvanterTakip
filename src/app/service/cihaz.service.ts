import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Cihaz } from '../models/cihaz';

@Injectable({
  providedIn: 'root'
})
export class CihazService {

constructor(private httpClient:HttpClient) { }

path="http://localhost:40281/api/Cihaz/"

getCihaz():Observable<Cihaz[]>{
  return this.httpClient.get<Cihaz[]>(this.path);
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
addCihaz(dep:Cihaz):Observable<Cihaz>{
  const httpOptions={
    headers:new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization':'Token'
    })
  }
  return this.httpClient.post<Cihaz>(this.path,dep,httpOptions).pipe(
    tap(data=> console.log(JSON.stringify(data))),
    catchError(this.handleError)
  );
  }
  getSonCihaz(id:any):Observable<Cihaz[]>{
    return this.httpClient.get<Cihaz[]>(this.path+"son")
  }

}
