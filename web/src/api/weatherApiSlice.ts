import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1/weather",
  }),
  endpoints: (build) => ({
    // TODO: create query type - will be done since we define the contract

    // eslint-disable-next-line
    getCurrentWeatherByCityName: build.query<any, string>({
      query: (cityName) => `current/${cityName}`,
    }),
  }),
});

export const {
  useGetCurrentWeatherByCityNameQuery,
  useLazyGetCurrentWeatherByCityNameQuery,
} = weatherApi;
