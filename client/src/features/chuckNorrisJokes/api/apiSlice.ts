import { createApi } from "@reduxjs/toolkit/query/react";

import { graphqlBaseQuery } from "../../../services/graphBaseQuery";

export const chuckNorrisApiSlice = createApi({
    reducerPath: 'chuckNorrisAPI',
    baseQuery: graphqlBaseQuery({
        baseUrl: 'http://localhost:4000',
    }),
    tagTypes: ['JokeCategories', 'Joke'],
    endpoints: () => ({})
})