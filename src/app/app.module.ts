// import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
// import { StoreModule } from '@ngrx/store';

// import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';

// import { HttpClientModule } from '@angular/common/http';
import { GetWeatherService } from './header/services/get-weather.service';
import { HttpModule } from '@angular/http';
// import { headerReducer } from './header/store/header.reducers';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    // HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    HeaderModule,
    // StoreModule.forRoot({ header: headerReducer }),
    // StoreDevtoolsModule,
  ],
  providers: [GetWeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
