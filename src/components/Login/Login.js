import React, { useState } from 'react';
import FormSignIn from './FormSignIn';
import land5 from './../../assets/images/land5.jpg'

const Register = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
            {!isSubmitted ? (
                <FormSignIn submitForm={submitForm} />
            ) : (
                <p>Success</p>
            )}
    </>
  );
};

export default Register;