import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Konum } from '../models/konum';

@Injectable({
  providedIn: 'root'
})
export class KonumService {


constructor(private httpClient:HttpClient) { }

path="http://localhost:40281/api/Konum/"

getPers():Observable<Konum[]>{
  return this.httpClient.get<Konum[]>(this.path);
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

addPers(dep:Konum):Observable<Konum>{
  const httpOptions={
    headers:new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization':'Token'
    })
  }
  return this.httpClient.post<Konum>(this.path,dep,httpOptions).pipe(
    tap(data=> console.log(JSON.stringify(data))),
    catchError(this.handleError)
  );
  }

  updatePers(data:Konum):Observable<Konum>{
    const httpOptions={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Token'
      })
    }
    return this.httpClient.put<Konum>(this.path,data,httpOptions).pipe(
      tap(data=> console.log(JSON.stringify(data))),
      catchError(this.handleError))
  }

deletePers(id:any): Observable<any>{
  return this.httpClient.delete(this.path+id)
}  

getPersById(id:any):Observable<Konum[]>{
  return this.httpClient.get<Konum[]>(this.path+"detail/?id="+id)
}

}


