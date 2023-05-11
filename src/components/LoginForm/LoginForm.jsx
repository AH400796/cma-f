import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../services/API';
import { AuthContext } from '../App/App';
import { notify } from 'helpers/notifycation';
import 'react-toastify/dist/ReactToastify.css';

import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import {
  LoginFormStyled,
  InputLabel,
  Button,
  Input,
  ErrWrapper,
  Wrapper,
  ButtonWrapper,
} from './LoginForm.styled';

const initialsValues = {
  email: '',
  password: '',
};

const FormSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
});

export default function LoginForm() {
  const { setIsLoggedIn, setToken, setUserEmail, setVerify } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmitForm = async (values, { resetForm }) => {
    try {
      const response = await loginUser(values);
      if (response.status === 200) {
        setIsLoggedIn(true);
        setToken(response.data.token);
        // localStorage.setItem('loggedin', true);
        localStorage.setItem('token', response.data.token);
        setUserEmail(response.data.email);
        navigate('/arbitrages', { replace: true });
      }
    } catch (error) {
      notify('error', error.response.data.message);
      if (error.response.data.message === 'Email not verified') {
        setVerify(true);
        setUserEmail(values.email);
        navigate('/register', { replace: true });
      }
    }
  };

  return (
    <Wrapper>
      <Formik
        initialValues={initialsValues}
        onSubmit={handleSubmitForm}
        validationSchema={FormSchema}
      >
        {props => (
          <LoginFormStyled>
            <InputLabel>
              Email
              <Input
                type="email"
                name="email"
                placeholder="example@gmail.com"
              />
              <ErrWrapper>
                <ErrorMessage name="email" />
              </ErrWrapper>
            </InputLabel>
            <InputLabel>
              Password
              <Input
                type="password"
                name="password"
                placeholder="********"
                title="The password must consist only ofletters and numbers and must contain at least one capital letter"
              />
              <ErrWrapper>
                <ErrorMessage name="password" />
              </ErrWrapper>
            </InputLabel>
            <ButtonWrapper>
              <Button
                type="submit"
                disabled={
                  (props.values.email !== '') & (props.values.password !== '')
                    ? false
                    : true
                }
              >
                Log in
              </Button>
            </ButtonWrapper>
          </LoginFormStyled>
        )}
      </Formik>
    </Wrapper>
  );
}
