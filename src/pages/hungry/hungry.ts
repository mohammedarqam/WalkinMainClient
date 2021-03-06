import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ViewMenuPage } from '../Extra/Menu Extra/view-menu/view-menu';
import firebase from 'firebase';
import { CartPage } from '../cart/cart';
import { ViewNumberPackagesPage } from '../Extra/Package Extra/view-number-packages/view-number-packages';
import { ViewTypePackagesPage } from '../Extra/Package Extra/view-type-packages/view-type-packages';

@IonicPage()
@Component({
  selector: 'page-hungry',
  templateUrl: 'hungry.html',
})
export class HungryPage {

  restaurantRef = this.db.list(`Restaurant Data/Restaurants`);
  restaurants: Observable<any[]>;

  bannersRef = firebase.database().ref("Extra Data/Banners");
  banners: Array<any>=[];

  constructor(
  public db : AngularFireDatabase,
  public navCtrl: NavController, 
  public navParams: NavParams
  ) {
    this.getBanners();
    this.getRestaurants();
  }

  getBanners(){
    this.bannersRef.once('value', itemSnapshot => {
      this.banners = [];
      itemSnapshot.forEach(itemSnap => {
        this.banners.push(itemSnap.val());
        return false;
      });
    });
  }

  getRestaurants(){
    this.restaurants = this.restaurantRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );

  }

  vMenu(rKey,rName){
    this.navCtrl.push(ViewMenuPage,{rKey : rKey, rName : rName});
  }

  viewNumberPacks(numb){
    this.navCtrl.push(ViewNumberPackagesPage,{numb : numb})
  }

  viewTypePacks(type){
    this.navCtrl.push(ViewTypePackagesPage,{type : type})
  }


  viewCart(){
    this.navCtrl.push(CartPage);
  }
}
