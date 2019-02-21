import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2WeatherIconsModule } from 'ng2-weather-icons';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './app.weather.component';
import { ContactComponent } from './contact/contact.component';
import { StoredUserSettings } from './models/StoredUserSettings';
import { UserSettings } from './models/UserSettings';
import { NavbarModule } from './navbar/navbar.module';
import { CityNotFoundComponent } from './result/partials/cityNotFound/CityNotFound.component';
import { ConnectionErrorComponent } from './result/partials/connectionError/ConnectionError.component';
import { WeatherIconComponent } from './result/partials/resultok/icon/WeatherIcon.component';
import { ResultOkComponent } from './result/partials/resultok/ResultOk.component';
import { ResultComponent } from './result/Result.component';
import { WeatherService } from './result/WeatherService';
import { SearchesModule } from './searches/searches.module';
import { LocalStorageService } from './services/LocalStorageService';
import { UserSettingsService } from './services/UserSettings.service';
import { WeatherFormComponent } from './weatherForm/weather-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultComponent,
    WeatherFormComponent,
    CityNotFoundComponent,
    ConnectionErrorComponent,
    ResultOkComponent,
    AboutComponent,
    ContactComponent,
    WeatherComponent,
    WeatherIconComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    Ng2WeatherIconsModule,
    AppRoutingModule,
    SearchesModule,
    NavbarModule
  ],
  providers: [
    WeatherService,
    UserSettingsService,
    UserSettings,
    StoredUserSettings,
    LocalStorageService,
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
