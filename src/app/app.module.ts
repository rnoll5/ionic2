import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { LandingPage } from '../pages/landing/landing';
import { LoginPage } from '../pages/login/login';


@NgModule({
  declarations: [
    MyApp,
    LandingPage,
    LoginPage

  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LandingPage,
    LoginPage

  ],
  providers: []
})
export class AppModule {}
