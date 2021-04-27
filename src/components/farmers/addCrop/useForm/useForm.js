import React,{useState,useEffect} from 'react';
import Cookies from 'js-cookie'
import {AuthContext} from './../../../../App';
import swal from 'sweetalert'
import axios from 'axios'

const useForm = (callback,validate) => {
    const [values,setValues] = useState({
        cropName: '',
        weight: '',
        price: '',
        description: '',
        address: '',
        images: null
    })

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
          
          fetch('https://major-project-back-end.herokuapp.com/products/farmer/addCrop',{
            method: 'post',
            body: formData
          }).then(ress => ress.json())
          .then((response) => {
                alert("The file is successfully uploaded");
                console.log(response)
          }).catch((error) => {
            console.log("error",error)
          });

        }
    },[errors])

    return {handleChange,values,handleSubmit,errors};
}

export default useForm;