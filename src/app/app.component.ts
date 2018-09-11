import { Component } from '@angular/core';
import { Platform, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';
import { MainAuthViewPage } from '../pages/Authorizaton/main-auth-view/main-auth-view';
import { LoginPage } from '../pages/Authorizaton/login/login';
import { HungryPage } from '../pages/hungry/hungry';
import { TabsPage } from '../pages/Utility/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = MainAuthViewPage ;

  constructor(
  platform: Platform, 
  statusBar: StatusBar, 
  public toastCtrl : ToastController,
  splashScreen: SplashScreen
  ) {
    platform.ready().then(() => {

      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
        firebase.database().ref("Users").child(user.uid).once('value',itemSnap=>{
            if(itemSnap.exists()){
              var welMsg = "Welcome"+" "+itemSnap.val().Name;
              this.rootPage = TabsPage;
              this.presentToast(welMsg);
              splashScreen.hide();
            }else{
              firebase.auth().signOut().then(()=>{
                this.rootPage = MainAuthViewPage;
                this.presentToast("You are not registered as our Partner")
                splashScreen.hide();
              })
            }
    });
      }
      else{
        this.rootPage = MainAuthViewPage;
        splashScreen.hide();
      }
    });  



      splashScreen.hide();
      statusBar.styleDefault();
    });
  }


  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'top',
      showCloseButton : true
    });
    toast.present();
  
  }
  
}
