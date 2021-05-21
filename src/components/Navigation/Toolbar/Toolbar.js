import React, { useState, useEffect } from 'react';
import Aux from '../../../containers/hoc/Auxiliary/Auxiliary';
import Logo from '../../../assets/images/newLogo1.png'
import classes from './Toolbar.module.css';
import {Link} from 'react-router-dom';
import {AuthContext} from "../../../App";
import userTypes from './../../../utilities/enums/userTypes'

function Toolbar(props){
  const {state,dispatch} = React.useContext(AuthContext);

  const [hamburger,setHamburger] = useState(true);
  const [userType,setUserType] = useState(null);

   let [navLinksClass,setNavlinksClass] = useState(classes["NavLinks"]);
   let [linkClass,setLinkClass] = useState("");

   const hamburgerHandler = (e) => {
     console.log("hamburger click",e)
     setHamburger(!hamburger)
   }

   useEffect(() => {
     dispatch({})
     console.log("using effect",state)
   }, [hamburger])

   useEffect(async () => {
    //  await dispatch({})
     console.log("usingeffectives",state)
     console.log(userType)
     if(state.user && userType === null){
         console.log("state,user",JSON.parse(state.user).type)
         setUserType(JSON.parse(state.user).type)
     }
   })

        return(
            <Aux>
              {console.log("toolbar state",state)}
              {console.log("props",props)}
              {console.log(state.user)}
              {state.user ? console.log(state.user.type) : null}
              <div className={classes["header"]}>
                    <div className={classes["container"]}>
                        <input type="checkbox" name="" className={classes["check"]} />
                        
                        <div className={classes["logo-container"]}>
                            {/* <img src={Logo} className={classes["logoImage"]}></img> */}
                            <h3 className={classes["logo"]}>E-cofF</h3>
                            <h1 className={classes["tagline"]}>e-commerce for farmers</h1>
                        </div>

                        <div className={classes["nav-btn"]}>
                            <div className={classes["nav-links"]}>
                                <ul className={classes["ul"]} onClick={hamburgerHandler}>
                                    <li className={classes["nav-link"]}>
                                        <a href="/" className={classes['a']}>Home</a>
                                    </li>
                                    {(state.user ? (userType === userTypes.FARMER  ? (<li className={classes["nav-link"]} >
                                        <a className={classes["a"]} href="#">Farmer<i className="fas fa-caret-down"></i></a>
                                        <div className={classes["dropdown"]}>
                                            <ul className={classes["ul"]}>
                                                <li className={classes["dropdown-link"]}>
                                                    <a className={classes["a"]} href="/farmer/addCrop">ADD Crop</a>
                                                </li>
                                                <li className={classes["dropdown-link"]}>
                                                    <a className={classes["a"]} href="/farmer/updateCrop">Update Crop</a>
                                                </li>
                                                <li className={classes["dropdown-link"]}>
                                                    <a className={classes["a"]} href="/farmer/deleteCrop">Delete Crop</a>
                                                </li>
                                                <div className={classes["arrow"]}></div>
                                            </ul>
                                        </div>
                                    </li>) : "") : "")}
                                    <li className={classes["nav-link"]} >
                                        <a className={classes["a"]} href="/products">Products</a>
                                    </li>
                                    <li className={classes["nav-link"]} >
                                        <a className={classes["a"]} href="/news">News</a>
                                    </li>
                                    <li className={classes["nav-link"]} >
                                        <a className={classes["a"]} href="#">About Us</a>
                                    </li>
                                    <li className={classes["nav-link"]} >
                                        <a className={classes["a"]} href="/contact">Contact Us</a>
                                    </li>
                                    {!(state.isAuthenticated) ? (<>
                                      <li className={classes["nav-link"]} >
                                      <a className={classes["a"]} href="/register">Register</a>
                                      </li>
                                      <li className={classes["nav-link"]} >
                                          <a className={classes["a"]} href="/login">Login</a>
                                      </li>
                                   </> ) : (<>
                                      <li className={classes["nav-link"]} >
                                        <a className={classes["a"]} href="/profile">Profile</a>
                                      </li>
                                      <li className={classes["nav-link"]} >
                                          <a className={classes["a"]} href="/logout">Logout</a>
                                      </li>   
                                   </> )}
                                    
                                </ul>
                            </div>

                     
                        </div>

                        <div className={classes["hamburger-menu-container"]}>
                            <div className={classes["hamburger-menu"]} onClick={hamburgerHandler}>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
                {props.children}
            </Aux>
        )
}

export default Toolbar;