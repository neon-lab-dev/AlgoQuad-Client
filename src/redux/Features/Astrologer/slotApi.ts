import { baseApi } from "../../Api/baseApi";

const slotApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        getAllSlotsByAstrologerId: builder.query({
            query: ({ id, date }) => ({
                url: `/slot/${id}/${date}`,
                method: "GET",
                credentials: "include",
            }),
            providesTags: ["astrologer"],
        }),
    }),
});

export const {
    useGetAllSlotsByAstrologerIdQuery
} = slotApi;
