import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckrequestComponent } from './checkrequest/checkrequest.component';
import { UserformComponent } from './userform/userform.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckrequestComponent,
    UserformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
