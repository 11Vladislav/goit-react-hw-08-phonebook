import { useSelector } from 'react-redux';
import Navigation from 'components/Navigation';
import UserMenu from 'components/UserMenu';
import AuthNav  from 'components/AuthNav';
import { authSelectors } from 'redux/auth';
import { AppBar, Container, Box, Toolbar, Typography } from '@mui/material';


export const Layout = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <AppBar position="fixed" >
          <Container maxWidth="x1">
            <Toolbar>
            <Typography
                variant="h6"
                sx={{
                  mr: 2,
                  flexGrow: 1,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                }}
              >
                Phone Book
              </Typography>
              <Box sx={{ display: 'flex' }}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Box>
            </Toolbar>
          </Container>
        </AppBar>
  );
}
export default Layout;