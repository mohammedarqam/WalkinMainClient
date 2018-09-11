import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import * as firebase from 'firebase';
import { MainAuthViewPage } from '../pages/Authorizaton/main-auth-view/main-auth-view';
import { SignUpPage } from '../pages/Authorizaton/sign-up/sign-up';
import { ForgotPassPage } from '../pages/Authorizaton/forgot-pass/forgot-pass';
import { LoginPage } from '../pages/Authorizaton/login/login';
import { TabsPage } from '../pages/Utility/tabs/tabs';
import { HungryPage } from '../pages/hungry/hungry';
import { ExplorePage } from '../pages/explore/explore';
import { OffersPage } from '../pages/offers/offers';
import { CartPage } from '../pages/cart/cart';
import { MePage } from '../pages/me/me';
import { ViewMenuPage } from '../pages/view-menu/view-menu';



export const firebaseCred = {
  apiKey: "AIzaSyAE8aWWXXnIemdrHUPA7e93GqA5hNEK1SU",
  authDomain: "walkin-app-codebro.firebaseapp.com",
  databaseURL: "https://walkin-app-codebro.firebaseio.com",
  projectId: "walkin-app-codebro",
  storageBucket: "walkin-app-codebro.appspot.com",
  messagingSenderId: "1066189513591"
  };
  
  firebase.initializeApp(firebaseCred);


@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    MainAuthViewPage,
    SignUpPage,
    ForgotPassPage,
    LoginPage,
    HungryPage,
    ExplorePage,
    OffersPage,
    CartPage,
    MePage,
    ViewMenuPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseCred),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    MainAuthViewPage,
    SignUpPage,
    ForgotPassPage,
    LoginPage,
    HungryPage,
    ExplorePage,
    OffersPage,
    CartPage,
    MePage,
    ViewMenuPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
