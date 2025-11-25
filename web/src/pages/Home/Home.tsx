import React, { useEffect, useState } from "react";
import { Heading } from "@radix-ui/themes";
import SearchInput from "../../components/SearchInput/SearchInput";
import { useLazyGetCurrentWeatherByCityNameQuery } from "../../api/weatherApiSlice";

const PLACEHOLDER = "Busque a cidade...";

const Home: React.FC = () => {
  const [city, setCity] = useState("");

  const [trigger, { data }] = useLazyGetCurrentWeatherByCityNameQuery();

  const handleSearch = () => {
    if (city.trim()) {
      trigger(city);
    }
  };

  useEffect(() => {
    console.log(data);
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
      />
    </React.Fragment>
  );
};

export default Home;
