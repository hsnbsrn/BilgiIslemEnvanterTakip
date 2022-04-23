import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Pers } from '../models/pers';
import { Pers1 } from '../models/pers1';

@Injectable({
  providedIn: 'root'
})
export class PersService {


constructor(private httpClient:HttpClient) { }

path="http://localhost:40281/api/Personel/"

getPers():Observable<Pers[]>{
  return this.httpClient.get<Pers[]>(this.path);
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

addPers(dep:Pers):Observable<Pers>{
  const httpOptions={
    headers:new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization':'Token'
    })
  }
  return this.httpClient.post<Pers>(this.path,dep,httpOptions).pipe(
    tap(data=> console.log(JSON.stringify(data))),
    catchError(this.handleError)
  );
  }

  updatePers(data:Pers):Observable<Pers>{
    const httpOptions={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Token'
      })
    }
    return this.httpClient.put<Pers>(this.path,data,httpOptions).pipe(
      tap(data=> console.log(JSON.stringify(data))),
      catchError(this.handleError))
  }

deletePers(id:any): Observable<any>{
  return this.httpClient.delete(this.path+id)
}  

getPersById(id:any):Observable<Pers1[]>{
  return this.httpClient.get<Pers1[]>(this.path+"detail/?id="+id)
}

}
