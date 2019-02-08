import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { IconService } from 'src/app/services/Icons.service';
import { owaMappings } from 'src/app/models/OwaMapping';

@Component({
    selector: 'app-weather-icon',
    templateUrl: './icon.html',
    providers: [IconService]
})

export class WeatherIconComponent implements OnChanges {
    @Input() weatherId: number;
    weatherIconId: string;

    constructor(private iconsService: IconService) {
    }

    ngOnChanges() {
        this.weatherIconId = owaMappings[`wi-owm-${this.weatherId}`];
    }

}
