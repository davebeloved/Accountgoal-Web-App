import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const baseQuery = fetchBaseQuery({
//   baseUrl: '"https://apiservice.estudylite.com',
// });

const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.accountsgoal.com",
  }),
  tagTypes: ["user"],
  endpoints: (builder) => ({}),
});

export default apiSlice;
