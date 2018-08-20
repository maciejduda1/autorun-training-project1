import { MenuComponent } from './menu/menu.component';
import { NgModule } from '@angular/core';
import { WeatherComponent } from './weather/weather.component';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [
    MenuComponent,
    WeatherComponent,
  ],
  imports: [
    MatToolbarModule,
  ],
  exports: [
    MenuComponent,
    WeatherComponent,
  ],
})

export class HeaderModule {}
