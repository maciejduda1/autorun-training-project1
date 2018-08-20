import { Component, OnInit } from '@angular/core';
import { GetWeatherService, Location } from '../services/get-weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  position: Location = {latitude: 0, longtitude: 0};

  constructor(private getWeatherService: GetWeatherService) { }

  ngOnInit() {
    this.getLocation();
  }

  getLocation() {
    navigator.geolocation.getCurrentPosition (
      location => {
        console.log(location.coords.latitude, location.coords.longitude);
        this.position.latitude = location.coords.latitude;
        this.position.longtitude = location.coords.longitude;
        this.getWeatherService.getWeather(this.position);
      },
      error => this.showError(error)
    );
  }

  showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            console.log('User denied the request for Geolocation.');
            break;
        case error.POSITION_UNAVAILABLE:
            console.log('Location information is unavailable.');
            break;
        case error.TIMEOUT:
            console.log('The request to get user location timed out.');
            break;
        case error.UNKNOWN_ERROR:
            console.log('An unknown error occurred.');
            break;
    }
}


}
