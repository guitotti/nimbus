import { useTheme } from '../../contexts/ThemeContext';

const WeatherPanel = ({ weatherInfo }: any) => {
  const { styles } = useTheme();
  return (
    <div className={styles.weatherContainer}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <h1 className={styles.cityTitle}>{weatherInfo?.name}</h1>
        <img className={styles.weatherIcon} src={`http://openweathermap.org/img/wn/${weatherInfo?.weather[0].icon}.png`} alt="Weather Icon" />
      </div>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "left" }}>
        <p>Latitude: {weatherInfo?.coord.lat}</p>
        <p>Longitude: {weatherInfo?.coord.lon}</p>
        <p>Temperatura atual: {Math.round(weatherInfo?.main?.temp)} ºC</p>
        <p>Sensação térmica: {Math.round(weatherInfo?.main?.feels_like)} ºC</p>
      </div>

    </div>
  )
}

export default WeatherPanel;