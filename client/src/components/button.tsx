import React from 'react';


/**
 * A simple button component, not really configurable colour size etc needs work
 * @param label - text inside the button
 * @param onPress - a function call when the button is pressed
 */
const Button:React.FC<{label: string, onPress: () => void}> = ({ label, onPress }) => {
  return (
      <div
          onClick={onPress}
           className={'cursor-pointer w-48 border-2 border-blue-500 hover:border-red-500 bg-transparent text-blue-700' +
           ' hover:text-red-700 py-2 px-4 font-semibold rounded'}
      >
          {label}
      </div>
  );
};

export default Button
