import React,{useState,useEffect} from 'react';
import Cookies from 'js-cookie'
import {AuthContext} from './../../../App'
import getUserData from './../../../utilities/userData/userData'

const useForm = (callback,validate) => {
    const [values,setValues] = useState({
        username: '',
        email: '',
        phoneNo: '',
        houseNo: '',
        landmark: '',
        district: '',
        state: ''
    })
    const {state,dispatch} = React.useContext(AuthContext)
    const [errors,setError] = useState({});
    const [isSubmitting,setIsSubmitting] = useState(false);

    const handleChange = e => {
        const {name,value} = e.target;
        setValues({
            ...values,
            [name] : value
        })
    }

    useEffect(() => {
      let user = getUserData();
      console.log("user",user);
      user = JSON.parse(user);
      if(values.email === ''){
        setValues({
          username: user.name,
          email: user.email,
          phoneNo: user.phoneNo,
          houseNo: user.houseNo,
          landmark: user.landmark,
          district: user.district,
          state: user.state
        })
      }
    },[])

    const handleSubmit = e => {
        e.preventDefault();

        setError(validate(values))
        setIsSubmitting(true);
    }

    useEffect(() => {
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
                  password : values.password
                })
              }).then(async (res) => {
                if(res.ok){
                  return res.json();
                }
                console.log("res",res);
                if(res.status === 403){
                   await res.json().then(data => {
                     if(data.error === "email"){
                        setError({email: "Email already in use"})   
                        return 'error'                    
                     }else if(data.error === "phoneNo"){
                       setError({phoneNo: "Phone Number already in use"})
                       return 'error'
                     }
                     console.log("resData",data);
                   })
                }
                return 'error'
              })
              .then(data => {
                if(data !== 'error'){
                  console.log("data",data);
                  Cookies.set('token', data, { expires: 1 })
                  callback();
                }
              })
              
        }
    },[errors])

    return {handleChange,values,handleSubmit,errors};
}

export default useForm;