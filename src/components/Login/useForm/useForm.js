import React,{useState,useEffect} from 'react';
import Cookies from 'js-cookie'
import {AuthContext} from './../../../App'
import swal from 'sweetalert';

const useForm = (callback,userType,validate) => {
    const [values,setValues] = useState({
        username: '',
        email: '',
        password: '',
        password2: ''
    })
    const {dispatch} = React.useContext(AuthContext);

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
        if(Object.keys(errors).length === 0 && isSubmitting){
          setDisabled(true)
            fetch(`${process.env.REACT_APP_API_URL}/auth/login`,{
                method: 'POST',
                headers : {
                  'Content-Type' : 'Application/json'
                },
                body : JSON.stringify({
                  email : values.email,
                  password : values.password,
                  type: userType
                })
              }).then(res => {
                console.log("res",res);
                if(res.ok){
                  return res.json();
                }else if(res.status === 400){
                  throw  {error:{
                        password: 'Invalid credentials'
                  }}
                }else{
                  throw "";
                }
                
              })
              .then(data => {
                console.log("data entry",data);
                    Cookies.set('token', data, { expires: 1 })
                    dispatch({
                        type: "LOGIN",
                        payload: {
                          isAuthenticated: true,
                          user: {
                            email: values.email,
                            type: userType
                          }
                        }
                      })
                    callback();
              }).catch(e => {
                if(e.error){
                  setError({password: e.error.password})
                }else{
                  swal("Unexpected Error");
                }
                console.log("login error",e);
              }).finally(() => {
                setDisabled(false)
              })
        }
    },[errors])

    return {handleChange,values,handleSubmit,errors,disabled};
}

export default useForm;