import React, {useState} from 'react';
import FormSignIn from './FormSignIn';
import GoogleLogin from 'react-google-login';
import Cookies from 'js-cookie'
import {useHistory} from 'react-router-dom'
import {AuthContext} from './../../App'
import classes from './Login.module.css';
import userTypes from '../../utilities/enums/userTypes';
import swal from 'sweetalert'

const Login = () => {
  const {state,dispatch} = React.useContext(AuthContext);
  let history = useHistory();

  const [userType,setUserType] = useState(userTypes.SELECT)

  if(state.isAuthenticated){
    history.push('/')
  }

  function submitForm() {
    history.push('/profile')
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
        image : profileObj.imageUrl,
        type: userType
      })
    }).then(res => res.json())
    .then(data => {
      console.log("data",data);
      if(data.error){
        return swal(data.error)
      }
      dispatch({
        type: "LOGIN",
        payload: {
          isAuthenticated: true,  
          user: {
            "name": profileObj.name,
            "email": profileObj.email,
            "type": userType
          }
        }
      })
      console.log("state",state);
      Cookies.set('token', data, { expires: 1 })
      history.push('/profile')
    }).catch(e => {
      swal("Please check your internet connection")
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

  console.log("env",process.env)

  return (
    <>
            {
                userType === userTypes.SELECT ? 
                <div className={classes["container"]}>
                <div className={classes["userType-container"]}>
                  <select className={classes["userType"]} onChange={userTypeHandler} value={userType}>
                    <option value={userTypes.SELECT}>Select</option>
                    <option value={userTypes.FARMER}>Farmer</option>
                    <option value={userTypes.BUYER}>Buyer</option>
                  </select>
                </div></div> :
                <div className={classes["container"]}>
                  <div className={classes["userType-container"]}>
                    <select className={classes["userType"]} onChange={userTypeHandler} value={userType}>
                      <option value={userTypes.SELECT}>Select</option>
                      <option value={userTypes.FARMER}>Farmer</option>
                      <option value={userTypes.BUYER}>Buyer</option>
                    </select>
                  </div>
                  <div className={classes["GoogleLogin"]} >
                    <GoogleLogin
                      clientId={process.env.REACT_APP_GOOGLE_OAUTH}
                      buttonText="Login with google"
                      onSuccess={responseSuccessGoogle}
                      onFailure={responseErrorGoogle}
                      cookiePolicy={'single_host_origin'}
                    />
                  </div>
                  <FormSignIn submitForm={submitForm} userType={userType}/>
                </div>
            }
    </>
  );
};

export default Login;