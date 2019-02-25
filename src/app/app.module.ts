import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './components/about/about.component';
import { WeatherModule } from './components/app-weather/weather.module';
import { AppComponent } from './components/app.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavbarModule } from './components/navbar/navbar.module';
import { ReportModule } from './components/report/report.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NavbarModule,
    ReportModule,
    WeatherModule
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
