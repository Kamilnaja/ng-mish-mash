import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-weather-form',
  templateUrl: './weather-form.component.html'
})

export class WeatherFormComponent {
  city = new FormControl('');
}
