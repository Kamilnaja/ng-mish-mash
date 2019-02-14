import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Ng2WeatherIconsModule } from 'ng2-weather-icons';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { WeatherComponent } from './app.weather.component';
import { appRoutes } from './appRoutes';
import { ContactComponent } from './contact/contact.component';
import { StoredUserSettings } from './models/StoredUserSettings';
import { UserSettings } from './models/UserSettings';
import { NavbarComponent } from './navbar/navbar.component';
import { CityNotFoundComponent } from './result/partials/cityNotFound/CityNotFound.component';
import { ConnectionErrorComponent } from './result/partials/connectionError/ConnectionError.component';
import { WeatherIconComponent } from './result/partials/resultok/icon/WeatherIcon.component';
import { ResultOkComponent } from './result/partials/resultok/ResultOk.component';
import { ResultComponent } from './result/Result.component';
import { WeatherService } from './result/WeatherService';
import { SearchesComponent } from './searches/searches.component';
import { SearchesService } from './searches/searches.service';
import { SingleSearchComponent } from './searches/single-search/single-search.component';
import { LocalStorageService } from './services/LocalStorageService';
import { UserSettingsService } from './services/UserSettings.service';
import { WeatherFormComponent } from './weatherForm/weather-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ResultComponent,
    WeatherFormComponent,
    SearchesComponent,
    SingleSearchComponent,
    CityNotFoundComponent,
    ConnectionErrorComponent,
    ResultOkComponent,
    NavbarComponent,
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
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    )
  ],
  providers: [
    WeatherService,
    UserSettingsService,
    UserSettings,
    StoredUserSettings,
    SearchesService,
    LocalStorageService,
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
