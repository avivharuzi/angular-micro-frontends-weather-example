import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

import { Forecast } from './../entities';

export interface ForecastState {
  forecast: Forecast | null;
}

@Injectable({
  providedIn: 'root',
})
@StoreConfig({
  name: 'forecast',
})
export class ForecastStore extends Store<ForecastState> {
  constructor() {
    super({
      forecast: null,
    });
  }
}
