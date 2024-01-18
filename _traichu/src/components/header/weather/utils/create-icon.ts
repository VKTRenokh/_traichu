const url = 'https://openweathermap.org/img/wn/';
const extension = '.png';

export const createIcon = (name: string): string => {
  return `${url}${name}${extension}`;
};
