import React, { useState } from 'react';
import FormSignup from './FormSignUp';

const Register = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
            {!isSubmitted ? (
                <FormSignup submitForm={submitForm} />
            ) : (
                <p>Success</p>
            )}
    </>
  );
};

export default Register;