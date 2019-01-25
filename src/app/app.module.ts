import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppWeatherComponent } from './app.weather';
import { WeatherService } from './app.weather.service';
import { CtoF } from './Utils/CtoF.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AppWeatherComponent,
    CtoF
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})

export class AppModule { }
