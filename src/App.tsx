import { useEffect, useRef, useState } from "react";
import { useGetWeatherByCityNameQuery } from "./store/slices/api/open-weather/openWeatherApi";
import { ThemeProvider, useTheme } from './contexts/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
};

const Home = () => {
  const { styles, toggleTheme } = useTheme();
  const inputRef = useRef<HTMLInputElement>(null);
  const [cityName, setCityName] = useState("");

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

  console.log(data);

  return (
    <>
      <div className={styles.container}>
        <button className={styles.button} onClick={toggleTheme}>
          Toggle Theme
        </button>
        <h1>Nimbus</h1>
        <input
          ref={inputRef}
          type="text"
          placeholder="Digite o nome da cidade"
        />
        <button onClick={handleSearchButton} className={styles.button}>Buscar</button>
      </div>
    </>
  );
}

export default App;
