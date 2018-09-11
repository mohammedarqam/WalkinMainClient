import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { SignUpPage } from '../sign-up/sign-up';
import * as firebase from 'firebase';
import { TabsPage } from '../../Utility/tabs/tabs';


@IonicPage()
@Component({
  selector: 'page-main-auth-view',
  templateUrl: 'main-auth-view.html',
})
export class MainAuthViewPage {

  constructor(
  public navCtrl: NavController, 
  public navParams: NavParams
  ) {

  }


  gtlogin(){
    this.navCtrl.push(LoginPage);
  }
  gtsignUp(){
    this.navCtrl.push(SignUpPage);
  }
}
