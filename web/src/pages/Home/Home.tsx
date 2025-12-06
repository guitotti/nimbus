import React, { useEffect, useState } from "react";
import { Heading, Text } from "@radix-ui/themes";
import SearchInput from "../../components/SearchInput/SearchInput";
import {
  useLazyGetCurrentWeatherByCityNameQuery,
  useLazyGetForecastWeatherByCityNameQuery,
} from "../../api/weatherApiSlice";
import WeatherCard from "../../components/WeatherCard/WeatherCard";
import Card from "../../components/Card/Card";
import { convertDateTime } from "../../utils/FormatDateTime";
import RainLevelChart from "../../components/RainLevelChart/RainLevelChart";
import styles from "./Home.module.css";
import Logo from "../../assets/logo-short.png";
import WindCard from "../../components/WindCard/WindCard";
import TemperatureCard from "../../components/TemperatureCard/TemperatureCard";
import AtmPressureCard from "../../components/AtmPressureCard/AtmPressureCard";
import HumidityLevelCard from "../../components/HumidityLevelCard/HumidityLevelCard";
import CityInfoCard from "../../components/CityInfoCard/CityInfoCard";
import Nimbus from "../../components/Nimbus/Nimbus";
import TemperatureChart from "../../components/TemperatureChart/TemperatureChart";

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
      <div className={styles.main}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "36px",
          }}
        >
          <Heading size="6" mb="8">
            <img src={Logo} alt="" style={{ width: "240px" }} />
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
        </div>

        {!currentWeatherData && !forecastData && <Nimbus />}

        {!currentWeatherData && !forecastData && (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "16px",
              alignItems: "baseline",
              marginLeft: "16px",
            }}
          >
            <Text size="5" color="plum">
              <strong>Bem vindo ao Nimbus!</strong>
            </Text>
            <Text color="plum">
              Digite o nome de uma cidade para buscar dados de previsão do
              tempo...
            </Text>
          </div>
        )}

        {currentWeatherData && forecastData && (
          <div className={styles["content-container"]}>
            <Text size="7" color="gray">
              Clima agora em {`${currentWeatherData?.cidade}`}:
            </Text>
            {currentWeatherSuccess && (
              <div className={styles.row}>
                <CityInfoCard
                  city={currentWeatherData?.cidade}
                  countryCode={currentWeatherData?.codigo_pais}
                  latitude={currentWeatherData?.latitude}
                  longitude={currentWeatherData?.longitude}
                />
                <WeatherCard
                  temperature={currentWeatherData?.temperatura_atual_celsius}
                  condition={currentWeatherData.clima_principal}
                />
                <WindCard
                  windVelocity={currentWeatherData?.velocidade_vento_m_s}
                />
                <TemperatureCard
                  maxTemp={currentWeatherData?.temperatura_max_celsius}
                  minTemp={currentWeatherData?.temperatura_min_celsius}
                  thermalSensation={
                    currentWeatherData?.sensacao_termica_celsius
                  }
                />
                <AtmPressureCard pressure={currentWeatherData?.pressao_hpa} />
                <HumidityLevelCard
                  humidity={currentWeatherData?.umidade_porcentagem}
                />
              </div>
            )}
            <Text size="7" style={{ marginTop: "20px" }} color="gray">
              Análise dos próximos dias:
            </Text>
            {forecastSuccess && (
              <Card
                style={{
                  backgroundColor: "#e0f0ff",
                  border: "1px solid #a7d4ff",
                  borderRadius: "10px",
                  padding: "20px",
                  marginTop: "20px",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                }}
              >
                <h2
                  style={{
                    marginBottom: "10px",
                    fontSize: "20px",
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "#005c99",
                  }}
                >
                  Chuva Acumulada (Próximos dias)
                </h2>
                <RainLevelChart data={forecastData.previsoes_horarias} />
              </Card>
            )}
            {forecastSuccess && (
              <Card
                style={{
                  backgroundColor: "#e0f0ff",
                  border: "1px solid #a7d4ff",
                  borderRadius: "10px",
                  padding: "20px",
                  marginTop: "25px",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                }}
              >
                <h2
                  style={{
                    marginBottom: "10px",
                    fontSize: "20px",
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "#005c99",
                  }}
                >
                  Variação de Temperatura e Umidade
                </h2>
                <TemperatureChart data={forecastData.previsoes_horarias} />
              </Card>
            )}
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default Home;
