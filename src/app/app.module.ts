import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppWeatherComponent } from './app.weather';
import { WeatherService } from './services/Weather.service';
import { WeatherFormComponent } from './weather-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserSettingsService } from './services/UserSettings.service';
import { UserSettings } from './models/UserSettings';

@NgModule({
  declarations: [
    AppComponent,
    AppWeatherComponent,
    WeatherFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [WeatherService, UserSettingsService, UserSettings],
  bootstrap: [AppComponent]
})

export class AppModule { }
