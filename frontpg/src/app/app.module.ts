import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { TableComponent } from './table/table.component';
import { BottomComponent } from './bottom/bottom.component';
import { BottomlayerComponent } from './bottomlayer/bottomlayer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    TableComponent,
    BottomComponent,
    BottomlayerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
