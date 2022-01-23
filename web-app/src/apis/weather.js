import services from '../commons/Services';
import { API_ENDPOINT } from '../constants/endpoint';


export const getNow = () => {
  return services.get(`${API_ENDPOINT}`);
};