import { useContext } from 'react';
import { AuthContext } from '../../components/App/App';

import SignUpForm from 'components/SignUpForm';
import VerifyForm from 'components/VerifyForm';

export default function RegisterPage() {
  const { verify } = useContext(AuthContext);

  return (
    <>
      {!verify && <SignUpForm />}
      {verify && <VerifyForm />}
    </>
  );
}
