import { Member } from './../../modules/member';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MemberService } from 'src/services/member.service';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.scss']
})
export class MemberFormComponent implements OnInit {
  currentID:any;
  MemberForm!: FormGroup ;
  Form!: FormGroup ;
  itemglobal: any;
  global!:any;
  member! : Member;

  constructor( private MemberService : MemberService, private router:Router, private fb: FormBuilder ,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void { // Create object with 4 attributs
     
    //this.initForm();
    //1. Récuperation de id a partir de l URL
    this.currentID=this.activatedRoute.snapshot.params.id;
    //2. Si id a une valeur => declancher la fonction du service getMemberById(id) => member
    if(!!this.currentID){
      this.MemberService.getMemberById(this.currentID).subscribe((item)=>{
        this.itemglobal=item; 
        this.initForm1(this.itemglobal)
      })////
      

    }
    else this.initForm();
    //3. sinon appeler initForm()
  }
  initForm():void{
    this.MemberForm=this.fb.group({
      cin: new FormControl(null , [Validators.required]),
      nom:new FormControl(null, [Validators.required]),
      prenom:new FormControl(null, [Validators.required]),
      cv:new FormControl(null, [Validators.required]),
      type_mbr:new FormControl(null, [Validators.required])
    },
    );
  }

  initForm1(item:any):void{

    this.MemberForm=this.fb.group({

      cin: [item.cin ],//, [Validators.required]),
      nom:[item.nom],//, [Validators.required]),
      prenom: [item.prenom ],
      cv:[item.cv], //[Validators.required]),
      type_mbr:[item.type_mbr]//[Validators.required])
    },
    );
  }

  ONSUB():void{
    if(!!this.currentID){
      console.log(this.currentID);
      this.MemberService.putMember(this.currentID,this.MemberForm.value);
      

    }
    else {
      console.log(this.MemberForm);
      this.member=this.MemberForm.value;
      const objectToInsert = {...this.member,
        date: this.member.createdDate ?? new Date().toISOString(),
      };
      this.MemberService.postMember(objectToInsert);

    }
    
    // Appel de la fonction de service (saveMember) pour ajouter la ligne dans le tableau
    const objectToSubmit = {...this.itemglobal, ...this.MemberForm.value};
    this.MemberService.saveMember(objectToSubmit).then(()=>{this.router.navigate(['./members'])})
  }

  

}
