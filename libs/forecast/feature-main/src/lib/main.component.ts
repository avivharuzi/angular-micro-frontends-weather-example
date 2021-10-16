import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

import {
  Forecast,
  ForecastFacade,
} from '@angular-micro-frontends-weather-example/forecast/data-access';

@Component({
  selector: 'forecast-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent implements OnInit {
  error$: Observable<string | null> = this.forecastFacade.error$;
  forecast$: Observable<Forecast | null> = this.forecastFacade.forecast$;

  constructor(
    private activatedRoute: ActivatedRoute,
    private forecastFacade: ForecastFacade
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe((queryParams) => {
      const cityName = queryParams.get('cityName');
      if (cityName) {
        this.forecastFacade.searchForecast(cityName);
      }
    });
  }
}
