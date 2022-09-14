import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from 'redux/auth';
import { Box, Typography } from '@mui/material';

export const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Box as="nav" display="flex">
      <NavLink
        to="/"
      >
       <Typography sx={{ p: 2, display: 'block', color: 'red', fontWeight: 700, }}>Main</Typography>
      </NavLink>

      {isLoggedIn && (
        <NavLink
          to="/contacts" >
           <Typography sx={{ p: 2, display: 'block', fontWeight: 700, }}>Contacts</Typography>
        </NavLink>
      )}
    </Box>
  );
};

export default Navigation;