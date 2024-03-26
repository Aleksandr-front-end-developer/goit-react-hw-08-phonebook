import { Link } from 'react-router-dom';

import {
  Box,
  Button,
  Grid,
  List,
  ListItem,
  Paper,
  Typography,
} from '@mui/material';

const Home = () => {
  return (
    <>
      <Link to="/contacts">
        <Button
          sx={{
            p: { md: 2 },
            mb: { md: 2 },
          }}
          size="large"
        >
          My Contacts
        </Button>
      </Link>
      <Paper
        sx={{
          position: 'relative',
          backgroundColor: '#1976d2',
          color: '#fff',
          mb: 4,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: 'rgba(0,0,0,.3)',
          }}
        />
        <Grid container>
          <Grid item md={6}>
            <Box
              sx={{
                position: 'relative',
                p: { xs: 3, md: 6 },
                pr: { md: 0 },
              }}
            >
              <Typography
                component="h1"
                variant="h3"
                color="inherit"
                gutterBottom
              >
                Phonebook
              </Typography>
              <Typography variant="h5" color="inherit">
                The following technologies are used:
                <List>
                  <ListItem>React</ListItem>
                  <ListItem>React Router</ListItem>
                  <ListItem>Redax</ListItem>
                  <ListItem>Rest API</ListItem>
                  <ListItem>JSON Web Token</ListItem>
                  <ListItem>Material UI</ListItem>
                </List>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};
export default Home;
