import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { PATH_LIST } from 'router/paths';
import { HomePage } from 'pages/index';
import { Provider } from 'react-redux';
import { store } from 'store/store';
import Layout from 'components/Layout/Layout';

export function Router() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path={PATH_LIST.ROOT} element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </Provider>
  );
}
