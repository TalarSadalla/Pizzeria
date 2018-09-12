import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PizzaListComponent} from './pizza-list/pizza-list.component';
import {PizzaListItemComponent} from './pizza-list-item/pizza-list-item.component';
import {PastaListComponent} from './pasta-list/pasta-list.component';
import {PastaListItemComponent} from './pasta-list-item/pasta-list-item.component';
import {DrinkListComponent} from './drink-list/drink-list.component';
import {DrinkListItemComponent} from './drink-list-item/drink-list-item.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ShoppingBasketDetailComponent} from './shopping-basket-detail/shopping-basket-detail.component';
import {OrderFormComponent} from './order-form/order-form.component';
import {OrderFormConfirmationComponent} from './order-form-confirmation/order-form-confirmation.component';
import {OrderListComponent} from './order-list/order-list.component';
import {OrderListItemComponent} from './order-list-item/order-list-item.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'pizza-list', component: PizzaListComponent},
  {path: 'pasta-list', component: PastaListComponent},
  {path: 'drink-list', component: DrinkListComponent},
  {path: 'pizza-detail/:id', component: PizzaListItemComponent},
  {path: 'pasta-detail/:id', component: PastaListItemComponent},
  {path: 'drink-detail/:id', component: DrinkListItemComponent},
  {path: 'shopping-basket-detail', component: ShoppingBasketDetailComponent},
  {path: 'orderForm', component: OrderFormComponent},
  {path: 'order-confirmation', component: OrderFormConfirmationComponent},
  {path: 'order-list', component: OrderListComponent},
  {path: 'order-detail/:id', component: OrderListItemComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
