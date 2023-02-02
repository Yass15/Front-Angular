import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FirstApp';
  name = 'Yessine';
  Agenda = [
    {Date: '17/12', Message:'BlocA'},
   {Date:'18/12', Message:'BlocB'}
  ];
}
