import React, { Component } from 'react';
import classes from './ProductContent.module.css';

class CardContent extends Component
{
    render() {
        return (
             <div className={classes.CardContent}>
                 <div className={classes.title}>
                    <h1>Onion</h1> <br />
                    <h3>10 KG</h3>
                    <h2>MRP: Rs.300/-</h2>
                 </div>
                 <div className={classes.description}>
                    <span><h2>Product Description: </h2>This product is cultivated in Vikhapatnam, Andhra Pradesh in Alluvial soil</span>
                 </div>
                 {/* <div className={classes.additionalDetails} >
                    <h2>Additional Details: </h2>
                    <p>Facing: South</p>
                    <p>Posession: Immediate</p>
                    <p>Transaction Type: Resale</p>
                    <p>Plot Area : 10 Acres</p>
                    <p>Price per Acre : Rs 10000</p>
                 </div> */}
                 <div className={classes.address}>
                    <h3>Address: </h3><p>23-4-32, Gajuwaka, Visakhapatnam, Andhra Pradesh</p>
                 </div>
                 <div className={classes.contact}>
                    <h3>Contact Details: </h3>
                    <p>Name: Owner Name</p>
                    <p>Mobile: +917660816877</p>
                 </div>
             </div>
        );
    }
}

export default CardContent;