import { Injectable } from '@angular/core';
import { WeatherService } from './Weather.service';

@Injectable()
export class UserSettingsService {
    private _city: string;
    private _country: string;
    private _unitSystem: string;

    constructor(public weatherService: WeatherService) { }

    changeData(city, country, unitSystem) {
        this.weatherService.requestData('city', 'country', 'unitSystem');
    }
}
