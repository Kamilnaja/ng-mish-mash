import { IEnvironment } from '../interfaces/IEnvironment';

export const environmentProd: IEnvironment = {
    production: false,
    baseUrl: 'http://api.openweathermap.org/data/2.5/weather',
    apiKey: '19bdc82416a280ee0d7025c4ae606556',
    localStorageKey: 'weather'
};
