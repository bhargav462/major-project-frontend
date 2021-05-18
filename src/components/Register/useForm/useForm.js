import React,{useState,useEffect} from 'react';
import Cookies from 'js-cookie'
import {AuthContext} from './../../../App';
import swal from 'sweetalert'

const useForm = (callback,userType,validate) => {
  console.log("useForm",userType)
    const [values,setValues] = useState({
        username: '',
        email: '',
        phoneNo: '',
        password: '',
        password2: ''
    })

    const {dispatch} = React.useContext(AuthContext)
    
    const [errors,setError] = useState({});
    const [isSubmitting,setIsSubmitting] = useState(false);

    const handleChange = e => {
        const {name,value} = e.target;
        setValues({
            ...values,
            [name] : value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

        setError(validate(values))
        setIsSubmitting(true);
    }

    useEffect(() => {
      console.log("userType",userType)
        if(Object.keys(errors).length === 0 && isSubmitting){
          console.log('env',process.env)
            fetch(`${process.env.REACT_APP_API_URL}/auth/register`,{
                method: 'POST',
                headers : {
                  'Content-Type' : 'Application/json'
                },
                body : JSON.stringify({
                  name : values.username,
                  email : values.email,
                  phoneNo : values.phoneNo,
                  password : values.password,
                  type: userType
                })
              }).then(async (res) => {
                if(res.ok){
                  return res.json();
                }else{
                   throw res.json();
                }
              })
              .then(data => {
                  console.log("data",data);
                  Cookies.set('token', data, { expires: 1 })
                  dispatch({
                    type: "LOGIN",
                    payload: {
                      isAuthenticated: true,
                      user: {
                        name: values.username,
                        email: values.email,
                        phoneNo: values.phoneNo,
                        type: userType
                      }
                    }
                  })
                  callback();
              }).catch(e => {
                console.log("error",e);
                e.then(data => {
                  if(data.error === "email"){
                     setError({email: "Email already in use"})   
                  }else if(data.error === "phoneNo"){
                    setError({phoneNo: "Phone Number already in use"})
                  }else{
                    swal("Internal server error");
                  }
                  console.log("resData",data);
                })
              })
        }
    },[errors])

    return {handleChange,values,handleSubmit,errors};
}

export default useForm;