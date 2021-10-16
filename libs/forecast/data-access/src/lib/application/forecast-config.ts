import { InjectionToken } from '@angular/core';

export interface ForecastConfig {
  baseApiUrl: string;
}

export const FORECAST_CONFIG = new InjectionToken<ForecastConfig>(
  'forecast.config'
);
