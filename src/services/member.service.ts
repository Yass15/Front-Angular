import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GLOBAL } from 'src/app/app-config';
import { Member } from 'src/modules/member';


@Injectable({
  providedIn: 'root'
})
export class MemberService {
  //Creation du tableau de service
  public tab:Member[]=GLOBAL._DB.members;
  membeEtd: any;
  membeEns: any;
  membersAll: any;

  //Creation du tableau de service
  public tabEtd: Member[] = [];
  public tabEns: Member[] = [];
  public tabMembers: Member[] = [];
  
  constructor(private http:HttpClient) { }
  
  saveMember(member:Member): Promise<void>//Envoie d'une req HTTP afin d'ajouter une ligne dans le tableau
  {
    const objectToInsert = {...member,
    id:member.id ?? Math.ceil(Math.random()*10000).toString(),
    createdDate: member.createdDate ?? new Date().toISOString(),
  };
  this.tab=[objectToInsert, ...this.tab.filter(item=> item.id!=objectToInsert.id)]
  //  this.httpClient.post<Member>('linktorestapi', member).toPromise()
  // Creation d'un tableau dans le service( copie de la BD ) et ajouter l'elt member dans le tableau du service
    return new Promise(resolve =>resolve())

  }
  getMemberById(currentID:string):Observable<any>{
    return this.http.get<any>(`http://localhost:9000/MEMBER-SERVICE/member/${currentID}`).pipe();
    //return new Promise(resolve=> resolve(this.tab.filter(item =>item.id ===currentID)[0]??null))
  }
  putMember(id:any,form:Member):void{
    //console.log(form);
    this.http.put<any>(`http://localhost:9000/MEMBER-SERVICE/memberupdate/${id}`,form).subscribe();
    console.log(form);

  }
  
  
  postMember(form:Member):void{
    console.log(form);
    
    this.http.post<any>('http://localhost:9000/MEMBER-SERVICE/membersave',form).subscribe();
    console.log(form);
    console.log(form.cin);
  }

  deleteMemberbyId(id:string):Promise<void>{
    //return this.httpClient.delete<void>('link').toPromise
    this.http.delete(`http://localhost:9000/MEMBER-SERVICE/members/${id}`).subscribe()
    return new Promise(resolve =>resolve())
  }

  getFullMember(id: string): Observable<Member> {
    return this.http.get<Member>(`http://localhost:9000/MEMBER-SERVICE/fullmember/${id}`)
  }

  getAllMembers(): Observable<any[]>{
    return this.http.get<any[]>('http://localhost:9000/MEMBER-SERVICE/members').pipe();
    //return new Promise(resolve =>resolve(this.tab));

  }

  putMemberEns(id:any,form:any):void{
    //console.log(form);
    this.http.put<any>(`http://localhost:9000/MEMBER-SERVICE/memberupdateencadrant/${id}`,form).subscribe();
    console.log(form);

  }

  AffectEtdToEns(idEns:string, idEtd:string):Promise<void>{
    const params = new HttpParams().set('param1',idEns).set('param2',idEtd);
    this.http.post<any>('http://localhost:9000/MEMBER-SERVICE/members/etdtoens',params).subscribe();
    return new Promise(resolve=> resolve());
  }

  
}
