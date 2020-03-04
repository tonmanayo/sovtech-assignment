import React from 'react';

import { Categories, Joke } from "../../containers";
import {useJoke} from "../../containers/joke/helpers";
import {Button, Loading} from "../../components";
import {useSelector} from "react-redux";
import {RootState} from "../../config/reducers";

interface IHomeProps {

}

const Home: React.FC<IHomeProps> = () => {
  const { category } = useSelector(
      (state: RootState) => state.home
  );
  const { fetchJoke, loading, error } = useJoke();
  return <div id={'content'} className={'flex'} >
    <div className={'pt-24 pb-16 lg:pt-10 w-full max-w-3xl mx-auto bg-gray-100'}>
      <div className={'markdown mb-6 px-6'}>
        <h1>Chuck Norris Jokes</h1>
        <div className={'mt-0 mb-4 text-gray-600'}>
          Checkout some awesome Chuck Norris jokes
        </div>
        <hr className={'my-8 border-b-2 border-gray-200'}/>
      </div>
      <div id={'tools'} className={'w-full flex justify-around bg-gray-300'}>
        <Categories />
        {category && <Button onPress={() => fetchJoke()} label={'Get Another!'} />}
      </div>
      <div id={'tools'} className={'w-full flex justify-center h-auto'}>
        <div className={'pt-2'}>
          { loading && <Loading />}
        </div>
        <Joke fetchJoke={fetchJoke} />
        {
          !category ? <div>Please select a category to begin</div> : error?.message ? <div className={'bg-red-200'}>
            { error?.message }
          </div> : <div> </div>
        }
      </div>
    </div>
  </div>;
};

export default Home;
