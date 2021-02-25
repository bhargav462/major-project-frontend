import React from 'react';
import FormSignIn from './FormSignIn';
import GoogleLogin from 'react-google-login';
import Cookies from 'js-cookie'
import {useHistory} from 'react-router-dom'

const Register = () => {
  let history = useHistory();

  function submitForm() {
    history.push('/');
  }

  const responseSuccessGoogle = (response) => {
    console.log("response",response)
    const {profileObj} = response;
    fetch(`${process.env.REACT_APP_API_URL}/google/login`,{
      method: 'POST',
      headers : {
        'Content-Type' : 'Application/json'
      },
      body : JSON.stringify({
        name : profileObj.name,
        googleId : profileObj.googleId,
        email : profileObj.email,
        image : profileObj.imageUrl
      })
    }).then(res => res.json())
    .then(data => {
      console.log("data",data);
      Cookies.set('token', data, { expires: 1 })
      history.push('/');
    })
  }

  const responseErrorGoogle = (error) => {
     console.log("Error",error)
  }

  console.log("env",process.env)

  return (
    <>
            {
                <>
                  <div style={{textAlign:'center',marginTop:'15px'}}>
                    <GoogleLogin
                      clientId={process.env.REACT_APP_GOOGLE_OAUTH}
                      buttonText="Login with google"
                      onSuccess={responseSuccessGoogle}
                      onFailure={responseErrorGoogle}
                      cookiePolicy={'single_host_origin'}
                    />
                  </div>
                  <FormSignIn submitForm={submitForm} />
                </>
            }
    </>
  );
};

export default Register;