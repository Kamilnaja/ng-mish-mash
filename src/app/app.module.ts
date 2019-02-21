import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './app.weather.component';
import { ContactComponent } from './contact/contact.component';
import { StoredUserSettings } from './models/StoredUserSettings';
import { UserSettings } from './models/UserSettings';
import { NavbarModule } from './navbar/navbar.module';
import { CityNotFoundComponent } from './result/partials/cityNotFound/CityNotFound.component';
import { WeatherIconComponent } from './result/partials/resultok/icon/WeatherIcon.component';
import { WeatherService } from './result/WeatherService';
import { SearchesModule } from './searches/searches.module';
import { LocalStorageService } from './services/LocalStorageService';
import { WeatherFormModule } from './weatherForm/weather-form.module';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    WeatherComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SearchesModule,
    NavbarModule,
    WeatherFormModule
  ],
  providers: [
    WeatherService,
    UserSettings,
    StoredUserSettings,
    LocalStorageService,
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
