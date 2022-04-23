import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Dep } from '../models/dep';

@Injectable({
  providedIn: 'root'
})
export class DepService {

constructor(private httpClient:HttpClient) { }

path="http://localhost:40281/api/Departman/"

getDep():Observable<Dep[]>{
  return this.httpClient.get<Dep[]>(this.path);
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

addDep(dep:Dep):Observable<Dep>{
  const httpOptions={
    headers:new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization':'Token'
    })
  }
  return this.httpClient.post<Dep>(this.path,dep,httpOptions).pipe(
    tap(data=> console.log(JSON.stringify(data))),
    catchError(this.handleError)
  );
  }

}
