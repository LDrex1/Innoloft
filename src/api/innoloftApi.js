import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
const id = "6781";
const appId = import.meta.env.VITE_APP_ID;
export const innoloftApi = createApi({
  reducerPath: "innoloft",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api-test.innoloft.com`,
  }),
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: () => ({
        url: `/product/${id}/`,
        providesTags: ["Products"],
      }),
    }),
    updateProduct: builder.mutation({
      query: ({ id, body }) => ({
        url: `/product/${id || "6781"}/`,
        method: "PUT",
        body,
      }),
      invalidatesTags: (result, error) => ["Products"],
    }),
    trlList: builder.query({
      query: () => ({
        url: "/trl/",
      }),
      providesTags: ["Products"],
    }),
    appConfig: builder.query({
      query: () => ({
        url: `/configuration/${appId || 1}/`,
      }),
      providesTags: ["Products"],
    }),
  }),
});
export const {
  useGetProductQuery,
  useUpdateProductMutation,
  useTrlListQuery,
  useAppConfigQuery,
} = innoloftApi;
