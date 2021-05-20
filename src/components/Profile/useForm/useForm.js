import React,{useState,useEffect} from 'react';
import Cookies from 'js-cookie'
import {AuthContext} from './../../../App'
import getUserData from './../../../utilities/userData/userData'
import swal from 'sweetalert'

const useForm = (callback,validate) => {
    const [values,setValues] = useState({
        username: '',
        email: '',
        phoneNo: '',
        address: '',
        pincode: ''
    })
    const [product,setProduct] = useState(null)
    // const {state,dispatch} = React.useContext(AuthContext)
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
      if(values.email === ''){

        fetch(`${process.env.REACT_APP_API_URL}/profile`,{
          method: 'POST',
          headers:{
            'content-type' : 'application/json',
            token: JSON.parse(Cookies.get('token')).token
          }
        }).then(res => res.json())
        .then(data => {

          if(data.error){
            swal(data.error)
          }

          console.log("profile Data",data)

          const {user} = data
          const {products} = data
          setProduct(products)
          console.log("user",user)
          
          setValues({
            username: user.name,
            email: user.email,
            phoneNo: user.phoneNo,
            address: user.address,
            pincode: user.pincode
          })

        })
      }
    },[])

    const handleSubmit = e => {
        e.preventDefault();
        console.log("err")
        setError(validate(values))
        setIsSubmitting(true);
    }

    useEffect(() => {
      console.log("length",Object.keys(errors).length)
        if(Object.keys(errors).length === 0 && isSubmitting){
          const token = JSON.parse(Cookies.get('token')).token
          fetch(`${process.env.REACT_APP_API_URL}/profile/update`,{
            method: 'POST',
            headers:{
              'content-type':'application/json',
              token
            },
            body:JSON.stringify({
              name: values.username,
              phoneNo: values.phoneNo,
              address: values.address,
              pincode: values.pincode
            })
          }).then(res => res.json())
          .then(data => {
            if(data.error){
              swal(data.error)
            }else{
              swal("Profile was uploaded successfully")
            }
          })
        }
    },[errors])

    return {handleChange,values,handleSubmit,errors,product};
}

export default useForm;