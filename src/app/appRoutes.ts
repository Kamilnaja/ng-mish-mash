import { Routes } from '@angular/router';
import { WeatherComponent } from './components/app.weather.component';
import { ContactComponent } from './components/contact/contact.component';
import { ReportComponent } from './components/report/report.component';
import { AboutComponent } from './components/about/about.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const appRoutes: Routes = [
    { path: 'about', component: AboutComponent },
    { path: 'report', component: ReportComponent },
    { path: 'contact', component: ContactComponent },
    { path: '', component: WeatherComponent },
    // { path: 'weather-app', redirectTo: '/' },
    // { path: '**', component: PageNotFoundComponent }
];
