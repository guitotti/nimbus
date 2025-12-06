import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { CurrentWeatherResponse, ForecastWeatherReponse } from "./types";

export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1/weather",
  }),
  endpoints: (build) => ({
    getCurrentWeatherByCityName: build.query<CurrentWeatherResponse, string>({
      query: (cityName) => `current/${cityName}`,
    }),
    getForecastWeatherByCityName: build.query<ForecastWeatherReponse, string>({
      query: (cityName) => `forecast/${cityName}`,
    })
  }),
});

export const {
  useGetCurrentWeatherByCityNameQuery,
  useLazyGetCurrentWeatherByCityNameQuery,
  useGetForecastWeatherByCityNameQuery,
  useLazyGetForecastWeatherByCityNameQuery
} = weatherApi;
