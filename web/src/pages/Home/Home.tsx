import React, { useEffect, useState } from "react";
import { Heading } from "@radix-ui/themes";
import SearchInput from "../../components/SearchInput/SearchInput";
import {
  useLazyGetCurrentWeatherByCityNameQuery,
  useLazyGetForecastWeatherByCityNameQuery,
} from "../../api/weatherApiSlice";
import WeatherCard from "../../components/WeatherCard/WeatherCard";
import Card from "../../components/Card/Card";
import { FaWind } from "react-icons/fa6";
import { convertDateTime } from "../../utils/FormatDateTime";
import RainLevelChart from "../../components/RainLevelChart/RainLevelChart";

const PLACEHOLDER = "Busque a cidade...";

const Home: React.FC = () => {
  const [city, setCity] = useState("");

  const [
    currentWeatherTrigger,
    {
      data: currentWeatherData,
      isSuccess: currentWeatherSuccess,
      isFetching: isFetchingCurrentWeather,
      isLoading: isLoadingCurrentWeather,
    },
  ] = useLazyGetCurrentWeatherByCityNameQuery();

  const [
    forecastTrigger,
    {
      data: forecastData,
      isSuccess: forecastSuccess,
      isFetching: isFetchingForecast,
      isLoading: isLoadingForecast,
    },
  ] = useLazyGetForecastWeatherByCityNameQuery();

  const handleSearch = () => {
    if (city.trim()) {
      currentWeatherTrigger(city);
      forecastTrigger(city);
    }
    setCity("");
  };

  useEffect(() => {
    console.log(currentWeatherData);
    console.log(forecastData);
    if (currentWeatherData) {
      const result = convertDateTime(
        currentWeatherData?.dt,
        currentWeatherData?.fuso
      );
      console.log(result);
    }
  }, [currentWeatherData, forecastData]);

  return (
    <React.Fragment>
      <Heading size="6" mb="5">
        Nimbus
      </Heading>

      <SearchInput
        label="Buscar"
        placeholder={PLACEHOLDER}
        onClick={handleSearch}
        value={city}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setCity(e.target.value)
        }
        isLoading={
          isFetchingCurrentWeather ||
          isLoadingCurrentWeather ||
          isFetchingForecast ||
          isLoadingForecast
        }
      />
      {currentWeatherSuccess && (
        <>
          {currentWeatherData?.temperatura_atual_celsius &&
            currentWeatherData?.clima_principal && (
              <WeatherCard
                temperature={currentWeatherData?.temperatura_atual_celsius}
                condition={currentWeatherData.clima_principal}
              />
            )}
          <Card>
            <FaWind size={64} />
            <span>{currentWeatherData?.velocidade_vento_m_s}</span> -{" "}
            <span>metros/segundo</span>
          </Card>
          
        </>
      )}
      {forecastSuccess && (
        <Card>
          <RainLevelChart data={forecastData.previsoes_horarias}/>
        </Card>
      )}
    </React.Fragment>
  );
};

export default Home;
