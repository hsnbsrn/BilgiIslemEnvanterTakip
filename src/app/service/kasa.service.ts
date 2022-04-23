import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Kasa } from '../models/kasa';

@Injectable({
  providedIn: 'root'
})
export class KasaService {

constructor(private httpClient:HttpClient) { }

path="http://localhost:40281/api/Kasa/"

getKasa():Observable<Kasa[]>{
  return this.httpClient.get<Kasa[]>(this.path);
}
addKasa(dep:Kasa):Observable<Kasa>{
  const httpOptions={
    headers:new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization':'Token'
    })
  }
  return this.httpClient.post<Kasa>(this.path,dep,httpOptions).pipe(
    tap(data=> console.log(JSON.stringify(data))),
    catchError(this.handleError)
  );
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
getKasaById(id:any):Observable<Kasa[]>{
  return this.httpClient.get<Kasa[]>(this.path+"detail/?id="+id)
}

updateKasa(data:Kasa):Observable<Kasa>{
  const httpOptions={
    headers:new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization':'Token'
    })
  }
  return this.httpClient.put<Kasa>(this.path,data,httpOptions).pipe(
    tap(data=> console.log(JSON.stringify(data))),
    catchError(this.handleError))
}

deleteKasa(id:any): Observable<any>{
  return this.httpClient.delete(this.path+id)
}


}
