import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LocationComponent } from '../location/location.component';
import { ThingsComponent } from '../things/things.component';
import { DeviceComponent } from '../device/device.component';
import { SensorComponent } from '../things/sensor/sensor.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, LocationComponent, ThingsComponent, DeviceComponent, SensorComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
