import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AgmCoreModule } from '@agm/core';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyANz1hf2rRtU8et_m0h-YCKU5S5MHa6ce0'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
