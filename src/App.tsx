import { useEffect, useRef, useState } from "react";
import { useGetWeatherByCityNameQuery } from "./store/slices/api/open-weather/openWeatherApi";
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import Header from "./components/Header";

const App = () => {
  return (
    <ThemeProvider>
      <Header />
      <Home />
    </ThemeProvider>
  );
};

const Home = () => {
  const { styles } = useTheme();
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
      </div>
    </>
  );
}

export default App;
