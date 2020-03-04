import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

import { RootState } from "../../config/reducers";
import { setJoke } from "../../pages/home/reducer";

const GET_JOKE = gql`
    query getJoke($category: String!) {
        joke(category: $category) {
            icon_url
            id
            url
            value
        }
    }
`;

/**
 * A custom hook to fetch a joke adding it to the redux store
 */
export function useJoke() {
    const dispatch = useDispatch();
    const { jokes, category } = useSelector(
        (state: RootState) => state.home
    );
    const {
        data,
        loading,
        error,
        refetch,
        networkStatus
    } = useQuery(GET_JOKE, { variables: { category }, notifyOnNetworkStatusChange: true });

    useEffect(() => {
        if (data?.joke && networkStatus === 7) {
            if (Object.keys(jokes ?? {}).includes(data.joke.id)) {
                refetch({ category }).catch(error => console.log(error));
            } else {
                dispatch(setJoke({ joke: {...data?.joke, category }, loading, error }));
            }
        }
        // only needs to update if the data has changed
        // eslint-disable-next-line
    } ,[data]);

    return { fetchJoke: refetch, loading: networkStatus < 7, error }
}
