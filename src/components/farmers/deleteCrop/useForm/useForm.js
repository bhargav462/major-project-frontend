import React,{useState,useEffect} from 'react';
import Cookies from 'js-cookie'
import {AuthContext} from './../../../../App';
import swal from 'sweetalert'
import axios from 'axios'

const useForm = (callback,validate,setSearch) => {
  const [values,setValues] = useState({
      cropName: '',
      weight: '',
      price: '',
      description: '',
      address: '',
      pincode: '',
      images: null
  })

  let [cropId,setCropId] = useState("")

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

  const getFormData = (data,id,search) => {
    setValues({
      images: data.images,
      cropName: data.crop,
      weight: data.amount,
      price: data.price,
      description: data.description,
      address: data.address,
      pincode: data.pincode
    })
    setCropId(id)
    console.log("getFormId",cropId)   
  }

  useEffect(() => {
      if(Object.keys(errors).length === 0 && isSubmitting){
        console.log('env',cropId)

        fetch(`${process.env.REACT_APP_API_URL}/products/farmer/deleteCrop`,{
          method: 'POST',
          headers: {
              'content-type': 'application/json',
              'token': JSON.parse(Cookies.get('token')).token
          },
          body:JSON.stringify({
              id: cropId
          })
        }).then(res => {
              console.log("response",res)
              return res.json()
        })
        .then(data => {
            console.log("data",data);
            if(data.error){
              return swal(data.error)
            }
            swal("Data was Deleted successfully")

            setValues({
                cropName: '',
                weight: '',
                price: '',
                description: '',
                address: '',
                images: null
            })
            setSearch()

        })

      }
  },[errors])

  return {handleChange,values,handleSubmit,getFormData,errors};
}

export default useForm;