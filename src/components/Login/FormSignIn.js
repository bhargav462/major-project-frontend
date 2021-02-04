import React from 'react';
import useForm from './useForm/useForm'
import validate from './useForm/validateInfo'
import './Login.css';
import {Link} from 'react-router-dom';

const SignIn = ({submitForm}) => {
        const {handleChange,values,handleSubmit,errors} = useForm(submitForm,validate);
        return (
            <div className="login-container" >
                <form onSubmit={handleSubmit} className="form">
                    <h1 style={{textAlign:"center"}}>LOGIN</h1>
                    <hr className="hr" />
                    <div>
                        <label htmlFor="email" >
                             <b style={{fontSize:'25px'}}>Email</b>
                        </label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            className="formInput"
                            placeholder="Enter your email"
                            value={values.email}
                            onChange={handleChange}
                        />
                        {errors.email && <p className="warning">{errors.email}</p>}
                    </div>
                    <div>
                        <label htmlFor="password" >
                             <b style={{fontSize:'25px'}}>Password</b>
                        </label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            className="formInput"
                            placeholder="Enter your password"
                            value={values.password}
                            onChange={handleChange}
                        />
                        {errors.password && <p className="warning">{errors.password}</p>}
                    </div>
                    <button type="submit" className="registerbtn">
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