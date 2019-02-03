import { Injectable } from '@angular/core';
import { UserSettings } from '../models/UserSettings';
import { WeatherService } from '../userChooseInfo/WeatherService';
import { UnitSystem } from '../unit-system.enum';

@Injectable()
export class UserSettingsService {

    constructor(public weatherService: WeatherService) { }

    loadAll() {
        this.changeData(new UserSettings('warsaw', 'pl', UnitSystem.metric));
    }

    changeData(userSettings) {
        this.weatherService.requestData(userSettings);
    }
}
