import { Injectable } from '@angular/core';
import { UserSettings } from '../models/UserSettings';
import { WeatherService } from '../userChooseInfo/UserChoseInfo.service';

@Injectable()
export class UserSettingsService {

    constructor(public weatherService: WeatherService) { }

    loadAll() {
        this.changeData(new UserSettings('warsaw', 'pl', 'metric'));
    }

    changeData(userSettings) {
        this.weatherService.requestData(userSettings);
    }
}
