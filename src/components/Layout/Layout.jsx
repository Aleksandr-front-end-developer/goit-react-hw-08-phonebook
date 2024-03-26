import UserMenu from 'components/UserMenu/UserMenu';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, Container } from '@mui/material';
import { Toaster } from 'react-hot-toast';

const defaultTheme = createTheme();

const Layout = () => {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <UserMenu />
        <Container component="main" maxWidth="lg">
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          ></Box>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </Container>
      </ThemeProvider>
      <Toaster />
    </>
  );
};
export default Layout;
