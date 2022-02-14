import React,{useState,useEffect} from 'react';
import Cookies from 'js-cookie'
import {AuthContext} from './../../../../App';
import swal from 'sweetalert'
import axios from 'axios'

const useForm = (callback,validate,EnableButton,DisableButton) => {
    const [values,setValues] = useState({
        cropName: '',
        weight: '',
        price: '',
        description: '',
        address: '',
        pincode: ''
    })

    const [disabled,setDisabled] = useState(false)

    const {dispatch} = React.useContext(AuthContext)
    
    const [errors,setError] = useState({});
    const [isSubmitting,setIsSubmitting] = useState(false);

    const handleChange = (e,data,propertyName) => {
      const {name} = e.target
        if(data || propertyName){
          setValues({
            ...values,
            [propertyName] : data ? data : ""
          })
        }else{
          const {value} = e.target;
          setValues({
            ...values,
            [name] : value
          })
        }
        // console.log(value)
    }

    const handleSubmit = e => {

        console.log(values);

        e.preventDefault();

        setError(validate(values))
        setIsSubmitting(true);

    }

    useEffect(() => {

      fetch(`${process.env.REACT_APP_API_URL}/profile`,{
        method: 'GET',
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
        console.log("user",user)
        
        setValues({
          address: user.address,
          pincode: user.pincode
        })

      })
    },[])

    useEffect(() => {
        if(Object.keys(errors).length === 0 && isSubmitting){

          setDisabled(true)     

          console.log('env',process.env)

          let formData = new FormData();

          for(let prop in values){
              console.log("prop",prop)
              // if(prop === "images"){
              //   for(let imageProp in values[prop])
              //   {
              //     if(imageProp !== "length")
              //     formData.append(prop,values[prop][imageProp])
              //   }
              // }else{
                formData.append(prop,values[prop])
              // }
          }

          for (var pair of formData.entries()) {
            console.log(pair[0]+ ', ' + pair[1]); 
          }
          console.log("Cookies",Cookies.get('token'))
          const token = JSON.parse(Cookies.get('token'))
          fetch(`${process.env.REACT_APP_API_URL}/products/farmer/addCrop`,{
            method: 'post',
            body: formData,
            headers:{
              "token":token.token
            }
          }).then(ress => {
            console.log("ress",ress)
            if(ress.status === 401)
            {
              swal("Please Login")
            }
            return ress.json()
          })
          .then((response) => {
                if(response.error){
                  return swal(response.error)
                }
                swal(`Your product id is ${response.id}`)
                setValues({
                  ...values,
                  cropName: '',
                  weight: '',
                  price: '',
                  description: ''
                })
                setIsSubmitting(false)
                console.log(response)
          }).catch((error) => {
            console.log("error",error)
          }).finally(() => {
            setDisabled(false)
          });

        }
    },[errors])

    return {handleChange,values,handleSubmit,errors,disabled};
}

export default useForm;