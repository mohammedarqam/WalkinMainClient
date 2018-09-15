import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import { ViewPackageDetailsPage } from '../Extra/Package Extra/view-package-details/view-package-details';


@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {

  userid= firebase.auth().currentUser.uid;
  cartPackRef = this.db.list(`UserData/Cart/${this.userid}/Packages`);
  packs: Array<any>=[];
  packValue : number = 0;



  constructor(
  public navCtrl: NavController, 
  public db : AngularFireDatabase,
  public alertCtrl : AlertController,
  public toastCtrl : ToastController,
  public navParams: NavParams
  ) {
    this.getPackages();
  }

  getPackages(){
    this.cartPackRef.snapshotChanges().subscribe(snap=>{
      this.packs = [];
      snap.forEach(snp=>{
        this.db.object(`Packages/${snp.key}`).snapshotChanges().subscribe(snappy=>{
          let temp : any = snappy.payload.val();
          temp.key = snappy.key;
          this.packValue = +this.packValue+parseInt(temp.Price);
          this.packs.push(temp);
        })

      })
    })

  }

  packDetails(pack){
    this.navCtrl.push(ViewPackageDetailsPage,{pack : pack,show : true});
  }

  rmPack(p){
  this.db.list(`UserData/Cart/${this.userid}/Packages/${p.key}`).remove().then(()=>{
    this.presentToast("Package Removed")
  }) ;
  }


  delConfirm(pp) {
    let alert = this.alertCtrl.create({
      title: 'Do you want to remove this Package ?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Remove',
          handler: () => {
            this.rmPack(pp)
          }
        }
      ]
    });
    alert.present();
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'top'
    });  
    toast.present();
  }

}
