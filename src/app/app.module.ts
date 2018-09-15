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
import { ViewMenuPage } from '../pages/Extra/Menu Extra/view-menu/view-menu';
import { ItemDetailsPage } from '../pages/Extra/Menu Extra/item-details/item-details';
import { ViewNumberPackagesPage } from '../pages/Extra/Package Extra/view-number-packages/view-number-packages';
import { ViewTypePackagesPage } from '../pages/Extra/Package Extra/view-type-packages/view-type-packages';
import { ViewPackageDetailsPage } from '../pages/Extra/Package Extra/view-package-details/view-package-details';
import { OrdersPage } from '../pages/orders/orders';



export const firebaseCred = {
  apiKey: "AIzaSyBrOwk3PvUtFXM_wxAW-OQ7leXTlDeLSkk",
  authDomain: "walkin-2215d.firebaseapp.com",
  databaseURL: "https://walkin-2215d.firebaseio.com",
  projectId: "walkin-2215d",
  storageBucket: "walkin-2215d.appspot.com",
  messagingSenderId: "946109608266"
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
    ItemDetailsPage,
    ViewNumberPackagesPage,
    ViewTypePackagesPage,
    ViewPackageDetailsPage,
    OrdersPage,
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
    ItemDetailsPage,
    ViewNumberPackagesPage,
    ViewTypePackagesPage,
    ViewPackageDetailsPage,
    OrdersPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
