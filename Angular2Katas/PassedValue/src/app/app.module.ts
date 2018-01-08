import { BrowserModule,  } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PassedValueComponent } from './components/passed-value.component';

@NgModule({
  declarations: [AppComponent, PassedValueComponent ],
  imports: [ BrowserModule, FormsModule  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
