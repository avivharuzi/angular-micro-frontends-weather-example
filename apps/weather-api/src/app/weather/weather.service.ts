import got, { Response } from 'got';
import { Injectable, NotFoundException } from '@nestjs/common';

import { Forecast } from '@angular-micro-frontends-weather-example/forecast/data-access';

import { environment } from '../../environments/environment';

@Injectable()
export class WeatherService {
  async getForecast(cityName: string): Promise<Forecast> {
    let response: Response<Forecast>;
    try {
      response = await got<Forecast>(
        `${WeatherService.getOpenWeatherMapBaseApiUrl()}&q=${cityName}&units=metric`
      );
    } catch (error) {
      throw new NotFoundException();
    }
    return response.body;
  }

  private static getOpenWeatherMapBaseApiUrl(): string {
    const accessToken =
      process.env.WEATHER_API_OPEN_WEATHER_MAP_ACCESS_TOKEN ?? '';
    return `${environment.openWeatherMapBaseApiUrl}?appid=${accessToken}`;
  }
}
