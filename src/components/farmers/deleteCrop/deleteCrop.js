import React, {useState,useEffect} from 'react';
import useForm from './useForm/useForm'
import validate from './useForm/validateInfo'
import {Link} from 'react-router-dom';
import classes from './deleteCrop.module.css';
import Cookies from 'js-cookie'
import swal from 'sweetalert'

const DeleteCrop = ({match:{params}}) => {
    const [cropId,setCropId] = useState("")
    const [paramCropId,setParamCropId] = useState("")

    useEffect(async() => {
        console.log("Effect using",params)
        if(params.id && !cropId){
            console.log("cropId")
            setCropId(params.id)
            setParamCropId(params.id)
            console.log("cr",cropId)
        }
    });

    useEffect(() => {
        if(cropId !== ""){
            searchHandler()
        }
    },[paramCropId])

    const submitForm = () => {
        console.log("Submit Form")
    }
    const [search,setSearch] = useState(true);

    const setTheSetSearch = () => {
        setSearch(true)
    }

    const {handleChange,values,handleSubmit,getFormData,errors} = useForm(submitForm,validate,setTheSetSearch);

    const getInputValue = (e) => {
        //   console.log("e",e.target.value)
          setCropId(e.target.value)
    }

    const searchHandler = () => {
        setSearch(true) 
        console.log("searchHolder",cropId)
        fetch(`${process.env.REACT_APP_API_URL}/products/getCrop/id`,{
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'token': JSON.parse(Cookies.get('token')).token
            },
            body: JSON.stringify({
                id: cropId
            })
        }).then(res => {
            console.log("res",res)
            return res.json()
        })
        .then(data => {
            console.log("data",data);
            if(data.error){
                return swal(data.error)
            }
            getFormData(data,cropId)
            setSearch(false)
            setCropId("")
        })
        
    }

        return ( <>
        <div className={classes["search-container"]} >
                    <input className={classes["search-input"]} onChange={getInputValue} value={cropId}/>
                    <button className={classes["search-btn"]} onClick={searchHandler}>Search</button>
                </div>
                {
                    !search && <>
                    <div className={`${classes["register-container"]} ${classes.check}`} >
                        <form onSubmit={handleSubmit} className={classes["form"]}>
                            <h1 style={{textAlign:"center"}}>Delete Crop</h1>
                            <hr className={classes["hr"]}/>
                            <div>
                                <label htmlFor="cropName"  > 
                                     <b style={{fontSize:'25px'}}>Crop Name</b>
                                </label>
                                <input
                                    id="cropName"
                                    type="text"
                                    name="cropName"
                                    className={classes["formInput"]}
                                    placeholder="Enter the Crop Name"
                                    value={values.cropName}
                                    onChange={handleChange}
                                    readOnly
                                />
                                {errors.cropName && <p className={classes["warning"]}>{errors.cropName}</p>}
                            </div>
                            <div>
                                <label htmlFor="weight" >
                                     <b style={{fontSize:'25px'}}>Crop Weight (Kgs)</b>
                                </label>
                                <input
                                    id="weight"
                                    type="number"
                                    name="weight"
                                    className={classes["formInput"]}
                                    placeholder="Enter the weight of the crop"
                                    value={values.weight}
                                    onChange={handleChange}
                                    readOnly
                                />
                                {errors.weight && <p className={classes["warning"]}>{errors.weight}</p>}
                            </div>
                            <div>
                                <label htmlFor="price" >
                                     <b style={{fontSize:'25px'}}>Price</b>
                                </label>
                                <input
                                    id="price"
                                    type="number"
                                    name="price"
                                    className={classes["formInput"]}
                                    placeholder="Enter your price"
                                    value={values.price}
                                    onChange={handleChange}
                                    readOnly
                                />
                                {errors.price && <p className={classes["warning"]}>{errors.price}</p>}
                            </div>
                            <div >
                                <label htmlFor="description" >
                                     <b style={{fontSize:'25px'}}>Product Description</b>
                                </label>
                                <input
                                    id="description"
                                    type="text"
                                    name="description"
                                    className={classes["formInput"]}
                                    placeholder="Enter the Product Description"
                                    value={values.description}
                                    onChange={handleChange}
                                    readOnly
                                />
                                {errors.description && <p className={classes["warning"]}>{errors.description}</p>}
                            </div>
                            <div >
                                <label htmlFor="address" >
                                     <b style={{fontSize:'25px'}}>Address</b>
                                </label>
                                <input
                                    id="address"
                                    type="text"
                                    name="address"
                                    className={classes["formInput"]}
                                    placeholder="Address"
                                    value={values.address}
                                    onChange={handleChange}
                                    readOnly
                                />
                                {errors.address && <p className={classes["warning"]}>{errors.address}</p>}
                            </div>
                            <div >
                                <label htmlFor="pincode" >
                                    <b style={{fontSize:'25px'}}>Pincode</b>
                                </label>
                                <input
                                    id="pincode"
                                    type="number"
                                    name="pincode"
                                    className={classes["formInput"]}
                                    placeholder="Pincode"
                                    value={values.pincode}
                                    onChange={handleChange}
                                    readOnly
                                />
                                {errors.pincode && <p className={classes["warning"]}>{errors.pincode}</p>}
                            </div>

                            <div >
                                <label htmlFor="imageView" >
                                     <b style={{fontSize:'25px'}}>Images</b>
                                </label>
                                <div className={classes.imageContainer}>
                                    {console.log("values",values)}
                                    {
                                    values.images && values.images.map((image,index) => {
                                        return <img className={classes.images} key={index} src={`data:image/png;base64, ${image.buffer}`} />
                                    })
                                    }
                                </div>  
                            </div>
        
                            {/* <div >
                                <label htmlFor="images" >
                                     <b style={{fontSize:'25px'}}>Images</b>
                                </label>
                                <input
                                    id="images"
                                    type="file"
                                    name="images"
                                    accept=".png, .jpg"
                                    className={classes["formInput"]}
                                    placeholder="Images"
                                    onChange={handleChange}
                                    multiple
                                />
                                {errors.images && <p className={classes["warning"]}>{errors.images}</p>}
                            </div> */}
        
                            <button type="submit" className={classes["registerbtn"]}>
                                Delete
                            </button>
        
                        </form>
                    </div></>
                }
            </>
        );
}

export default DeleteCrop;