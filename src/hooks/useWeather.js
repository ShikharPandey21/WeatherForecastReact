import { useState, useEffect } from "react";



function useWeather(city) {
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
    const [data, setData] = useState({});

  useEffect(() => {
    if (!city) return;

     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    fetch(url)
    .then((res) => res.json())
    .then((res) => setData(res));
    
    },[city]
  );
  return data;
}

export default useWeather;
