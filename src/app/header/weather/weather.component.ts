import { Component, OnInit } from '@angular/core';
import { GetWeatherService, Location } from '../services/get-weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  position: Location;

  constructor(private getWeatherService: GetWeatherService) { }

  ngOnInit() {
   this.getWeatherService.getWeather();
  }




}
