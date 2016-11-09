import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { NavController } from 'ionic-angular';

import { MyApp } from './app.component';
import { LandingPage } from '../pages/landing/landing';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { LobbyPage } from '../pages/lobby/lobby';
import { QuestionsPage } from '../pages/questions/questions';
import { ResultsPage } from '../pages/results/results';


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
    RegisterPage,
    LobbyPage,
    QuestionsPage,
    ResultsPage

  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LandingPage,
    LoginPage,
    RegisterPage,
    LobbyPage,
    QuestionsPage,
    ResultsPage
  ],
  providers: []
})
export class AppModule {}
