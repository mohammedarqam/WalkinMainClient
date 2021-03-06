import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { ViewPackageDetailsPage } from '../view-package-details/view-package-details';


@IonicPage()
@Component({
  selector: 'page-view-type-packages',
  templateUrl: 'view-type-packages.html',
})
export class ViewTypePackagesPage {
  type = this.navParams.get("type");

  typeackRef = this.db.list(`TypeOfPackage/${this.type}`);
  packs: Array<any>=[];

  constructor(
  public db : AngularFireDatabase,
  public navCtrl: NavController, 
  public navParams: NavParams
  ) {
    this.getPackages();
  }

  getPackages(){
    this.typeackRef.snapshotChanges().subscribe(snap=>{
      this.packs = [];
      snap.forEach(snp=>{
        this.db.object(`Packages/${snp.key}`).snapshotChanges().subscribe(snappy=>{
          let temp : any = snappy.payload.val();
          temp.key = snappy.key;
          this.packs.push(temp);
        })

      })
    })

  }

  packDetails(pack){
    this.navCtrl.push(ViewPackageDetailsPage,{pack : pack,show : false});
  }

}
