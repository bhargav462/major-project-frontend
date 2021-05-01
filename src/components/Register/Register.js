import React , {useState} from 'react';
import FormSignup from './FormSignUp';
import GoogleLogin from 'react-google-login';
import Cookies from 'js-cookie'
import {useHistory} from 'react-router-dom'
import {AuthContext} from './../../App'
import classes from './register.module.css'

const Register = () => {
  let history = useHistory();
  const {dispatch} = React.useContext(AuthContext);
  function submitForm() {
    history.push('/profile');
  }

  const [userType,setUserType] = useState("select")

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

  const userTypeHandler = (e) => {
    console.log("e",e);
    console.log("e",e.target.value)
    setUserType(e.target.value)
  }

  return (
    <>      
            { userType === "select" ? 
                <div className={classes["userType-container"]}>
                  <select className={classes["userType"]} onChange={userTypeHandler}>
                    <option value="select">Select</option>
                    <option value="farmer">Farmer</option>
                    <option value="buyer">Buyer</option>
                  </select>
                </div> :
              <>
                <div className={classes["userType-container"]}>
                  <select className={classes["userType"]} onChange={userTypeHandler}>
                    <option value="select">Select</option>
                    <option value="farmer">Farmer</option>
                    <option value="buyer">Buyer</option>
                  </select>
                </div>
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