import { Component } from '@angular/core';
import { HungryPage } from '../../hungry/hungry';
import { ExplorePage } from '../../explore/explore';
import { MePage } from '../../me/me';
import { OffersPage } from '../../offers/offers';
import { OrdersPage } from '../../orders/orders';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HungryPage;
  tab2Root = ExplorePage;
  tab3Root = OffersPage;
  tab4Root = OrdersPage;
  tab5Root = MePage;

  constructor() {

  }
}
