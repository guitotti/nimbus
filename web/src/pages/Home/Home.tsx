import React, { useEffect, useState } from "react";
import { Heading } from "@radix-ui/themes";
import SearchInput from "../../components/SearchInput/SearchInput";
import { useLazyGetCurrentWeatherByCityNameQuery } from "../../api/weatherApiSlice";
import WeatherCard from "../../components/WeatherCard/WeatherCard";
import Card from "../../components/Card/Card";
import { FaWind } from "react-icons/fa6";
import { convertDateTime } from "../../utils/FormatDateTime";

const PLACEHOLDER = "Busque a cidade...";

const Home: React.FC = () => {
  const [city, setCity] = useState("");

  const [trigger, { data, isSuccess, isFetching, isLoading }] =
    useLazyGetCurrentWeatherByCityNameQuery();

  const handleSearch = () => {
    if (city.trim()) {
      trigger(city);
    }
    setCity("");
  };

  useEffect(() => {
    console.log(data);
    if (data) {
      const result = convertDateTime(data?.dt, data?.fuso);
      console.log(result);
    }
  }, [data]);

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
        isLoading={isFetching || isLoading}
      />
      {isSuccess ? (
        <>
          {data?.temperatura_atual_celsius && data?.clima_principal && (
            <WeatherCard
              temperature={data?.temperatura_atual_celsius}
              condition={data.clima_principal}
            />
          )}
          <Card>
            <FaWind size={64} />
            <span>{data?.velocidade_vento_m_s}</span> -{" "}
            <span>metros/segundo</span>
          </Card>
        </>
      ) : (
        <></>
      )}
    </React.Fragment>
  );
};

export default Home;
