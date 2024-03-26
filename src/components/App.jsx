import { useEffect } from 'react';
import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { refreshThunk } from '../redux/auth/operations';
import { handleIsRefreshing } from '../redux/auth/selectors';

import Home from './pages/Home';
import Layout from './Layout/Layout';
import Contacts from './pages/Contacts';
import Login from './pages/Login';
import Register from './pages/Register';

import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';

export const App = () => {
  const disaptch = useDispatch();
  const isRefreshing = useSelector(handleIsRefreshing);

  useEffect(() => {
    disaptch(refreshThunk());
  }, [disaptch]);

  return isRefreshing ? (
    <b>Refreshing User...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/contacts"
          element={
            <PrivateRoute>
              <Contacts />
            </PrivateRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
