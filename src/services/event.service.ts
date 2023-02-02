import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http:HttpClient) { }

  postEvent(form:Event):void{
    console.log(form);
    
    this.http.post<any>('http://localhost:9000/EVENEMENT-SERVICE/evenements',form).subscribe();
    console.log(form);
  }
  getAllEvents():Observable<any[]>{
    //return this.httpClient.get<Member[]>('link').toPromise
    return this.http.get<any[]>('http://localhost:9000/EVENEMENT-SERVICE/evenements').pipe();

  }
}
