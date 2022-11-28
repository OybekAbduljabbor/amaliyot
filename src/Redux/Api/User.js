import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://samid.uz/v1" }),
  reducerPath: "userApi",
  tagTypes: ["USER"],

  endpoints: (build) => ({
    getUser: build.query({
      query: (token) => ({
        url: "/task",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["USER"],
    }),

    getUserId: build.query({
      query: ({ id, token }) => ({
        url: `/task${id}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["USER"],
    }),
    createUser: build.mutation({
      query: (body) => ({
        url: "/task",
        method: "POST",
        headers: {
          Authorization: `Bearer ${body.token}`,
        },
        body,
      }),
      invalidatesTags: ["USER"],
    }),

    updateUser: build.mutation({
      query: (body) => ({
        url: `/task${body.id}`,
        method: "PUT",
        headers: {
          Authorization: `Bearer ${body.token}`,
        },
        body,
      }),
      invalidatesTags: ["USER"],
    }),

    deleteUser: build.mutation({
      query: (body) => ({
        url: `/task${body.id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${body.token}`,
        },
      }),
      invalidatesTags: ["USER"],
    }),
  }),
});

export const {
  useGetUserQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = userApi;
