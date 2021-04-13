import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InputPreventDirective } from './@core/directives/input-prevent.directive';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    InputPreventDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
