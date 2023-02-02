import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { GLOBAL } from 'src/app/app-config';
import { Article } from 'src/modules/articles';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  public tab2:any[]=GLOBAL._DB.articles;

  constructor(private http:HttpClient) { }

  saveArticle(articles:Article): Promise<void>//Envoie d'une req HTTP afin d'ajouter une ligne dans le tableau
  {
    const objectToInsert = {...articles,
    idArticle:articles.idArticle ?? Math.ceil(Math.random()*10000).toString(),
    //createdDate: article.createdDate ?? new Date().toISOString(),
  };
  this.tab2=[objectToInsert, ...this.tab2.filter(item=> item.id!=objectToInsert.idArticle)]
  //  this.httpClient.post<Member>('linktorestapi', member).toPromise()
  // Creation d'un tableau dans le service( copie de la BD ) et ajouter l'elt member dans le tableau du service
    return new Promise(resolve =>resolve())

  }
  getArticleById(currentID:string):Observable<any>{
    return this.http.get<any>(`http://localhost:9000/PUBLICATION-SERVICE/publication/${currentID}`).pipe();
    //return new Promise(resolve=> resolve(this.tab.filter(item =>item.id ===currentID)[0]??null))
  }

  deleteArticlebyId(id:string):Promise<void>{
    //return this.httpClient.delete<void>('link').toPromise
    this.tab2 = this.tab2.filter(item=> item.idArticle != id );
    return new Promise(resolve=> resolve());
  }

  getAllArticles():Observable<any[]>{
    //return this.httpClient.get<Member[]>('link').toPromise
    return this.http.get<any[]>('http://localhost:9000/PUBLICATION-SERVICE/publications').pipe();

  }

  putArticle(id:any,form:any):void{
    //console.log(form);
    this.http.put<any>(`http://localhost:9000/PUBLICATION-SERVICE/publications/${id}`,form).subscribe();
    console.log(form);

  }
  putArticleAut(id:any,form:any):void{
    //console.log(form);
    this.http.put<any>(`http://localhost:9000/PUBLICATION-SERVICE/publicationsaut/${id}`,form).subscribe();
    console.log(form);

  }
  deleteMemberbyId(id:string):Promise<void>{
    //return this.httpClient.delete<void>('link').toPromise
    this.http.delete(`http://localhost:9000/PUBLICATION-SERVICE/publications/${id}`).subscribe()
    return new Promise(resolve =>resolve())
  }

  postArticle(form:Article):void{
    console.log(form);
    
    this.http.post<any>('http://localhost:9000/PUBLICATION-SERVICE/publications',form).subscribe();
    console.log(form);
  }
  Affect(idMember:string,idArticle:string):Promise<void>{
    const params = new HttpParams().set('param1',idArticle).set('param2',idMember);
    this.http.post<any>('http://localhost:9000/MEMBER-SERVICE/members/pubtomem',params).subscribe();
    return new Promise(resolve=> resolve());
  }
}

