import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { LandingPage } from '../landing/landing';
import { LobbyPage } from '../lobby/lobby';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {

  constructor(public navCtrl: NavController) {
    this.navCtrl = navCtrl;
  }
  
  user={};
  
  ionViewDidLoad() {
    console.log('Hello LoginPage Page');
  }
  
    login() {
    this.navCtrl.push(LobbyPage);
  }
  
   
  
  signinForm(form) { 
    if(form.invalid) return alert("Please complete the form before proceeding.");
  }
  
}
