import type {WeatherResponse} from '@/types/weather';

export const parseTemperature = (weather: WeatherResponse): string => {
  return Math.round(weather.main.temp - 273.15).toString();
};
