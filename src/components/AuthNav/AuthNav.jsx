import { NavLink } from 'react-router-dom';
import { Typography } from '@mui/material';

export const AuthNav= () => {
  return (
    <div>
      <NavLink
        to="/register">
        <Typography sx={{ p: 2, display: 'block' }}>Register</Typography>
      </NavLink>
      <NavLink
        to="/login">
       <Typography sx={{ p: 2, display: 'block' }}>Login</Typography>
      </NavLink>
    </div>
  );
}
export default AuthNav;