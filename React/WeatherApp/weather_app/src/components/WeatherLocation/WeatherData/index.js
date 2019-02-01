import React from "react";
import WeatherExtraInfo from "./WeatherExtraInfo";
import WeatherTemperature from "./WeatherTemperature";
import {
  CLOUD,
  CLOUDY,
  SUN,
  RAIN,
  SNOW,
  WINDY
} from '../../../constants/Weathers'
import './styles.css'

const WeatherData = () => (
  <div className='weatherDataCont'>
    <WeatherTemperature temperature={20} weatherState={RAIN} />
    <WeatherExtraInfo humidity={80} wind={10} />
  </div>
);

export default WeatherData;
