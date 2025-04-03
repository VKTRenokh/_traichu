import type {WeatherResponse, Weather} from '@/types/weather';

export const getWeatherInfo = (weather: WeatherResponse): Weather => {
  return weather.weather[0];
};
