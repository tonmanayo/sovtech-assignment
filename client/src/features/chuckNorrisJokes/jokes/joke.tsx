import React from 'react';
import { Loader } from '../../../components';
import { useAppDispatch, useAppSelector } from '../../../config/hooks';
import { selectCategory } from '../categories/categoriesSlice';
import { useGetJokeByCategoryQuery } from './jokesApiSlice';
import { addJoke, selectJokes } from './jokesSlice';

interface IJokesProps {
}

/**
 * A joke component - renders a list of jokes and and adds new ones
 */
const Joke: React.FC<IJokesProps> = ({ }) => {
    
    const category = useAppSelector(state => selectCategory(state.checkNorris.categories))
    const jokes = useAppSelector(state => selectJokes(state.checkNorris.jokes))
    const { data: jokeData, isLoading } = useGetJokeByCategoryQuery({ category })
    
    if (!jokes) return <Loader />;
    return (
        <div >
            {
                jokes?.map((joke, key) => <div key={key}>
                    <div className={'flex pt-4'}>
                        <div className={'w-1/4 justify-center align-center flex'}>
                            <img className={'w-10 h-10 self-center '} src={joke.icon_url} alt=""/>
                        </div>
                        <div className={'w-3/4'}>
                            <div className={'font-medium'} style={{textTransform: 'capitalize'}}>
                                { joke.category } joke
                            </div>
                            <div className={'cursor-auto max-w-xs p-2 bg-gray-200 mx-auto m-2 rounded font-light'}>
                                { joke.value }
                            </div>
                        </div>
                    </div>
                    {
                        // because alignment being weird
                    }
                    <div className={'flex'}>
                        <div className={'w-1/4'} />
                        <div className={'w-3/4'}>
                            <hr className={'my-1 border-b-2 border-gray-200'}/>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Joke;
