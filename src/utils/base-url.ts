import {apiUrl} from '@/constants/api-url';

export const baseUrl = (path: `/${string}`): string => {
  return apiUrl + path;
};
