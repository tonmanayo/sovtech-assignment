import React from 'react';

import { useSelector } from "react-redux";
import { RootState } from "../../config/reducers";

interface IJokesProps {
    fetchJoke: () => void
}

/**
 * A joke component - renders a list of jokes and and adds new ones
 */
const Joke: React.FC<IJokesProps> = ({ fetchJoke }) => {
    const { jokes } = useSelector(
        (state: RootState) => state.home
    );

    return (
        <div onClick={() => fetchJoke()}>
            {
                Object.keys(jokes).reverse().map(key => <div key={key}>
                    <div className={'flex pt-4'}>
                        <div className={'w-1/4 justify-center align-center flex'}>
                            <img className={'w-10 h-10 self-center '} src={jokes[key].icon_url} alt=""/>
                        </div>
                        <div className={'w-3/4'}>
                            <div className={'font-medium'} style={{textTransform: 'capitalize'}}>
                                { jokes[key].category } joke
                            </div>
                            <div className={'cursor-auto max-w-xs p-2 bg-gray-200 mx-auto m-2 rounded font-light'}>
                                { jokes[key].value }
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
