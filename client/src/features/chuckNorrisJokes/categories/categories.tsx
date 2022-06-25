import React from 'react';

import { Loader, DropDown } from '../../../components';
import { selectCategoriesData } from './categoriesApiSlice';
import { useSelector } from "react-redux";
import { selectCategory, setCategory } from './categoriesSlice';
import { useAppDispatch, useAppSelector } from '../../../config/hooks';

interface LaunchesProps {}

/**
 * Categories component - doing the fetching inside the component and not storing it in redux
 */
const Categories: React.FC<LaunchesProps> = () => {
    const categories = useSelector(selectCategoriesData)
    const category = useAppSelector(state => selectCategory(state.checkNorris.categories))
    const dispatch = useAppDispatch()
    
    
    const onCategoryPress = (category: string) => {
        console.log(category);
        dispatch(setCategory(category))
    };

    if (!categories) return <Loader />;
    if (!categories) return <p>ERROR</p>;

    return (
        <DropDown value={category} setValue={onCategoryPress} labels={categories} />
    );
};

export default Categories;
