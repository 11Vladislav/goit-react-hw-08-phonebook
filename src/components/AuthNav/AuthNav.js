import { NavLink } from 'react-router-dom';
import { Typography, Box } from '@mui/material';

export const AuthNav= () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <NavLink
        to="/register">
        <Typography sx={{ p: 2, display: 'block' }}>Register</Typography>
      </NavLink>
      <NavLink
        to="/login">
       <Typography sx={{ p: 2, display: 'block' }}>Login</Typography>
      </NavLink>
    </Box>
  );
}
export default AuthNav;