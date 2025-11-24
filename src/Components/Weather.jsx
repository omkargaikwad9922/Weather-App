import React, { useEffect, useRef, useState } from "react";
import "./Weather.css";

const Weather = () => {
  const inputRef = useRef();
  const [weatherData, setweatherData] = useState();

  const allIcons = {
    "01d": `/clear.png`,
    "01n": "/clear.png",
    "02d": "/cloud.png",
    "02n": "/cloud.png",
    "03d": "/cloud.png",
    "03n": "/cloud.png",
    "04d": "/drizzle.png",
    "04n": "/drizzle.png",
    "09d": "/rain.png",
    "09n": "/rain.png",
    "010d": "/rain.png",
    "010n": "/rain.png",
    "013d": "/snow.png",
    "013n": "/snow.png",
  };

  const search = async (city) => {
    if (city === "") {
      alert("Enter City Name");
      return;
    }
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric
&appid=${import.meta.env.VITE_APP_ID}`;

      const response = await fetch(url);
      const data = await response.json();

      if (!response.ok) {
        alert(data.message);
        return;
      }

      console.log(data);
      const icon = allIcons[data.weather[0].icon] || `/clear.png`;
      setweatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: icon,
        main: data.weather[0].main,
        // icon: data.weather[0].icon,
      });
    } catch (error) {
      setweatherData(false);
      alert("There Is Some Issue In API");
    }
  };

  useEffect(() => {
    search("pune");
  }, []);

  return (
    <>
      <div className="weather">
        <div className="search-bar">
          <input type="text" placeholder="Search" ref={inputRef} />
          <img
            src="/search.png"
            alt="Search-bar"
            onClick={() => search(inputRef.current.value)}
          />
        </div>

        {weatherData ? (
          <>
            <img
              src={weatherData.icon}
              alt="sun-img"
              className="weather-icon"
            />
            <h2 className="main">{weatherData.main}</h2>
            {/* <img
          src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
          alt="sun-img"
          className="weather-icon"
        /> */}
            <p className="temperature">{weatherData.temperature}°c</p>
            <p className="location">{weatherData.location}</p>
            <div className="weather-data">
              <div className="col">
                <img src="/humidity.png" alt="humidity-png" />
                <div>
                  <p>{weatherData.humidity} %</p>
                  <span>Humidity</span>
                </div>
              </div>
              <div className="col">
                <img src="/wind.png" alt="wind-png" />
                <div>
                  <p>{weatherData.windSpeed} Km/h</p>
                  <span>Wind Speed</span>
                </div>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Weather;
