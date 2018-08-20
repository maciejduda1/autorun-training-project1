import { Location } from './get-weather.service';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Injectable } from '@angular/core';

export interface Location {
  latitude: number;
  longtitude: number;
}

@Injectable()
export class GetWeatherService {

  constructor (private http: Http) {}

  getWeather(location: Location) {
    const Url = 'https://www.metaweather.com//api/location/search/?lattlong=' + location.latitude + ',' + location.longtitude;
    console.log('jestem: ',  Url);
    this.http.get(Url)
      .subscribe(
        (response: Response) => {
          const data = response.json();
          console.log(data);
        }
      );
  }
}
