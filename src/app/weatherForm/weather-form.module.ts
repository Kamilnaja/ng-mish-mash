import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherFormComponent } from './weather-form.component';
import { UserSettingsService } from '../services/UserSettings.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResultComponent } from '../result/Result.component';
import { ResultOkComponent } from '../result/partials/resultok/ResultOk.component';
import { ConnectionErrorComponent } from '../result/partials/connectionError/ConnectionError.component';
import { CityNotFoundComponent } from '../result/partials/cityNotFound/CityNotFound.component';
import { WeatherIconComponent } from '../result/partials/resultok/icon/WeatherIcon.component';

@NgModule({
  declarations: [
    WeatherFormComponent,
    ResultComponent,
    ResultOkComponent,
    ConnectionErrorComponent,
    CityNotFoundComponent,
    WeatherIconComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserSettingsService],
  exports: [WeatherFormComponent]
})
export class WeatherFormModule { }
