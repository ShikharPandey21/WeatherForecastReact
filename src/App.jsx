import useWeather from "./hooks/useWeather";
import { useState } from "react";
import CityInput from "./components/CityInput";
import WeatherDisplay from "./components/weatherDisplay";
import './App.css';


function App() {
  const [city, setCity] = useState("");
  const data = useWeather(city);

  return (
    <div className="container">
      <CityInput onSearch={setCity} />
      <h1>Weather app</h1>
      <WeatherDisplay data={data} />
    </div>
  );
}

export default App;
