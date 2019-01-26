import { Component, OnInit } from '@angular/core';
import { WeatherService } from './app.weather.service';
import { UserInfoService } from './services/userInfo.service';

@Component({
    selector: 'app-weather',
    templateUrl: './app.weather.html'
})

export class AppWeatherComponent implements OnInit {
    _data: any;
    _userData: string;

    constructor(private weatherService: WeatherService, private userInfoService: UserInfoService) {
        this._data = this.weatherService.data
            .subscribe(
                resp => {
                    this._data = { ...resp.body };
                }
            );
    }

    get userData() {
        return this._userData;
    }

    ngOnInit(): void {
        this.userInfoService.currentData.subscribe(data => this._userData = data);
    }

    get data() {
        return this._data;
    }
}
