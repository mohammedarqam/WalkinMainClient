import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email : string;
  pass : string;
  pv : boolean  = false;
  tp : string= "password" ;
  mainBtn : string = "Log In"
  loadBtn : boolean = false;


  constructor(
  public navCtrl: NavController, 
  public toastCtrl : ToastController,
  public navParams: NavParams
  ) {
  }

  checkData(){
    if(this.email){
      if(this.pass){
        this.signIn();
      }else{
        this.presentToast("Enter Password");
      }
    }else{
      this.presentToast("Enter Email");
    }
  }

  signIn(){
    this.disMainBtn();
    firebase.auth().signInWithEmailAndPassword(this.email,this.pass).catch((e)=>{
      var err = e.message;
      this.clear();
      this.enMainBtn();
      this.presentToast(err);
    })
  }

  fgPass(){

  }

  viewHidePass(){
    this.pv = !this.pv;
    if(this.pv){
      this.tp =  "text"
    }else{
      this.tp =  "password"
    }
  }

  disMainBtn(){
    this.mainBtn = "Signing In"
    this.loadBtn = true;
  }

  enMainBtn(){
    this.mainBtn = "Sign In"
    this.loadBtn = false;
  }

  clear(){
    this.email = null;
    this.pass = null;
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
