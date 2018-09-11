import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {PizzaListComponent} from './pizza-list/pizza-list.component';
import {PizzaListItemComponent} from './pizza-list-item/pizza-list-item.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {PastaListComponent} from './pasta-list/pasta-list.component';
import {PastaListItemComponent} from './pasta-list-item/pasta-list-item.component';
import {DrinkListComponent} from './drink-list/drink-list.component';
import {DrinkListItemComponent} from './drink-list-item/drink-list-item.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {OrderComponent} from './order/order.component';
import {ShoppingBasketDetailComponent} from './shopping-basket-detail/shopping-basket-detail.component';
import {OrderFormComponent} from './order-form/order-form.component';
import {OrderFormConfirmationComponent} from './order-form-confirmation/order-form-confirmation.component';
import {OrderListComponent} from './order-list/order-list.component';
import { OrderListItemComponent } from './order-list-item/order-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaListComponent,
    PizzaListItemComponent,
    PastaListComponent,
    PastaListItemComponent,
    DrinkListComponent,
    DrinkListItemComponent,
    DashboardComponent,
    OrderComponent,
    ShoppingBasketDetailComponent,
    OrderFormComponent,
    OrderFormConfirmationComponent,
    OrderListComponent,
    OrderListItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
