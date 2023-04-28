import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BasicsPageComponent } from './products/pages/basics-page/basics-page.component';
import { NumbersPageComponent } from './products/pages/numbers-page/numbers-page.component';
import { UncommonPageComponent } from './products/pages/uncommon-page/uncommon-page.component';


//Configuración del locale de la app
import localeEsHN from "@angular/common/locales/es-VE";
import localeFRCA from '@angular/common/locales/fr-CA';
import { registerLocaleData } from "@angular/common";

registerLocaleData(localeEsHN);
registerLocaleData(localeFRCA);


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    SharedModule,
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'es-VE'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
