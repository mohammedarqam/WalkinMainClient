import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';


@IonicPage()
@Component({
  selector: 'page-me',
  templateUrl: 'me.html',
})
export class MePage {

  constructor(
  public navCtrl: NavController, 
  public navParams: NavParams
  ) {
  }


  signOut(){
    firebase.auth().signOut();
  }
}
