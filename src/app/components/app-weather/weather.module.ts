import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { WeatherComponent } from '../app.weather.component';
import { SearchesModule } from '../searches/searches.module';
import { WeatherFormModule } from '../weatherForm/weather-form.module';

@NgModule({
    declarations: [
        WeatherComponent,
    ],
    imports: [
        CommonModule,
        WeatherFormModule,
        SearchesModule
    ],
    exports: [WeatherComponent]
})
export class WeatherModule { }
