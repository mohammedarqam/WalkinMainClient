import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';
import { ItemDetailsPage } from '../item-details/item-details';

@IonicPage()
@Component({
  selector: 'page-view-menu',
  templateUrl: 'view-menu.html',
})
export class ViewMenuPage {
  rKey  = this.navParams.get("rKey");
  rName  = this.navParams.get("rName");

  menuRef: AngularFireList<any>;
  items: Observable<any[]>;

  constructor(
  public navCtrl: NavController, 
  public db : AngularFireDatabase,
  public navParams: NavParams
  ) {
    this.menuRef =db.list(`Restaurant Data/Menus/${this.rKey}`, ref=>ref.orderByChild("Ordered"));

    this.items = this.menuRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
  }

  viewItem(item){
    this.navCtrl.push(ItemDetailsPage,{item : item})
  }
}
