import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Forecast } from './../entities';
import { ForecastQuery } from '../+state/forecast.query';
import { ForecastService } from '../infrastructure/forecast.service';
import { ForecastStore } from '../+state/forecast.store';

@Injectable({
  providedIn: 'root',
})
export class ForecastFacade {
  forecast$: Observable<Forecast | null> = this.forecastQuery.select(
    (state) => state.forecast
  );
  error$: Observable<string | null> = this.forecastQuery.selectError();

  constructor(
    private forecastQuery: ForecastQuery,
    private forecastService: ForecastService,
    private forecastStore: ForecastStore
  ) {}

  searchForecast(cityName: string) {
    this.forecastService.getForecast(cityName).subscribe(
      (forecast) => {
        this.forecastStore.setError(null);
        this.forecastStore.update({ forecast });
      },
      () => {
        this.forecastStore.setError('Not found city.');
      }
    );
  }
}
