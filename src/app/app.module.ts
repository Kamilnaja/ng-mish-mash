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
import { SearchesComponent } from './searches/searches.component';
import { SearchesService } from './searches/searches.service';
import { LocalStorageService } from './services/LocalStorageService';
import { SingleSearchComponent } from './single-search/single-search.component';

@NgModule({
  declarations: [
    AppComponent,
    AppWeatherComponent,
    WeatherFormComponent,
    SearchesComponent,
    SingleSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    WeatherService,
    UserSettingsService,
    UserSettings,
    SearchesService,
    LocalStorageService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
