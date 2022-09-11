import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { RadComponent } from '../rad/rad.component';

import { raz } from '../rat/rat.component';
@NgModule({
  declarations: [AppComponent, RadComponent, raz],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
