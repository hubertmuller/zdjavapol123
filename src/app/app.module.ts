import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StopkaComponent } from './stopka/stopka.component';
import { NaglowekComponent } from './naglowek/naglowek.component';
import { WiadomosciComponent } from './wiadomosci/wiadomosci.component';
import { WiadomoscComponent } from './wiadomosc/wiadomosc.component';
import { HttpClientModule } from '@angular/common/http';
import { FormularzComponent } from './formularz/formularz.component';
import { NawigacjaComponent } from './nawigacja/nawigacja.component';

@NgModule({
  declarations: [
    AppComponent,
    StopkaComponent,
    NaglowekComponent,
    WiadomosciComponent,
    WiadomoscComponent,
    FormularzComponent,
    NawigacjaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
