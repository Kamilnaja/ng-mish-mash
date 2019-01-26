import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserInfoService } from './services/userInfo.service';

@Component({
  selector: 'app-weather-form',
  templateUrl: './weather-form.component.html'
})

export class WeatherFormComponent implements OnInit {

  city = new FormControl('');

  constructor(private service: UserInfoService) { }

  ngOnInit(): void {

  }

  handleSubmit() {
    this.service.changeData(this.city.value);
  }
}
