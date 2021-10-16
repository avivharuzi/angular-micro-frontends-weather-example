import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { WeatherUiSearchModule } from '@angular-micro-frontends-weather-example/weather/ui-search';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    WeatherUiSearchModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
