import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PizzaListComponent} from './pizza-list/pizza-list.component';
import {PizzaListItemComponent} from './pizza-list-item/pizza-list-item.component';
import {PastaListComponent} from './pasta-list/pasta-list.component';
import {PastaListItemComponent} from './pasta-list-item/pasta-list-item.component';
import {DrinkListComponent} from './drink-list/drink-list.component';
import {DrinkListItemComponent} from './drink-list-item/drink-list-item.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {OrderDetailComponent} from './order-detail/order-detail.component';
import {OrderFormComponent} from './order-form/order-form.component';
import {OrderFormConfirmationComponent} from './order-form-confirmation/order-form-confirmation.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'pizza-list', component: PizzaListComponent},
  {path: 'pasta-list', component: PastaListComponent},
  {path: 'drink-list', component: DrinkListComponent},
  {path: 'pizza-detail/:id', component: PizzaListItemComponent},
  {path: 'pasta-detail/:id', component: PastaListItemComponent},
  {path: 'drink-detail/:id', component: DrinkListItemComponent},
  {path: 'order-detail', component: OrderDetailComponent},
  {path: 'orderForm', component: OrderFormComponent},
  {path: 'order-confirmation', component: OrderFormConfirmationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
