import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/modules/articles';
import { ArticleService } from 'src/services/article.service';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss']
})
export class ArticleFormComponent implements OnInit {

  currentID:any;
  ArticleForm!: FormGroup ;
  Form!: FormGroup ;
  itemglobal: any;
  global!:any;
  article! : Article;

  constructor(private ArticleService : ArticleService, private router:Router, private fb: FormBuilder ,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.currentID=this.activatedRoute.snapshot.params.IDArticle;
    //2. Si id a une valeur => declancher la fonction du service getMemberById(id) => member
    if(!!this.currentID){
      this.ArticleService.getArticleById(this.currentID).subscribe((item)=>{
        this.itemglobal=item; 
        this.initForm1(this.itemglobal)
      })////
      

    }
    else this.initForm();
  }

  initForm():void{
    this.ArticleForm=this.fb.group({
      titre: new FormControl(null , [Validators.required]),
      lien:new FormControl(null, [Validators.required]),
      sourcePdf:new FormControl(null, [Validators.required])
    },
    );
  }

  initForm1(item:any):void{

    this.ArticleForm=this.fb.group({

      titre: [item.titre],//, [Validators.required]),
      lien:[item.lien],
      sourcePdf:[item.sourcePdf]
    },
    );
  }

  ONSUB():void{
    if(!!this.currentID){
      console.log(this.currentID);
      console.log(this.ArticleForm.value)
      this.ArticleService.putArticle(this.currentID,this.ArticleForm.value);
      console.log(this.ArticleForm.value)
      

    }
    else {
      console.log(this.ArticleForm);
      this.article=this.ArticleForm.value;
      const objectToInsert = {...this.article,
        date: this.article.date ?? new Date().toISOString(),
      };
      this.ArticleService.postArticle(objectToInsert);

    }
    
    // Appel de la fonction de service (saveMember) pour ajouter la ligne dans le tableau
    const objectToSubmit = {...this.itemglobal, ...this.ArticleForm.value};
    this.ArticleService.saveArticle(objectToSubmit).then(()=>{this.router.navigate(['./articles'])})
  }

}
