import { Controller, Get, Query } from '@nestjs/common';

import { Forecast } from '@angular-micro-frontends-weather-example/forecast/data-access';

import { WeatherService } from './weather.service';

@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get('forecast')
  forecast(@Query('cityName') cityName: string): Promise<Forecast> {
    return this.weatherService.getForecast(cityName);
  }
}
