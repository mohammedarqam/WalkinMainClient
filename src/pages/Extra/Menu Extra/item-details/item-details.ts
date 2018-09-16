import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';



@IonicPage()
@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html',
})
export class ItemDetailsPage {

  cid = firebase.auth().currentUser.uid;
  item = this.navParams.get("item");
  rKey = this.navParams.get("rKey");
  cartRef = firebase.database().ref("User Data/Carts/").child(this.cid);
  itemRef = this.cartRef.child("Items").child(this.item.key);

  cartVal : number = 0;
  itemQ : number = 0;

  constructor(
  public navCtrl: NavController, 
  public db : AngularFireDatabase,
  public navParams: NavParams
  ) {
    this.getItemCart();
  }



  getItemCart(){
    this.itemRef.once('value',snap=>{
      if(snap.exists()){
      this.itemQ = snap.val().Quantity;
        if(!this.itemQ){
          this.itemRef.remove();
        }
      }
    }).then(()=>{
      this.cartRef.once('value',snap=>{
        if(!snap.val().Items){
          this.cartRef.remove();
        }
        if(snap.val().CartValue){
          this.cartVal = snap.val().CartValue;
        } 
      })
    })
  }

  aTCart(){
    this.itemQ = this.itemQ +1;
    this.setCart();
  }

  setCart(){
    let itVal = this.itemQ * this.item.Price;
    this.cartVal = this.cartVal + itVal;
    this.itemRef.set({
      ItemName : this.item.ItemName,
      Price : this.item.Price,
      Quantity : this.itemQ,
      Value : itVal      
    }).then(()=>{
      console.log(this.cartVal);
      this.cartRef.child("CartValue").set(this.cartVal);
      this.cartRef.child("Restaurant").set(this.rKey);
      this.getItemCart();
    });
  
  }


  rFCart(){
    this.itemQ = this.itemQ -1;
    this.setCart();
  }



}
