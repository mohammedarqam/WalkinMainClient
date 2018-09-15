import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-view-package-details',
  templateUrl: 'view-package-details.html',
})
export class ViewPackageDetailsPage {

  show = this.navParams.get("show");
  pack = this.navParams.get("pack");
  userid= firebase.auth().currentUser.uid;

  restRef = firebase.database().ref("Restaurants").child(this.pack.Restaurant);
  restaurant: Array<any>=[];

  cartPackRef = firebase.database().ref("UserData").child("Cart").child(this.userid).child("Packages");

  constructor(
  public db : AngularFireDatabase,
  public navCtrl: NavController, 
  public navParams: NavParams
  ) {
    this.getRestaurant();
  }

  getRestaurant(){
    this.restRef.once("value",snap=>{
      this.restaurant = snap.val();
    })
  }
  // this.cartPackRef.child(this.pack.key).set({
  //   Quantity : 
  // });

  atCart(){
    this.cartPackRef.transaction(function(cData){

      if(cData==null){
        return true
      }else{
        console.log(cData);
      }




    })
  }


}
