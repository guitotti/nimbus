import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { OpenWeatherSearchByCityResponse } from "../../../types/OpenWeatherSearchByCity";

const API_KEY = import.meta.env.VITE_OPEN_WEATHER_API_KEY;

export const openWeatherApi = createApi({
  reducerPath: "openWeatherApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.openweathermap.org/data/2.5/`,
  }),
  endpoints: (builder) => ({
    getWeatherByCityName: builder.query<
      OpenWeatherSearchByCityResponse,
      string
    >({
      query: (city) =>
        `weather?q=${city}&appid=${API_KEY}&lang=pt_br&units=metric`,
    }),
  }),
});

export const { useGetWeatherByCityNameQuery } = openWeatherApi;
