import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { WeatherComponent } from './app.weather.component';

export const appRoutes: Routes = [
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: '', component: WeatherComponent }
];
