import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';

import { ForecastState } from './forecast.store';

@Injectable({
  providedIn: 'root',
})
export class ForecastQuery extends Query<ForecastState> {}
