export interface Forecast {
  coord: ForecastCoord;
  weather: ForecastWeather[];
  base: string;
  main: ForecastMain;
  visibility: number;
  wind: ForecastWind;
  snow: ForecastSnow;
  clouds: ForecastClouds;
  dt: number;
  sys: ForecastSys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface ForecastCoord {
  lon: number;
  lat: number;
}

export interface ForecastWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface ForecastMain {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
}

export interface ForecastWind {
  speed: number;
  deg: number;
  gust: number;
}

export interface ForecastSnow {
  '1h': number;
}

export interface ForecastClouds {
  all: number;
}

export interface ForecastSys {
  country: string;
  sunrise: number;
  sunset: number;
}
