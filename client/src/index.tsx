import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './config/store';
import reportWebVitals from './reportWebVitals';
import './index.css';
import Pages from './pages';
import { extendedCategoriesSlice } from './features/chuckNorrisJokes/categories/categoriesApiSlice';

const container = document.getElementById('root')!;
const root = createRoot(container);
store.dispatch(extendedCategoriesSlice.endpoints.getCategory.initiate({}))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Pages />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
