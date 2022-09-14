import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';
import { Box, Container, TextField, Button } from '@mui/material';

export const LoginPage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
      <Container sx={{ mt: '5rem' }}>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 8, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          required
          label="Email"
          variant="standard"
          type="email"
          name="email"
          onChange = {handleChange}
        />
        <TextField
          label="Password"
          variant="standard"
          type="password"
          name="password"
          required
          minLength="6"
          onChange = {handleChange}
          />
        <Button variant="contained" type="submit">
          Enter
        </Button>
      </Box>
    </Container>
  );
}

export default LoginPage;