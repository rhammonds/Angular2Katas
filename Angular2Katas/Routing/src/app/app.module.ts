import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { CustomerComponent } from './components/customer.component';
import { CustomerDetailsComponent } from './components/customer.details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomerComponent,
    CustomerDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'customer', component: CustomerComponent },
      { path: 'customerdetails', component: CustomerDetailsComponent },
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
