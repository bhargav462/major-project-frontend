import React, { Component } from 'react';
import Aux from '../../../containers/hoc/Auxiliary/Auxiliary';
import Logo from '../../../assets/images/newLogo1.png'
import classes from './Toolbar.module.css';
import {Link} from 'react-router-dom';

class Toolbar extends Component{

   state = {
      hamburger: false
   }

   navLinksClass = classes["NavLinks"];
   linkClass = "";

   hamburgerHandler = () => {

     this.setState((preState) => {
         if(preState.hamburger){
             this.navLinksClass = classes["NavLinks"];
             this.linkClass = "";
         }else{
            this.navLinksClass = [classes["NavLinks"],classes["NavLinksOpen"]].join(' ')
            this.linkClass = classes["Fade"];
         }

         return {hamburger:!preState.hamburger}
     })
   }

    render(){
        return(
            <Aux>
                <nav className={classes["NavBar"]}>
                    <Link to="/" style={{height:"100%"}}>
                        <img src={Logo} className={classes["Logo"]}></img>
                    </Link>
                    <p className={classes["WebsiteName"]}>Website Name</p>
                    <div className={classes["Hamburger"]} onClick={this.hamburgerHandler}>
                        <div className={classes["Line"]}></div>
                        <div className={classes["Line"]}></div>
                        <div className={classes["Line"]}></div>
                    </div>
                    <ul className={this.navLinksClass} onClick={this.hamburgerHandler}>
                        <Link to="/" className={classes["RouterLink"]}>
                          <li key="home" className={this.linkClass}><a>Home</a></li>
                        </Link>
                        <Link to="/products" className={classes["RouterLink"]}>
                          <li key="products" className={this.linkClass}><a>Products</a></li>
                        </Link>
                        <Link to="/news" className={classes["RouterLink"]}>
                          <li key="news" className={this.linkClass}><a>News</a></li>
                        </Link>
                        <Link to="/about" className={classes["RouterLink"]}>
                          <li key="about" className={this.linkClass}><a>About</a></li>
                        </Link>
                        <Link to="/contact" className={classes["RouterLink"]}>
                          <li key="contact" className={this.linkClass}><a>Contact Us</a></li>
                        </Link>
                        <Link to="/register" className={classes["RouterLink"]}>
                          <li key="register" className={this.linkClass}><a>Register</a></li>
                        </Link>
                        <Link to="/login" className={classes["RouterLink"]}>
                          <li key="login" className={this.linkClass}><a>Login</a></li>
                        </Link>
                    </ul>
                </nav>
                {this.props.children}
            </Aux>
        )
    }
}

export default Toolbar;