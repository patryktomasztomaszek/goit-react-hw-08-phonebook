import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const phonebookApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),

  tagTypes: ['Contacts', 'User'],
  endpoints: builder => ({
    signup: builder.mutation({
      query: values => ({
        url: 'users/signup',
        method: 'POST',
        body: values,
      }),
      invalidatesTags: ['User'],
    }),

    login: builder.mutation({
      query: values => ({
        url: 'users/login',
        method: 'POST',
        body: values,
      }),
      invalidatesTags: ['User'],
    }),

    logout: builder.mutation({
      query: values => ({
        url: 'users/logout',
        method: 'POST',
        body: values,
      }),
    }),

    currentUser: builder.query({
      query: () => ({
        url: 'users/current',
      }),
      providesTags: ['User'],
    }),

    getContacts: builder.query({
      query: () => 'contacts',
      providesTags: ['Contacts', 'User'],
    }),

    addContact: builder.mutation({
      query: contact => ({
        url: 'contacts',
        method: 'POST',
        body: contact,
      }),
      invalidatesTags: ['Contacts'],
    }),

    deleteContact: builder.mutation({
      query: id => ({
        url: `contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useCurrentUserQuery,
  useLoginMutation,
  useSignupMutation,
  useLogoutMutation,
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = phonebookApi;
