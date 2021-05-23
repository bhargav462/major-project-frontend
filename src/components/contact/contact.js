import React from 'react';
import classes from './contact.module.css'

const Contact = () => {
    return(<>
       <div className={`${classes["register-container"]} ${classes.check}`} >
                <form className={classes["form"]}>
                    <h1 style={{textAlign:"center"}}>Contact Us</h1>
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
                        />
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
                        />
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
                        />
                    </div>
                    <div>
                        <label htmlFor="password" >
                             <b style={{fontSize:'25px'}}>Password</b>
                        </label>
                        <textarea rows="5"
                            id="password"
                            type="password"
                            name="password"
                            className={classes["formInput"]}
                            placeholder="Enter your Message"
                        />
                    </div>
                    <button type="submit" className={classes["registerbtn"]}>
                        Submit
                    </button>
                </form>
            </div>

    </>)
}

export default Contact