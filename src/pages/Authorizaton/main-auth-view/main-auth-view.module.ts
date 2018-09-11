import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MainAuthViewPage } from './main-auth-view';

@NgModule({
  declarations: [
    MainAuthViewPage,
  ],
  imports: [
    IonicPageModule.forChild(MainAuthViewPage),
  ],
})
export class MainAuthViewPageModule {}
