import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';


import { MyApp } from './app.component';


// Angular Fire Module
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
// AngularFire Settings

export const firebaseConfig = {
    apiKey: "AIzaSyATKLkSKq4mIXO6gkKFFRdr3VHmk5m-lhQ",
    authDomain: "fir-auth-9ccbf.firebaseapp.com",
    databaseURL: "https://fir-auth-9ccbf.firebaseio.com",
    projectId: "fir-auth-9ccbf",
    storageBucket: "fir-auth-9ccbf.appspot.com",
    messagingSenderId: "831916164750"
  };
 

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    AngularFireAuth,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
