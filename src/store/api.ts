import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { UsersResponse } from "../types/types";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_BASE_URL }),
  endpoints: (builder) => ({
    getUsers: builder.query<
      UsersResponse,
      {
        limit?: number;
        skip?: number;
        q?: string;
        key?: string;
        value?: string;
      }
    >({
      query: (params) => {
        let url = "/users";
        if (params.q) {
          url = "/users/search";
        } else if (params.key && params.value) {
          url = "/users/filter";
        }
        return { url, params };
      },
    }),
  }),
});

export const { useGetUsersQuery } = api;
