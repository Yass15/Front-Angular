import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MemberService } from 'src/services/member.service';
import { ArticleService } from 'src/services/article.service';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-affect-component',
  templateUrl: './affect-component.component.html',
  styleUrls: ['./affect-component.component.scss']
})
export class AffectComponentComponent implements OnInit {
  tab:any[]=[];
  selected!:string;
  idArticle: any;
  selectedElement: any
  selectedId: any
  public dataSource:MatTableDataSource<any>;

  constructor(private MemberService:MemberService,private activatedroute:ActivatedRoute,private ArticleService:ArticleService,private router:Router) {
    //console.log(this.MembersComponent.dataSource.filteredData)
    this.dataSource = new MatTableDataSource()
    this.MemberService.getAllMembers().subscribe(tableau => {this.dataSource.filteredData=tableau;
      console.log(this.dataSource.filteredData);
      this.tab = tableau;
      console.log(this.tab)
    })
    console.log(this.tab)
    console.log(this.dataSource.filteredData)
   }



   add(name:string):void{
     this.selectedElement = this.tab.find(el =>el.nom===this.selected)
     this.selectedId = this.selectedElement.id;
     console.log('sel',this.selected )
     console.log('id', this.selectedId)
    this.idArticle = this.activatedroute.snapshot.params.IDArticle;
    console.log(this.activatedroute.snapshot.params)
    if(this.idArticle){
      console.log(this.idArticle)
      this.ArticleService.Affect(this.selectedId, this.idArticle).then(()=>{
        this.ArticleService.getArticleById(this.idArticle).subscribe(tableau => {
        console.log(typeof tableau)
        //console.log(this.art.filteredData);
        const objectToInsert = {...tableau,
          auteur: this.selected ,
        };
        console.log(objectToInsert)
        this.ArticleService.putArticleAut(this.idArticle,objectToInsert);

        this.router.navigate(['/articles'])});});


    }
   }

  ngOnInit(): void { 
  }

}
