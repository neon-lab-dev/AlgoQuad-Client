import { baseApi } from "../../Api/baseApi";

const queryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    getMyRaisedQueries: builder.query({
      query: ({
        limit,
        page,
        skip,
        status,
      }: {
        limit?: number;
        page?: number;
        skip?: number;
        status?: string;
      } = {}) => {
        const params = new URLSearchParams();
        if (typeof limit === "number") params.append("limit", limit.toString());
        if (typeof page === "number") params.append("page", page.toString());
        if (typeof skip === "number") params.append("skip", skip.toString());
        if (status && status !== "All") {
          params.append("status", status);
        }

        return {
          url: `/query/my-queries?${params.toString()}`,
          method: "GET",
          credentials: "include",
        };
      },
      providesTags: ["query"],
    }),

    raiseQuery: builder.mutation({
      query: (data) => ({
        url: "/query/raise",
        method: "POST",
        body: data,
        credentials: "include",
      }),
      invalidatesTags: ["query"],
    }),
  }),
});

export const { useGetMyRaisedQueriesQuery, useRaiseQueryMutation } = queryApi;
