import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://63a20846a543280f7767a78e.mockapi.io/',
  }),
  tagTypes: ['Contacts'],

  endpoints: builder => ({

    getContacts: builder.query({
      query: () => '/contacts',
      providesTags: ['Contacts'],
    }),

    addContact: builder.mutation({
      query: newContact => ({
        url: '/contacts',
        method: 'POST',
        body: newContact,
      }),
      invalidatesTags: ['Contacts'],
    }),

    deleteContact: builder.mutation({
      query: ({ id }) => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
        body: id,
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = contactsApi;
