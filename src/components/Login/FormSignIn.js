import React from 'react';
import useForm from './useForm/useForm'
import validate from './useForm/validateInfo'
import classes from './Login.module.css';
import {Link} from 'react-router-dom';

const SignIn = ({submitForm,userType}) => {
        const {handleChange,values,handleSubmit,errors} = useForm(submitForm,userType,validate);
        return (
            <div className={classes["login-container"]} >
                <form onSubmit={handleSubmit} className={classes["form"]}>
                    <h1 style={{textAlign:"center"}}>LOGIN</h1>
                    <hr className={classes["hr"]} />
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
                    <button type="submit" className={classes["registerbtn"]}>
                        Sign In
                    </button>
                    <span type="submit" >
                        <p style={{textAlign:"center"}}>Don't have an account? <Link to="/register">Register</Link></p> 
                    </span>
                </form>
            </div>
        );
}

export default SignIn;