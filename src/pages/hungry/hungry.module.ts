import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HungryPage } from './hungry';

@NgModule({
  declarations: [
    HungryPage,
  ],
  imports: [
    IonicPageModule.forChild(HungryPage),
  ],
})
export class HungryPageModule {}
