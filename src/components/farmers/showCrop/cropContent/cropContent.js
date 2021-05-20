import React, { Component } from 'react';
import classes from './cropContent.module.css';

class CropContent extends Component
{
   crop = this.props.crop
   farmer = this.props.farmer

    render() {
       console.log(this.props)
        return (
             <div className={classes.CardContent}>
                 <div className={classes.title}>
                    <h1>{this.crop.crop}</h1> <br />
                    <h3>{this.crop.amount} KG</h3>
                    <h2>MRP: Rs.{this.crop.price} /-</h2>
                 </div>
                 <div className={classes.description}>
                    <span><h2>Product Description: </h2>{this.crop.description}</span>
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
                    <h3>Address: </h3><p>{this.crop.address}</p>
                 </div>
                 <div className={classes.contact}>
                    <h3>Contact Details: </h3>
                    <p>Name: {this.farmer.name}</p>
                    <p>Mobile: +917660816877</p>
                 </div>
             </div>
        );
    }
}

export default CropContent;