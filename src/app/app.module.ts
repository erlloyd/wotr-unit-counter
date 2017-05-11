import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ArmyBoxComponent } from './army-box/army-box.component';
import { UnitInfoComponent } from './unit-info/unit-info.component';

@NgModule({
  declarations: [
    AppComponent,
    ArmyBoxComponent,
    UnitInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
