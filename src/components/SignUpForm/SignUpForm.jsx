import { useContext } from 'react';
import { AuthContext } from '../App/App';
import { notify } from 'helpers/notifycation';
import 'react-toastify/dist/ReactToastify.css';
import { registerUser } from '../../services/API';

import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import {
  LoginFormStyled,
  InputLabel,
  Button,
  Input,
  ErrWrapper,
  Wrapper,
} from './SignUpForm.styled';

const regNotify =
  'You have successfully registered. A verification code was sent to your email ';

const initialsValues = {
  email: '',
  password: '',
};

const FormSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
});

export default function SignUpForm() {
  const { setUserEmail, setVerify } = useContext(AuthContext);

  const handleSubmitForm = async (values, { resetForm }) => {
    try {
      const response = await registerUser(values);
      if (response.status === 200) {
        notify('info', regNotify);
        setUserEmail(values.email);
        setVerify(true);

        resetForm();
      }
    } catch (error) {
      notify('error', error.response.data.message);
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
                title="The password must be at least 8 characters long, consist of only letters and numbers, and contain at least one capital letter "
              />
              <ErrWrapper>
                <ErrorMessage name="password" />
              </ErrWrapper>
            </InputLabel>

            <Button
              type="submit"
              disabled={
                (props.values.email !== '') & (props.values.password !== '')
                  ? false
                  : true
              }
            >
              Sign up
            </Button>
          </LoginFormStyled>
        )}
      </Formik>
    </Wrapper>
  );
}
