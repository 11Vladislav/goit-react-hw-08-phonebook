import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import {Button } from '@mui/material';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <div style={styles.container}>
      <span style={styles.name}>Welcome, {name}</span>
      <Button type="button" variant="contained" onClick={() => dispatch(authOperations.logOut())}>
        Sign Out
      </Button>
    </div>
  );
}
