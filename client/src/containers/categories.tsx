import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import gql from 'graphql-tag';

import { Loading, DropDown } from '../components';
import {useDispatch, useSelector} from "react-redux";
import { setCategory } from '../pages/home/reducer';
import {RootState} from "../config/reducers";


interface LaunchesProps {}

const GET_CATEGORIES = gql`
    query jokeCategories {
        jokeCategories {
            categories
        }
    }
`;
/**
 * Categories component - doing the fetching inside the component and not storing it in redux
 */
const Categories: React.FC<LaunchesProps> = () => {
    const {
        data,
        loading,
        error
    } = useQuery(GET_CATEGORIES);
    const dispatch = useDispatch();
    const { category } = useSelector(
        (state: RootState) => state.home
    );

    const onCategoryPress = (category: string) => {
        dispatch(setCategory(category))
    };

    if (loading) return <Loading />;
    if (error) return <p>ERROR</p>;
    if (!data) return <p>Not found</p>;
    const { jokeCategories: { categories } } = data;
    if (!categories) return <p>ERROR</p>;

    return (
        <DropDown value={category} setValue={onCategoryPress} labels={categories} />
    );
};

export default Categories;
