import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/AuthService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService,private router:Router, private ngZone:NgZone) { }
  GOOGLE():void{
    this.authService.doGoogleLogin().then(()=>{this.successRedirect()})
    .catch(error=> console.log("erreur"));
    
  }
  ngOnInit(): void {
  }

  successRedirect():void{
    this.ngZone.run(()=>
    this.router.navigate(['./members']));
  }

}
