import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { WeatherComponent } from './components/app.weather.component';
import { StoredUserSettings } from './models/StoredUserSettings';
import { UserSettings } from './models/UserSettings';
import { LocalStorageService } from './services/LocalStorageService';
import { ContactComponent } from './components/contact/contact.component';
import { NavbarModule } from './components/navbar/navbar.module';
import { ReportModule } from './components/report/report.module';
import { AboutComponent } from './components/about/about.component';
import { WeatherService } from './components/result/WeatherService';
import { SearchesModule } from './components/searches/searches.module';
import { WeatherFormModule } from './components/weatherForm/weather-form.module';

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
    WeatherFormModule,
    ReportModule
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
