import React, {useState} from 'react';
import useForm from './useForm/useForm'
import validate from './useForm/validateInfo'
import {Link} from 'react-router-dom';
import classes from './profile.module.css';

const Profile = ({submitForm}) => {
        const {handleChange,values,handleSubmit,errors} = useForm(submitForm,validate);
        return (
            <div className={`${classes["register-container"]} ${classes.check}`} >
                <h1 style={{textAlign:"center"}}>PROFILE</h1><br />
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
                            disabled
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
                        <label htmlFor="HouseNo" >
                             <b style={{fontSize:'25px'}}>House No</b>
                        </label>
                        <input
                            id="HouseNo"
                            type="text"
                            name="HouseNo"
                            className={classes["formInput"]}
                            placeholder="Enter your House No"
                            value={values.houseNo}
                            onChange={handleChange}
                        />
                        {errors.houseNo && <p className={classes["warning"]}>{errors.password}</p>}
                    </div>
                    <div >
                        <label htmlFor="landmark" >
                             <b style={{fontSize:'25px'}}>Landmark</b>
                        </label>
                        <input
                            id="landmark"
                            type="text"
                            name="landmark"
                            className={classes["formInput"]}
                            placeholder="Enter your landmark"
                            value={values.landmark}
                            onChange={handleChange}
                        />
                        {errors.landmark && <p className={classes["warning"]}>{errors.password2}</p>}
                    </div>
                    <div >
                        <label htmlFor="district" >
                             <b style={{fontSize:'25px'}}>District</b>
                        </label>
                        <input
                            id="district"
                            type="text"
                            name="district"
                            className={classes["formInput"]}
                            placeholder="Enter your District"
                            value={values.district}
                            onChange={handleChange}
                        />
                        {errors.district && <p className={classes["warning"]}>{errors.password2}</p>}
                    </div>
                    <div >
                        <label htmlFor="State" >
                             <b style={{fontSize:'25px'}}>State</b>
                        </label>
                        <input
                            id="State"
                            type="text"
                            name="State"
                            className={classes["formInput"]}
                            placeholder="Enter your State"
                            value={values.state}
                            onChange={handleChange}
                        />
                        {errors.state && <p className={classes["warning"]}>{errors.password2}</p>}
                    </div>
                    <div></div>
                    <button type="submit" className={classes["registerbtn"]} style={{textAlign:"center",alignItems:'center',justifyContent:'center',marginLeft:'auto',marginRight:'auto'}}>
                        Update
                    </button>
                </form>
            </div>
        );
}

export default Profile;