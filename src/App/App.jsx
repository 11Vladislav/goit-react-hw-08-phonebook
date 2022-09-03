import { Routes, Route } from 'react-router-dom';
import { HomePage, LoginPage, RegisterPage } from 'pages';
import { Container } from './App.styled';
import { Layout } from '../components/Layout/Layout'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { authOperations } from 'redux/auth';
import { PrivateRoute } from 'components/routes/PrivateRoute';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import { PublicRoute } from 'components/routes/PublicRoute';


export const App =() => {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <Layout />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="register"
          element={
            <PublicRoute>
              <RegisterPage />
            </PublicRoute>
          }
        />
        <Route
          path="login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="contacts"
          element={
            <PrivateRoute>
              <ContactForm />
              <Filter title="Find contact by name" />
              <ContactList />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<PrivateRoute />} />
      </Routes>
    </Container>
  );
}


