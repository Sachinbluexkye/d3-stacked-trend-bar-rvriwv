import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StackedChartCompoent } from './bar-chart';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule 
  ],
  declarations: [ 
    AppComponent, 
    StackedChartCompoent
  ],
  bootstrap:    [ 
    AppComponent 
  ]
})
export class AppModule { }
