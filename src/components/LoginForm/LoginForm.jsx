import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../services/API';
import { AuthContext } from '../App/App';
import { notify } from 'helpers/notifycation';

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
  const { setIsLoggedIn, setToken, setUserEmail } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmitForm = async (values, { resetForm }) => {
    try {
      const response = await loginUser(values);
      if (response.status === 200) {
        setIsLoggedIn(true);
        setToken(response.data.token);
        setUserEmail(response.data.email);
        navigate('/', { replace: true });
      }
    } catch (error) {
      notify(error.message);
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
              <Input type="password" name="password" placeholder="********" />
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
