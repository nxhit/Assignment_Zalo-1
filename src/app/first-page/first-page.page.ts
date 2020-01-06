import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.page.html',
  styleUrls: ['./first-page.page.scss'],
})
export class FirstPagePage implements OnInit {

  constructor(private router:Router) { }
  slideOpts = {
    initialSlide: 1,
    speed: 400,
    loop:true
  };
  ngOnInit() {
  }

  goToLogin(){
    this.router.navigate(['/login'])
  }
  goToSignUp(){
    this.router.navigate(['/signup'])
  }

}
