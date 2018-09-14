import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewPackageDetailsPage } from './view-package-details';

@NgModule({
  declarations: [
    ViewPackageDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewPackageDetailsPage),
  ],
})
export class ViewPackageDetailsPageModule {}
