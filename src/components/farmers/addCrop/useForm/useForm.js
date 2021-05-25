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
        pincode: '',
        images: null
    })

    const [disabled,setDisabled] = useState(false)

    const {dispatch} = React.useContext(AuthContext)
    
    const [errors,setError] = useState({});
    const [isSubmitting,setIsSubmitting] = useState(false);

    const handleChange = e => {
      const {name} = e.target
        if(name === "images")
        {
            console.log(e);
            console.log(e.target.files)
            console.log(e.target)
            const value = e.target.files
            setValues({
              ...values,
              [name] : value
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
        if(Object.keys(errors).length === 0 && isSubmitting){

          setDisabled(true)     

          console.log('env',process.env)

          let formData = new FormData();

          for(let prop in values){
              console.log("prop",prop)
              if(prop === "images"){
                for(let imageProp in values[prop])
                {
                  if(imageProp !== "length")
                  formData.append(prop,values[prop][imageProp])
                }
              }else{
                formData.append(prop,values[prop])
              }
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
                  cropName: '',
                  weight: '',
                  price: '',
                  description: '',
                  address: '',
                  pincode: '',
                  images: null 
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