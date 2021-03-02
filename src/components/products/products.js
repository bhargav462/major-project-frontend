import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import classes from './product.module.css';
import land4 from './../../assets/images/land1.jpeg';
import land2 from './../../assets/images/land4.jpg';
import land3 from './../../assets/images/land5.jpg';
import land1 from './../../assets/images/land6.jpg';

class CardLayout extends Component{
    render() {
        return (
            <div className={classes["container"]}>
            <main className={classes.CardLayout}>
                <article>
                    <Link to="/land/land4">
                        <div className={classes.ImageContainer}>
                            <img src={land4} alt="tshirt photo" />
                        </div>
                    </Link>
                    <div class={classes.content}>
                        <h3>Onion</h3>
                        <h4>10<span>KG</span></h4>
                        <h4>MRP: Rs 300.00/-</h4>
                    </div>
                </article>
              <article>
                <Link to="/land/land2">
                    <div className={classes.ImageContainer}>
                      <img src={land2} alt="tshirt photo" />
                    </div>
                </Link>
                <div class={classes.content}>
                    <h3>Potato</h3>
                    <h4>10<span>KG</span></h4>
                    <h4>MRP: Rs 400.00/-</h4>
                </div>
              </article>
              <article>
                <Link to="/land/land3">
                    <div className={classes.ImageContainer}>
                      <img src={land3} alt="tshirt photo" />
                    </div>
                </Link>
                <div class={classes.content}>
                    <h3>Capsicum</h3>
                    <h4>10<span>KG</span></h4>
                    <h4>MRP: Rs 400.00/-</h4>
                </div>
              </article>
              <article>
                <Link to="/land/land1">
                    <div className={classes.ImageContainer}>
                      <img src={land1} alt="tshirt photo" />
                    </div>
                </Link>
                
                <div class={classes.content}>
                    <h3>Tomato</h3>
                    <h4>10<span>KG</span></h4>
                    <h4>MRP: Rs 200.00/-</h4>
                </div>
              </article>
              <article>
                    <Link to="/land/land4">
                        <div className={classes.ImageContainer}>
                            <img src={land4} alt="tshirt photo" />
                        </div>
                    </Link>
                    <div class={classes.content}>
                        <h3>Onion</h3>
                        <h4>10<span>KG</span></h4>
                        <h4>MRP: Rs 300.00/-</h4>
                    </div>
                </article>
              <article>
                <Link to="/land/land2">
                    <div className={classes.ImageContainer}>
                      <img src={land2} alt="tshirt photo" />
                    </div>
                </Link>
                <div class={classes.content}>
                    <h3>Potato</h3>
                    <h4>10<span>KG</span></h4>
                    <h4>MRP: Rs 400.00/-</h4>
                </div>
              </article>
              <article>
                <Link to="/land/land3">
                    <div className={classes.ImageContainer}>
                      <img src={land3} alt="tshirt photo" />
                    </div>
                </Link>
                <div class={classes.content}>
                    <h3>Capsicum</h3>
                    <h4>10<span>KG</span></h4>
                    <h4>MRP: Rs 400.00/-</h4>
                </div>
              </article>
              <article>
                <Link to="/land/land1">
                    <div className={classes.ImageContainer}>
                      <img src={land1} alt="tshirt photo" />
                    </div>
                </Link>
                
                <div class={classes.content}>
                    <h3>Tomato</h3>
                    <h4>10<span>KG</span></h4>
                    <h4>MRP: Rs 200.00/-</h4>
                </div>
              </article>
            </main>
          </div>
        );
    }
}

export default CardLayout;