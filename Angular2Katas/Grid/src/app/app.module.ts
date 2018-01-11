import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { PresidentListComponent } from './components/president.list.component';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { PresidentService } from './services/president.service';
import { OrderByPipe } from './components/orderby.pipe.component';
import { LastNamePipe } from './components/lastname.pipe.component';
import { FilterOrderByPipe } from './components/filter.orderby.pipe.component';

@NgModule({
  declarations: [ AppComponent, PresidentListComponent, OrderByPipe, LastNamePipe, FilterOrderByPipe ],
  imports: [ BrowserModule, FormsModule, HttpModule ],
  providers: [PresidentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
