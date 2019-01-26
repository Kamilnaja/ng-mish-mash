import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppWeatherComponent } from './app.weather';
import { WeatherService } from './app.weather.service';
import { WeatherFormComponent } from './weather-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserInfoService } from './services/userInfo.service';

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
  providers: [WeatherService, UserInfoService],
  bootstrap: [AppComponent]
})

export class AppModule { }
