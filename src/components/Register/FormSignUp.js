import React from 'react';
import useForm from './useForm/useForm'
import validate from './useForm/validateInfo'
import './Register.css';
import {Link} from 'react-router-dom';

const SignUp = ({submitForm}) => {
        const {handleChange,values,handleSubmit,errors} = useForm(submitForm,validate);
        return (
            <div className="register-container" >
                <form onSubmit={handleSubmit} className="form">
                    <h1 style={{textAlign:"center"}}>REGISTER</h1>
                    <hr className="hr"/>
                    <div>
                        <label htmlFor="username" >
                             <b style={{fontSize:'25px'}}>Username</b>
                        </label>
                        <input
                            id="username"
                            type="text"
                            name="username"
                            className="formInput"
                            placeholder="Enter your username"
                            value={values.username}
                            onChange={handleChange}
                        />
                        {errors.username && <p className="warning">{errors.username}</p>}
                    </div>
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
                    <div >
                        <label htmlFor="password2" >
                             <b style={{fontSize:'25px'}}>Confirm Password</b>
                        </label>
                        <input
                            id="password2"
                            type="password"
                            name="password2"
                            className="formInput"
                            placeholder="Confirm your password"
                            value={values.password2}
                            onChange={handleChange}
                        />
                        {errors.password2 && <p className="warning">{errors.password2}</p>}
                    </div>
                    <button type="submit" className="registerbtn">
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