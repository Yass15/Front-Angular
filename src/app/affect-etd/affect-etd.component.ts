import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MemberService } from 'src/services/member.service';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-affect-etd',
  templateUrl: './affect-etd.component.html',
  styleUrls: ['./affect-etd.component.scss']
})
export class AffectEtdComponent implements OnInit {

  tab!:any[];
  selected!:string;
  idEtd: any;
  selectedElement: any
  selectedId: any
  tabEns!:any[]
  encadrant:any


  constructor(private MemberService:MemberService,private activatedroute:ActivatedRoute,private router:Router) {
    //console.log(this.MembersComponent.dataSource.filteredData)
   
    
   }
   ngOnInit():void{ this.MemberService.getAllMembers().subscribe((tableau) => { this.tabEns = tableau.filter(obj=>obj.type_mbre=="ens");
   console.log(this.tabEns)
 })}



   add(name:string):void{
     this.selectedElement = this.tabEns.find(el =>el.nom===this.selected)
     this.selectedId = this.selectedElement.id;
     console.log('sel',this.selected )
     console.log('id', this.selectedId)
    this.idEtd = this.activatedroute.snapshot.params.id;
    console.log(this.activatedroute.snapshot.params)
    if(this.idEtd){
      console.log(this.idEtd)
      this.MemberService.AffectEtdToEns(this.selectedId, this.idEtd).then(()=>{
        this.MemberService.getMemberById(this.idEtd).subscribe(tableau => {
        console.log(typeof tableau)
        //console.log(this.art.filteredData);
        const objectToInsert = {...tableau,
          encadrant: this.selected ,
        };
        console.log(objectToInsert)
        this.MemberService.putMemberEns(this.idEtd,objectToInsert);

        this.router.navigate(['/members'])});});


    }
   }

  

}
