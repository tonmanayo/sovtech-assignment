import React from 'react';

import { Categories, Joke } from "../../containers";

interface IHomeProps {

}

const Home: React.FC<IHomeProps> = () => {
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
      </div>
      <div id={'tools'} className={'w-full flex justify-center h-auto'}>
        <Joke />
      </div>
    </div>
  </div>;
};

export default Home;
