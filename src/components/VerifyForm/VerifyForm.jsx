import { useState, useContext } from 'react';
import { AuthContext } from '../../components/App/App';
import { useNavigate } from 'react-router-dom';

import { verify } from '../../services/API';
import { reVerify } from '../../services/API';
import { notify } from 'helpers/notifycation';
import 'react-toastify/dist/ReactToastify.css';

import { Formik } from 'formik';
import * as yup from 'yup';
import {
  LoginFormStyled,
  InputLabel,
  VerifyText,
  Button,
  CodeInput,
  VerifyTextWrapper,
  Wrapper,
} from './VerifyForm.styled';

const FormSchema = yup.object().shape({
  verificationCode: yup.number().required(),
});

export default function VerifyForm() {
  const { userEmail } = useContext(AuthContext);
  const [verifyResponse, setVerifyResponse] = useState(null);
  const navigate = useNavigate();

  const handleSubmitForm = async (values, { resetForm }) => {
    try {
      const response = await verify(values);
      if (response.status === 200) {
        setVerifyResponse(response);
        setTimeout(() => {
          navigate('/login', { replace: true });
        }, 3000);
      }
    } catch (error) {
      notify('error', error.response.data.message);
    }
  };

  const handleResend = async () => {
    try {
      const response = await reVerify({ email: userEmail });
      if (response.status === 200) {
        notify('info', response.data.message);
      }
    } catch (error) {
      notify('error', error.response.data.message);
    }
  };

  return (
    <Wrapper>
      {verifyResponse && verifyResponse.status === 200 && (
        <VerifyTextWrapper>
          <VerifyText>{verifyResponse.data.message}</VerifyText>
        </VerifyTextWrapper>
      )}
      {!verifyResponse && (
        <Formik
          initialValues={{
            verificationCode: '',
          }}
          onSubmit={handleSubmitForm}
          validationSchema={FormSchema}
        >
          {props => (
            <LoginFormStyled>
              <InputLabel>
                Your verification code
                <CodeInput type="number" name="verificationCode" />
              </InputLabel>

              <Button
                type="submit"
                disabled={props.values.verificationCode !== '' ? false : true}
              >
                Verify code
              </Button>
              <VerifyText>Didn't receive a verification code?</VerifyText>
              <Button type="button" onClick={handleResend}>
                Resend code
              </Button>
            </LoginFormStyled>
          )}
        </Formik>
      )}
    </Wrapper>
  );
}
