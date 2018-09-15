import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from '@angular/fire/database';
import { ViewPackageDetailsPage } from '../view-package-details/view-package-details';


@IonicPage()

@Component({
  selector: 'page-view-number-packages',
  templateUrl: 'view-number-packages.html',
})
export class ViewNumberPackagesPage {

  numb = this.navParams.get("numb");

  numPackRef = this.db.list(`Number Of People Package/${this.numb}`);
  packs: Array<any>=[];

  constructor(
  public db : AngularFireDatabase,
  public navCtrl: NavController, 
  public navParams: NavParams
  ) {
    this.getPackages();
  }

  getPackages(){
    this.numPackRef.snapshotChanges().subscribe(snap=>{
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
