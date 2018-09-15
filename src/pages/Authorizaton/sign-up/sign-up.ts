import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import * as firebase from 'firebase';


@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

  userRef = firebase.database().ref("User Data/Users");

  email : string;
  pass : string;
  pv : boolean  = false;
  tp : string= "password" ;
  mainBtn : string = "Register"
  loadBtn : boolean = false;
  name  : string;
  public phone : string;

  constructor(
  public navCtrl: NavController, 
  public toastCtrl : ToastController,
  public navParams: NavParams
  ) {
  }

  checkData(){
    if(this.name){
      if(this.email){
        if(this.phone){
          if(this.pass){
            this.register();
          }else{
            this.presentToast("Invalid password")
          }
        }else{
          this.presentToast("Password Empty")
        }
      }else{
        this.presentToast("Enter your Email")
      }
    }else{
      this.presentToast("Enter your name");
    }
  }

  register(){
    this.disMainBtn();
    firebase.auth().createUserWithEmailAndPassword(this.email,this.pass).catch((e)=>{
      var err = e.message;
      this.clear();
      this.enMainBtn();
      this.presentToast(err);
    }).then(()=>{
      this.userRef.child(firebase.auth().currentUser.uid).set({
        Name : this.name,
        Email : this.email,
        Password : this.pass,
        Phone : this.phone
      })
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
    this.mainBtn = "Registering"
    this.loadBtn = true;
  }

  enMainBtn(){
    this.mainBtn = "Register"
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
