import React, {useState} from 'react';
import useForm from './useForm/useForm'
import validate from './useForm/validateInfo'
import {Link} from 'react-router-dom';
import classes from './profile.module.css';
import FarmerProducts from './farmerProducts/farmerProducts'

const Profile = ({submitForm}) => {
        const {handleChange,values,handleSubmit,errors,product} = useForm(submitForm,validate);
        return (
        <>
            <div className={`${classes["register-container"]} ${classes.check}`} >
                <h1 style={{textAlign:"center"}}>PROFILE</h1><br />
                <div className={classes["profile"]}>
                    <form onSubmit={handleSubmit} className={classes["form"]}>
                        <div>
                            <label htmlFor="username"  >
                                <b style={{fontSize:'25px'}}>Username</b>
                            </label>
                            <input
                                id="username"
                                type="text"
                                name="username"
                                className={classes["formInput"]}
                                placeholder="Enter your username"
                                value={values.username}
                                onChange={handleChange}
                            />
                            {errors.username && <p className={classes["warning"]}>{errors.username}</p>}
                        </div>
                        <div>
                            <label htmlFor="email" >
                                <b style={{fontSize:'25px'}}>Email</b>
                            </label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                className={classes["formInput"]}
                                placeholder="Enter your email"
                                value={values.email}
                                onChange={handleChange}
                                disabled
                            />
                            {errors.email && <p className={classes["warning"]}>{errors.email}</p>}
                        </div>
                        <div>
                            <label htmlFor="phoneNo" >
                                <b style={{fontSize:'25px'}}>Phone No</b>
                            </label>
                            <input
                                id="phoneNo"
                                type="number"
                                name="phoneNo"
                                className={classes["formInput"]}
                                placeholder="Enter your Phone Number"
                                value={values.phoneNo}
                                onChange={handleChange}
                            />
                            {errors.phoneNo && <p className={classes["warning"]}>{errors.phoneNo}</p>}
                        </div>
                        <div>
                            <label htmlFor="address" >
                                <b style={{fontSize:'25px'}}>Address</b>
                            </label>
                            <input
                                id="address"
                                type="text"
                                name="address"
                                className={classes["formInput"]}
                                placeholder="Enter your Address"
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
                                type="text"
                                name="pincode"
                                className={classes["formInput"]}
                                placeholder="Enter your pincode"
                                value={values.pincode}
                                onChange={handleChange}
                            />
                            {errors.pincode && <p className={classes["warning"]}>{errors.pincode}</p>}
                        </div>
                        
                        <div></div>
                    </form>
                    <button type="submit" className={classes["registerbtn"]} style={{textAlign:"center",alignItems:'center',justifyContent:'center',marginLeft:'auto',marginRight:'auto'}}>
                            Update
                    </button>
                </div>
            </div>
            <FarmerProducts product={product}/>
            </>
        );
}

export default Profile;