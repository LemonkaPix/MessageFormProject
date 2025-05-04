"use client";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const messagesApi = createApi({
  reducerPath: "messagesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/",
  }),
  refetchOnFocus: true,
  endpoints: (builder) => ({ 
    // Query to fetch posts
    getMessages: builder.query({ query: () => "getMessages" }),
    addMessage: builder.mutation({
      query: (newMessage) => ({
        url: "addMessage",
        method: "POST",
        body: newMessage,
      }),
    }),
    editMessage: builder.mutation({
        query: ({ id, ...newMessage }) => ({
          url: `editMessage/${id}`,
          method: "PUT",
          body: newMessage,
        }),
      }),
      deleteMessage: builder.mutation({
        query: (id) => ({
          url: `deleteMessage/${id}`,
          method: "DELETE",
        }),
      }),
    }),
});

export const { useGetMessagesQuery, useAddMessageMutation, useEditMessageMutation, useDeleteMessageMutation } = messagesApi;