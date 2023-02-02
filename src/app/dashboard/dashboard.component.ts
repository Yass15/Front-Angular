import { EventService } from './../../services/event.service';
import { Component, OnInit } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { MemberService } from 'src/services/member.service';
import { Member } from 'src/modules/member';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  dataSource: MatTableDataSource<Member>;
  fullmember: any;
  form: any;
  tabEns:any
  events:any
  tabEtd:any

  stdNb: number = 0;
  ensNb: number = 0;
  memNb: number = 0;

  constructor(private memberService: MemberService, private eventService: EventService) {
    this.dataSource = new MatTableDataSource(this.memberService.membersAll);
  }

  ngOnInit(): void {
    this.initForm();

    this.memberService.getAllMembers().subscribe((c) => {
      this.memNb = c.length;
      console.log(c.length);
      console.log(this.memNb);
      this.tabEns = c.filter(obj=>obj.type_mbr=='ens');
      this.tabEtd = c.filter(obj=>obj.type_mbr=='etd');
      console.log(this.tabEns)
      console.log(this.tabEtd)
      this.stdNb=(this.tabEtd).length
      this.ensNb=(this.tabEns).length
    });
    console.log(this.memNb);

    //this.getFullmember('1');

    this.eventService.getAllEvents().subscribe((c) => {
      this.events = c;

      console.log(c)
      
    });

  }
  /*
  getFullmember(ide: string) {
    this.memberService.getFullMember(ide).then((tableau) => {
      this.dataSource.filteredData = tableau;
      this.fullmember = this.dataSource.filteredData;

      console.log(this.fullmember);
    });
  }
  */
 getFullMember(){
  this.memberService.getFullMember(this.form.value.id).subscribe((c) => {
    this.fullmember = c;
    console.log(c)
    
  });
 }
  initForm(): void {
    this.form = new FormGroup({
      id: new FormControl(null, [Validators.required]),
    });
  }
 
  ONSUBMIT(): void {}
   /*
    console.log(typeof this.form.value.id);
    this.memberService.getFullMember(this.form.value.id).then((a) => {
      this.fullmember = a;
      console.log(this.fullmember.pubs);
      console.log(this.fullmember.nom);

      console.log(this.dataSource.filteredData);
    });
  }
  */
}
