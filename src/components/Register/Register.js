import React , {useState} from 'react';
import FormSignup from './FormSignUp';
import GoogleLogin from 'react-google-login';
import Cookies from 'js-cookie'
import {useHistory} from 'react-router-dom'
import {AuthContext} from './../../App'
import classes from './register.module.css'
import userTypes from './../../utilities/enums/userTypes'
import swal from 'sweetalert';

const Register = () => {
  let history = useHistory();
  const {dispatch} = React.useContext(AuthContext);
  function submitForm() {
    history.push('/profile');
  }

  const [userType,setUserType] = useState(userTypes.SELECT)

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
        image : profileObj.imageUrl,
        type : userType
      })
    }).then(res => res.json())
    .then(data => {
      if(data.error){
        return swal(data.error)
      }
      console.log("data",data);
      Cookies.set('token', data, { expires: 1 })
      dispatch({
        type: "LOGIN",
        payload: {
          isAuthenticated: true,
          user: {
            name: profileObj.name,
            email: profileObj.email,
            type: userType
          }
        }
      })
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

  return (
    <>      
            { userType === userTypes.SELECT ? 
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
                <div style={{textAlign:'center',marginTop:'15px'}}>
                <GoogleLogin
                  clientId={process.env.REACT_APP_GOOGLE_OAUTH}
                  buttonText="Register with google"
                  onSuccess={responseSuccessGoogle}
                  onFailure={responseErrorGoogle}
                  cookiePolicy={'single_host_origin'}
                 />
                </div>
                <FormSignup submitForm={submitForm} userType={userType}/>
              </div>
            }
    </>
  );
};

export default Register;