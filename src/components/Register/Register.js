import React from 'react';
import FormSignup from './FormSignUp';
import GoogleLogin from 'react-google-login';
import Cookies from 'js-cookie'
import {useHistory} from 'react-router-dom'
import {AuthContext} from './../../App'

const Register = () => {
  let history = useHistory();
  const {dispatch} = React.useContext(AuthContext);
  function submitForm() {
    history.push('/profile');
  }

  const responseSuccessGoogle = (response) => {
    console.log("response",response)
    const {profileObj} = response;
    fetch(`${process.env.REACT_APP_API_URL}/google/register`,{
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
      dispatch({
        type: "LOGIN",
        payload: {
          isAuthenticated: true,
          user: {
            name: profileObj.name,
            email: profileObj.email
          }
        }
      })
      history.push('/profile')
    })
  }

  const responseErrorGoogle = (error) => {
     console.log("Error",error)
  }

  return (
    <>      
            {
              <>
                <div style={{textAlign:'center',marginTop:'15px'}}>
                <GoogleLogin
                  clientId={process.env.REACT_APP_GOOGLE_OAUTH}
                  buttonText="Register with google"
                  onSuccess={responseSuccessGoogle}
                  onFailure={responseErrorGoogle}
                  cookiePolicy={'single_host_origin'}
                 />
                </div>
                <FormSignup submitForm={submitForm} />
              </>
            }
    </>
  );
};

export default Register;