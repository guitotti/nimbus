import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { CurrentWeatherResponse, ForecastWeatherReponse } from "./types";

const API_URL = import.meta.env.VITE_BASE_API_URL;
const PORT = import.meta.env.VITE_PORT;

export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}:${PORT}/api/v1/weather`,
  }),
  endpoints: (build) => ({
    getCurrentWeatherByCityName: build.query<CurrentWeatherResponse, string>({
      query: (cityName) => `current/${cityName}`,
    }),
    getForecastWeatherByCityName: build.query<ForecastWeatherReponse, string>({
      query: (cityName) => `forecast/${cityName}`,
    }),
  }),
});

export const {
  useGetCurrentWeatherByCityNameQuery,
  useLazyGetCurrentWeatherByCityNameQuery,
  useGetForecastWeatherByCityNameQuery,
  useLazyGetForecastWeatherByCityNameQuery,
} = weatherApi;
