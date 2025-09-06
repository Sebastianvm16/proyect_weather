import { useState, useEffect } from "react"
import { getWeather } from "../Helpers/getWeather";

export const Weather = () => {

  const [lang, setLang] = useState<number>();

  const [long, setLong] = useState<number>();
  const [temp, setTemp] = useState<number>();
  const [humidity, setHumidity] = useState<number>();
  const [timezone, setTimezone] = useState<number>();

  useEffect(() =>{
    getWeather()
    .then((weather)=>{
      setLang(weather.latitude);
      setLong(weather.longitude);
      setTemp(weather.temperature);
      setHumidity(weather.relative_humidity_2m);
      setTimezone(weather.timezone);
    });
  },[]);

  const onInputChange = (e:any) =>{
      const value =e.target.value;
      setTimezone(value);

  }

  const onButtonClick = () => {
    getWeather(timezone).then((weather) => {
      setLang(weather.latitude);
      setLong(weather.longitude);
      setTemp(weather.temperature);
      setTimezone(weather.timezone);
    });
  };

  return (
    <>
        <input type="text" value={timezone} onChange={onInputChange}/>
        <button className="button" onClick={onButtonClick}>Search</button><br/>
        <label htmlFor="">Longitud = {long}</label><br/>
        <label htmlFor="">Latitud = {lang}</label><br/>
        <label htmlFor="">Temperature = {temp}</label><br/>
        <label htmlFor="">Humidity = {humidity}</label><br/>
        <label htmlFor="">Zone = {timezone}</label>
    </>
  )
}

