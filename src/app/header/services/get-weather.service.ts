import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Injectable } from '@angular/core';

export interface Location {
  latitude: number;
  longtitude: number;
}

@Injectable()
export class GetWeatherService {
  location: Location;
  constructor (private http: Http) {}

  getLocation() {
    navigator.geolocation.getCurrentPosition( position => {
      console.log(position);
      this.location = {
        latitude: position.coords.latitude,
        longtitude: position.coords.longitude };
      });
  }

  getWeather() {
    const Url = 'https://www.metaweather.com//api/location/search/?lattlong=' + this.location.latitude + '' + this.location.longtitude;

    this.http.get(Url)
      .map(
        (response: Response) => {
          console.log(response);
        }
      );
  }

//   showError(error) {
//     switch(error.code) {
//         case error.PERMISSION_DENIED:
//             console.log('User denied the request for Geolocation.');
//             break;
//         case error.POSITION_UNAVAILABLE:
//             console.log('Location information is unavailable.');
//             break;
//         case error.TIMEOUT:
//             console.log('The request to get user location timed out.');
//             break;
//         case error.UNKNOWN_ERROR:
//             console.log('An unknown error occurred.');
//             break;
//     }
// }

}
