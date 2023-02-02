import { Router } from '@angular/router';
import { Article } from 'src/modules/articles';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ArticleService } from 'src/services/article.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  displayedColumns2: string[] = ['IDArticle', 'Titre', 'Annee', 'Auteur','Lien','SourcePdf','icon'];

  ngOnInit(): void { //meth qui se lance auto lors du charge du composant.
  }

  dataSource:MatTableDataSource<Article>;

  constructor(private ArticleService:ArticleService, private dialog: MatDialog, private router: Router) {
    //this.dataSource=this.MemberService.tab;
    this.dataSource = new MatTableDataSource()
    this.ArticleService.getAllArticles().subscribe(tableau => {this.dataSource.filteredData=tableau;
    console.log(tableau); 
    console.log(this.dataSource)
   });
  }
  reloadComponent() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['./articles']);
}
  ONDELETE(id:string):void{
    //1. ouvrir la boite de dialogue
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {height: '200px', width: '400px',});


    //2. Attendre le resulat
    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this.ArticleService.deleteMemberbyId(id).then(()=>{this.reloadComponent()})
        //this.MemberService.deleteMember().then(()=>{this.router.navigate(['./members'])})
      }
    });
    //3. Tester sur le bouton
    //4. if(click sur confirm):
    //this.MemberService.deleteMemberbyId(id).then(()=>{this.fetchDataSource()})
  }

   /*ONDELETE(IDArticle:string):void{
    //1. ouvrir la boite de dialogue
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {height: '200px', width: '400px',});

    //2. Attendre le resulat
    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this.ArticleService.deleteArticlebyId(IDArticle).then(()=>{this.fetchDataSource()})
      }
    });
    //3. Tester sur le bouton
    //4. if(click sur confirm):
    //this.MemberService.deleteMemberbyId(id).then(()=>{this.fetchDataSource()})
  }*/
  

  fetchDataSource():void{
    this.ArticleService.getAllArticles().subscribe(tableau => {this.dataSource.data=tableau;});
  }
/*
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }*/

}
