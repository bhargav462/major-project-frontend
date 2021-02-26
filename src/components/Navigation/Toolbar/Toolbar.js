import React, { useState, useEffect } from 'react';
import Aux from '../../../containers/hoc/Auxiliary/Auxiliary';
import Logo from '../../../assets/images/newLogo1.png'
import classes from './Toolbar.module.css';
import {Link} from 'react-router-dom';
import {AuthContext} from "../../../App";

function Toolbar(props){
  const {state,dispatch} = React.useContext(AuthContext);

  const [hamburger,setHamburger] = useState(true);

   let [navLinksClass,setNavlinksClass] = useState(classes["NavLinks"]);
   let [linkClass,setLinkClass] = useState("");

   const hamburgerHandler = () => {
     console.log("hamburger click")
     setHamburger(!hamburger)

   }

   useEffect(() => {
     console.log("using effect",dispatch({}),state)
     if(hamburger){
      setNavlinksClass(classes["NavLinks"]);
      setLinkClass("");
     }else{
      setNavlinksClass([classes["NavLinks"],classes["NavLinksOpen"]].join(' '))
      setLinkClass(classes["Fade"]);
     }
   }, [hamburger])

        return(
            <Aux>
              {console.log("toolbar state",state)}
              {console.log("props",props)}
                <nav className={classes["NavBar"]}>
                    <Link to="/" style={{height:"100%"}}>
                        <img src={Logo} className={classes["Logo"]}></img>
                    </Link>
                    <p className={classes["WebsiteName"]}>Website Name</p>
                    <div className={classes["Hamburger"]} onClick={hamburgerHandler}>
                        <div className={classes["Line"]}></div>
                        <div className={classes["Line"]}></div>
                        <div className={classes["Line"]}></div>
                    </div>
                    <ul className={navLinksClass} onClick={hamburgerHandler}>
                        <Link to="/" className={classes["RouterLink"]}>
                          <li key="home" className={linkClass}><a>Home</a></li>
                        </Link>
                        <Link to="/products" className={classes["RouterLink"]}>
                          <li key="products" className={linkClass}><a>Products</a></li>
                        </Link>
                        <Link to="/news" className={classes["RouterLink"]}>
                          <li key="news" className={linkClass}><a>News</a></li>
                        </Link>
                        <Link to="/about" className={classes["RouterLink"]}>
                          <li key="about" className={linkClass}><a>About</a></li>
                        </Link>
                        <Link to="/contact" className={classes["RouterLink"]}>
                          <li key="contact" className={linkClass}><a>Contact Us</a></li>
                        </Link>
                        {!(state.isAuthenticated) ? (<><Link to="/register" className={classes["RouterLink"]}>
                          <li key="register" className={linkClass}><a>Register</a></li>
                        </Link>
                        <Link to="/login" className={classes["RouterLink"]}>
                          <li key="login" className={linkClass}><a>Login</a></li>
                        </Link></>) : (<>
                        <Link to="/profile" className={classes["RouterLink"]}>
                          <li key="register" className={linkClass}><a>Profile</a></li>
                        </Link>
                        <Link to="/logout" className={classes["RouterLink"]}>
                          <li key="login" className={linkClass}><a>LogOut</a></li>
                        </Link>
                        </>)}
                    </ul>
                </nav>
                {props.children}
            </Aux>
        )
}

export default Toolbar;