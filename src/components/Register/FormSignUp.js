import React, {useState} from 'react';
import useForm from './useForm/useForm'
import validate from './useForm/validateInfo'
import {Link} from 'react-router-dom';
import classes from './register.module.css';

const SignUp = ({submitForm,userType}) => {
       console.log("form",userType)
        const {handleChange,values,handleSubmit,errors} = useForm(submitForm,userType,validate);
        return (
            <div className={`${classes["register-container"]} ${classes.check}`} >
                <form onSubmit={handleSubmit} className={classes["form"]}>
                    <h1 style={{textAlign:"center"}}>REGISTER</h1>
                    <hr className={classes["hr"]}/>
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
                        <label htmlFor="password" >
                             <b style={{fontSize:'25px'}}>Password</b>
                        </label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            className={classes["formInput"]}
                            placeholder="Enter your password"
                            value={values.password}
                            onChange={handleChange}
                        />
                        {errors.password && <p className={classes["warning"]}>{errors.password}</p>}
                    </div>
                    <div >
                        <label htmlFor="password2" >
                             <b style={{fontSize:'25px'}}>Confirm Password</b>
                        </label>
                        <input
                            id="password2"
                            type="password"
                            name="password2"
                            className={classes["formInput"]}
                            placeholder="Confirm your password"
                            value={values.password2}
                            onChange={handleChange}
                        />
                        {errors.password2 && <p className={classes["warning"]}>{errors.password2}</p>}
                    </div>
                    <button type="submit" className={classes["registerbtn"]}>
                        Sign Up
                    </button>
                    <span type="submit" >
                        <p style={{textAlign:"center"}}>Already have an account? <Link to="/login">LOGIN</Link></p> 
                    </span>
                </form>
            </div>
        );
}

export default SignUp;