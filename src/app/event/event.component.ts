import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EventService } from 'src/services/event.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  
  EventForm!: FormGroup ;
  event! : Event;

  constructor(private fb: FormBuilder, private EventService : EventService, private router:Router) { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm():void{
    this.EventForm=this.fb.group({
      titre: new FormControl(null , [Validators.required]),
      lieu:new FormControl(null, [Validators.required]),
      dateStart:new FormControl(null, [Validators.required]),
      dateEnd:new FormControl(null, [Validators.required])
    },
    );
  }

  ONSUB():void{
    this.event=this.EventForm.value
    this.EventService.postEvent(this.EventForm.value);
    console.log(this.event)
    this.router.navigate(['/dashboard']);
  }


}
