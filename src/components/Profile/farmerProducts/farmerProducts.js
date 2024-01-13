import React, { Component } from 'react';
import classes from './farmerProducts.module.css'
import {Link} from 'react-router-dom'

class FarmerProducts extends Component 
{

    render() {
        return (
             <>
            <div className={classes["container"]}>
                <main className={classes.CardLayout}>
                {this.props.product && this.props.product.map((crop,index) => {
                    console.log("map")
                    return (<article key={index}>
                        <Link to={`/farmer/crop/${crop._id}`}>
                            <div className={classes.ImageContainer}>
                                <img src={`${crop.images[0]}`} alt="tshirt photo" />
                            </div>
                        </Link>
                        <div className={classes.content}>
                            <h3>{crop.crop}</h3>
                            <h4>{crop.amount}<span>KG</span></h4>
                            <h4>MRP: Rs {crop.price}.00/-</h4>
                        </div>
                    </article>)
                })
                    
                }
                {/* {this.state.crops.length === 0 ? <p style={{marginTop:'100px'}}>Waiting ...</p> : null}   */}
                </main>
            </div>
             </>
        );
    }
}

export default FarmerProducts;