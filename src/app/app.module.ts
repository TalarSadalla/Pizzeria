import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { PizzaListComponent } from './pizza-list/pizza-list.component';
import { PizzaListItemComponent } from './pizza-list-item/pizza-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaListComponent,
    PizzaListItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
