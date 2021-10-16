import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FORECAST_CONFIG } from '@angular-micro-frontends-weather-example/forecast/data-access';
import { WeatherUiSearchModule } from '@angular-micro-frontends-weather-example/weather/ui-search';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    WeatherUiSearchModule,
  ],
  providers: [
    {
      provide: FORECAST_CONFIG,
      useValue: {
        baseApiUrl: environment.baseApiUrl,
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
