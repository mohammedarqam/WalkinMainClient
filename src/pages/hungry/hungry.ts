import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ViewMenuPage } from '../view-menu/view-menu';


@IonicPage()
@Component({
  selector: 'page-hungry',
  templateUrl: 'hungry.html',
})
export class HungryPage {

  restaurantRef: AngularFireList<any>;
  restaurants: Observable<any[]>;

  constructor(
  public db : AngularFireDatabase,
  public navCtrl: NavController, 
  public navParams: NavParams
  ) {
    this.restaurantRef =db.list(`Restaurants`, ref=>ref.orderByChild("Ordered"));

    this.restaurants = this.restaurantRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
  }

  vMenu(rKey,rName){
    this.navCtrl.push(ViewMenuPage,{rKey : rKey, rName : rName});
  }
}
