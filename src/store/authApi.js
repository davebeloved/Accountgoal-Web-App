import apiSlice from "./apiSlice";

const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: "/api/login",
        method: "POST",
        body: data,
      }),
    }),
    resetPassword: builder.mutation({
      query: (data) => ({
        url: "/api/reset-password",
        method: "POST",
        body: data,
      }),
    }),
    verifyResetPassword: builder.mutation({
      query: (data) => ({
        url: "/api/verify-reset-password",
        method: "POST",
        body: data,
      }),
    }),

    createOrganization: builder.mutation({
      query: (data) => ({
        url: "/api/create_organization",
        method: "POST",
        body: data,
      }),
    }),

    
  }),
});

export const {
  useLoginMutation,
  useResetPasswordMutation,
  useVerifyResetPasswordMutation,
  useCreateOrganizationMutation,

} = authApi;
