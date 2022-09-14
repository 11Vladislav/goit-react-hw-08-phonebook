import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';
import { Box, TextField, Button, Container } from '@mui/material';

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(authOperations.register({ name, email, password }));
    setName('');
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
          label="Name"
          variant="standard"
          type="text"
          name="name"
          onChange = {handleChange}
        />
        <TextField
          required
          label="Email"
          variant="standard"
          type="email"
          name="email"
          onChange = {handleChange}
        />
        <TextField
          required
          label="Password"
          variant="standard"
          type="password"
          name="password"
          onChange = {handleChange}
        />
        <Button variant="contained" type="submit">
          Register
        </Button>
      </Box>
    </Container>
  );
}

export default RegisterPage;