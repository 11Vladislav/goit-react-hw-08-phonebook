import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import {Button, Box, Typography } from '@mui/material';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <Box display="flex" alignItems='center' sx={{ mr: '5px' }}>
      <Typography sx={{ p: 2, display: 'block' }}>Wellcome, {name}</Typography>
      <Button type="button" variant="contained" onClick={() => dispatch(authOperations.logOut())}>
        Sign Out
      </Button>
    </Box>
  );
}
