import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Forecast } from './../entities';
import {
  FORECAST_CONFIG,
  ForecastConfig,
} from '../application/forecast-config';

@Injectable({
  providedIn: 'root',
})
export class ForecastService {
  private readonly BASE_API_URL: string = `${this.config.baseApiUrl}/weather/forecast`;

  constructor(
    @Inject(FORECAST_CONFIG) private readonly config: ForecastConfig,
    private httpClient: HttpClient
  ) {}

  getForecast(cityName: string): Observable<Forecast> {
    return this.httpClient.get<Forecast>(
      `${this.BASE_API_URL}?cityName=${cityName}`
    );
  }
}
