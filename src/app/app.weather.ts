import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from './services/Weather.service';
import { UserSettings } from './models/UserSettings';
import { SearchesService } from './searches/searches.service';

@Component({
    selector: 'app-weather',
    templateUrl: './app.weather.html'
})

export class AppWeatherComponent implements OnInit {
    @Input() city: string;
    @Input() country: string;

    private _weatherApiResponse: any;
    private _listItems = [];

    constructor(private _weatherService: WeatherService) { }

    ngOnInit(): void {
        this._weatherService.listItems$.subscribe(t => {
            this._listItems = t;
        });
        this._weatherService.requestData(new UserSettings(this.city, 'polska', 'metric'));
    }

    get weatherResponse() {
        return this._weatherApiResponse;
    }
}
