import React from 'react';

/**
 * A component that wraps and sets the screen
 * @param props - used to get the children to render
 * @constructor
 */
export default function PageContainer(props: any) {
  return (
      <div className={'w-full max-w-screen-xl mx-auto px-6'}>
          <div className={'lg:flex -mx-6'}>
              {props.children}
          </div>
      </div>
  );
}
