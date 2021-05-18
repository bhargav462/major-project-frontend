import React, {useState} from 'react';
import useForm from './useForm/useForm'
import validate from './useForm/validateInfo'
import {Link} from 'react-router-dom';
import classes from './addCrop.module.css';

const AddCrop = () => {
        const submitForm = () => {
            console.log("Submit Form")
        }
        const {handleChange,values,handleSubmit,errors} = useForm(submitForm,validate);
        return (
            <div className={`${classes["register-container"]} ${classes.check}`} >
                <form onSubmit={handleSubmit} className={classes["form"]}>
                    <h1 style={{textAlign:"center"}}>ADD CROP</h1>
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
                        />
                        {errors.pincode && <p className={classes["warning"]}>{errors.pincode}</p>}
                    </div>
                    <div >
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
                    </div>

                    <button type="submit" className={classes["registerbtn"]}>
                        Submit
                    </button>

                </form>
            </div>
        );
}

export default AddCrop;