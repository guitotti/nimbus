import React, { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [inputValue, setCity] = useState("");
  const API_KEY = import.meta.env.VITE_OPEN_WEATHER_API_KEY;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };
  const searchCity = async () => {
    const city = inputValue;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&lang=pt_br&units=metric`;

    const data = await axios.get(url);

    console.log(data);
  };

  return (
    <>
      <div>
        <h1>Nimbus</h1>
        <input
          value={inputValue}
          onChange={handleInputChange}
          type="text"
          placeholder="Digite o nome da cidade"
        />
        <button onClick={searchCity}>Buscar</button>
      </div>
    </>
  );
}

export default App;
