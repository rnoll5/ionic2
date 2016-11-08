import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { NavController } from 'ionic-angular';
import { LandingPage } from '../pages/landing/landing';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';


// const injections = [
//   LandingPage,
//   LoginPage,
//   RegisterPage
//   ]

@NgModule({
  declarations: [
    MyApp,
    LandingPage,
    LoginPage,
    RegisterPage

  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LandingPage,
    LoginPage,
    RegisterPage

  ],
  providers: []
})
export class AppModule {}
