import { Component, Input, OnInit } from '@angular/core';
import { WeatherService } from './UserChoseInfo.service';

@Component({
    selector: 'app-user-choose-info',
    templateUrl: './UserChooseInfo.html',
    styles: [`.message {
        margin-top: 15px;
    }`]
})

export class UserChooseInfoComponent implements OnInit {

    @Input() showResults: boolean;

    private _weatherApiResponse: any;
    private result = [];

    constructor(private _weatherService: WeatherService) { }

    ngOnInit(): void {
        this._weatherService.listItems$.subscribe(t => {
            this.result = t;
        });
    }

    get weatherResponse() {
        return this._weatherApiResponse;
    }
}
