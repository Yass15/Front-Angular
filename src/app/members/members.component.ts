import { Component, OnInit } from '@angular/core';
import { Member } from 'src/modules/member';
import { GLOBAL } from '../app-config';
import { MemberService } from 'src/services/member.service';
import { MatTableDataSource } from '@angular/material/table';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {
  membeEtd: any;
  membeEns: any;
  displayedColumns: string[] = ['ID', 'CIN', 'NAME', 'CREATED DATE', 'CV', 'TYPE', 'icon'];

  ngOnInit(): void {
  }

  public dataSource:MatTableDataSource<any>;


  constructor(private MemberService:MemberService, private dialog: MatDialog,private router:Router) {
 
    //this.dataSource=this.MemberService.tab;
    this.dataSource = new MatTableDataSource()
    this.MemberService.getAllMembers().subscribe(tableau => {this.dataSource.filteredData=tableau;
    console.log(tableau); 
    console.log(this.dataSource) 
  });
   }

   reloadComponent() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['./members']);
}

   ONDELETE(id:string):void{
    //1. ouvrir la boite de dialogue
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {height: '200px', width: '400px',});


    //2. Attendre le resulat
    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this.MemberService.deleteMemberbyId(id).then(()=>{this.reloadComponent()})
        //this.MemberService.deleteMember().then(()=>{this.router.navigate(['./members'])})
      }
    });
    //3. Tester sur le bouton
    //4. if(click sur confirm):
    //this.MemberService.deleteMemberbyId(id).then(()=>{this.fetchDataSource()})
  }
  

  /*fetchDataSource():void{
    console.log('ahmed');
    this.MemberService.getAllMembers().subscribe(tableau => {this.dataSource.data=tableau;});
    
  }*/

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
 
}
