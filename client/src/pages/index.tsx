import React from 'react';

import { PageContainer } from '../components';
import Home from "./home/home";

export default function Pages() {
  return (
      <PageContainer>
            <div className={'min-h-screen w-full lg:static lg:max-h-full lg:overflow-visible bg-gray'}>
                <Home />
            </div>
      </PageContainer>
  );
}
