import { Component } from '@angular/core';

// wrapper for main application part

@Component({
    selector: 'app-weather',
    template: `
    <div class="columns">
        <app-weather-form class="is-8 column"></app-weather-form>
        <app-searches class="is-4 column"></app-searches>
    </div>`
})

export class WeatherComponent { }
