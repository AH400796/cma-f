import { useState } from 'react';

import SignUpForm from 'components/SignUpForm';
import VerifyForm from 'components/VerifyForm';

export default function RegisterPage() {
  const [email, setEmail] = useState();
  const [verify, setVerify] = useState(false);
  const handleRegister = data => {
    setVerify(true);
    setEmail(data);
  };
  return (
    <>
      {!verify && <SignUpForm onRegister={handleRegister} />}
      {verify && <VerifyForm verifEmail={email} />}
    </>
  );
}
