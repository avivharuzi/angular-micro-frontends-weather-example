import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Forecast } from './../entities';

@Injectable({
  providedIn: 'root',
})
export class ForecastService {
  private readonly BASE_API_URL: string = '/api/weather/forecast';

  constructor(private httpClient: HttpClient) {}

  getForecast(cityName: string): Observable<Forecast> {
    return this.httpClient.get<Forecast>(
      `${this.BASE_API_URL}?cityName=${cityName}`
    );
  }
}
