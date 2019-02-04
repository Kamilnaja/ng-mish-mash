import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ResultComponent } from './result/Result.component';
import { WeatherService } from './result/WeatherService';
import { WeatherFormComponent } from './weatherForm/weather-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserSettingsService } from './services/UserSettings.service';
import { UserSettings } from './models/UserSettings';
import { StoredUserSettings } from './models/StoredUserSettings';
import { SearchesComponent } from './searches/searches.component';
import { SearchesService } from './searches/searches.service';
import { LocalStorageService } from './services/LocalStorageService';
import { CityNotFoundComponent } from './result/partials/cityNotFound/CityNotFound.component';
import { ConnectionErrorComponent } from './result/partials/connectionError/ConnectionError.component';
import { ResultOkComponent } from './result/partials/resultok/ResultOk.component';
import { SingleSearchComponent } from './searches/single-search/single-search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { appRoutes } from './appRoutes';

@NgModule({
  declarations: [
    AppComponent,
    ResultComponent,
    WeatherFormComponent,
    SearchesComponent,
    SingleSearchComponent,
    CityNotFoundComponent,
    ConnectionErrorComponent,
    ResultOkComponent,
    NavbarComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [
    WeatherService,
    UserSettingsService,
    UserSettings,
    StoredUserSettings,
    SearchesService,
    LocalStorageService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
