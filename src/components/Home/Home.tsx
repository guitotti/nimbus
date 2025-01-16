import { useEffect, useRef, useState } from "react";
import { useGetWeatherByCityNameQuery } from "../../store/slices/api/open-weather/openWeatherApi";
import { useTheme } from '../../contexts/ThemeContext';
import WeatherPanel from "../WeatherPanel/WeatherPanel";

export type Weather = {
  name: string,
  coord: {
    lat: number;
    lon: number;
  },
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  }
}

const Home = () => {
  const { styles } = useTheme();

  const inputRef = useRef<HTMLInputElement>(null);
  const [cityName, setCityName] = useState("");
  const [weather, setWeather] = useState<Weather>();

  const { data, error, isLoading } = useGetWeatherByCityNameQuery(cityName, { skip: !cityName });

  useEffect(() => {
    if (error) {
      console.log(error);
    }
    if (isLoading) {
      console.log("Loading...");
    }
  }, [error, isLoading]);

  const handleSearchButton = () => {
    setCityName(inputRef.current?.value || "");
  }

  useEffect(() => {
    if (data) {
      setWeather(data);
    }
  }, [data]);
  console.log(data);
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.logo}>Nimbus</h1>
        <div className={styles.searchContainer}>
          <input
            className={styles.input}
            ref={inputRef}
            type="text"
            placeholder="Digite o nome da cidade"
          />
          <button onClick={handleSearchButton} className={styles.button}>Buscar</button>
        </div>
        {weather && <WeatherPanel weatherInfo={weather} />}
      </div>
    </>
  );
}

export default Home;
