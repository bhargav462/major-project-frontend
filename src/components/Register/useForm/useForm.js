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
    
    const [disabled,setDisabled] = useState(false)
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
          setDisabled(true)
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
                  return res.json();
              })
              .then(data => {
                  console.log("data",data);
                  if(data.error){
                    return swal(data.error)
                  }
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
                swal(e)
              }).finally(() => {
                setDisabled(false)
              })
        }
    },[errors])

    return {handleChange,values,handleSubmit,errors,disabled};
}

export default useForm;