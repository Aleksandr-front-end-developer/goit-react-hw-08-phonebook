import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleUser, handleIsLoggedIn } from '../../redux/auth/selectors';
import { NavLink } from 'react-router-dom';
import { logOutThunk } from '../../redux/auth/operations';
import { Typography } from '@mui/material';
import { Toolbar, Button } from '@mui/material';

const UserMenu = () => {
  const dispatch = useDispatch();

  const user = useSelector(handleUser);
  const isLoggedIn = useSelector(handleIsLoggedIn);

  const handleLogOut = () => {
    dispatch(logOutThunk());
  };

  return (
    <React.Fragment>
      <Toolbar
        component="header"
        sx={{ borderBottom: 1, borderColor: 'divider' }}
      >
        <NavLink to="/">
          <Button size="large">Home</Button>
        </NavLink>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          Phonebook
        </Typography>
        {isLoggedIn ? (
          <>
            <Typography sx={{ marginRight: 2 }}>{user.email}</Typography>
            <Button onClick={handleLogOut} variant="outlined" size="large">
              Logout
            </Button>
          </>
        ) : (
          <NavLink to="/login">
            <Button variant="outlined" size="large">
              Sign In
            </Button>
          </NavLink>
        )}
      </Toolbar>
    </React.Fragment>
  );
};
export default UserMenu;
