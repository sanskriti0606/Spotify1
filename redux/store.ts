"use client";
import { configureStore } from "@reduxjs/toolkit";
import { rapidapiApi } from "./services/rapidapiCore";
export const store = configureStore({
  reducer: {
    [rapidapiApi.reducerPath]: rapidapiApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rapidapiApi.middleware),
});
