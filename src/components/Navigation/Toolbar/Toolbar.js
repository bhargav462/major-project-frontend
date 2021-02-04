import React, { Component } from 'react';
import Aux from '../../../containers/hoc/Auxiliary/Auxiliary';
import Logo from '../../../assets/images/newLogo1.png'
import './Toolbar.css';
import {Link} from 'react-router-dom';

class Toolbar extends Component{

   state = {
      hamburger: false
   }

   navLinksClass = "NavLinks";
   linkClass = "";

   hamburgerHandler = () => {

     this.setState((preState) => {
         if(preState.hamburger){
             this.navLinksClass = "NavLinks";
             this.linkClass = "";
         }else{
            this.navLinksClass = ["NavLinks","NavLinksOpen"].join(' ')
            this.linkClass = "Fade";
         }

         return {hamburger:!preState.hamburger}
     })
   }

    render(){
        return(
            <Aux>
                <nav className={"NavBar"}>
                    <Link to="/" style={{height:"100%"}}>
                        <img src={Logo} className={"Logo"}></img>
                    </Link>
                    <p className={"WebsiteName"}>Website Name</p>
                    <div className={"Hamburger"} onClick={this.hamburgerHandler}>
                        <div className={"Line"}></div>
                        <div className={"Line"}></div>
                        <div className={"Line"}></div>
                    </div>
                    <ul className={this.navLinksClass} onClick={this.hamburgerHandler}>
                        <Link to="/" className={"RouterLink"}>
                          <li key="home" className={this.linkClass}><a>Home</a></li>
                        </Link>
                        <Link to="/about" className={"RouterLink"}>
                          <li key="about" className={this.linkClass}><a>About</a></li>
                        </Link>
                        <Link to="/contact" className={"RouterLink"}>
                          <li key="contact" className={this.linkClass}><a>Contact Us</a></li>
                        </Link>
                        <Link to="/register" className={"RouterLink"}>
                          <li key="register" className={this.linkClass}><a>Register</a></li>
                        </Link>
                        <Link to="/login" className={"RouterLink"}>
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