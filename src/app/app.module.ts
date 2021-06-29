import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {MultByPipe} from "./pipe/mult-by.pipe";
import {ExMarksPipe} from './pipe/ex-marks.pipe';
import {FilterPipe} from './pipe/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MultByPipe,
    ExMarksPipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
