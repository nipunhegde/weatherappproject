import { Component } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherData } from './models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  hot:string ="assests/hot.jpg";
  cold:string ="assests/cold.jpg";
  humidity:string ="assests/humidity.png";
  wind:string ="assests/wind.png";
  sunrise:string ="assests/sunrise.png";
  sunset:string ="assests/sunset.png";


  constructor(private weatherService: WeatherService) {

  }
  cityName:string='Wellington';
  weatherData?:WeatherData;

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }
  onSubmit(){
    this.getWeatherData(this.cityName);
    this.cityName = '';

  }
  private getWeatherData(cityName:string){
  this.weatherService.getWeatherData(cityName)
     .subscribe({
      next:(response)=>{
        this.weatherData=response;
        console.log(response);
      }
     });
    }
}

