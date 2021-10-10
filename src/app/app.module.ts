import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { RowsComponent } from './rows/rows.component';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    RowsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
