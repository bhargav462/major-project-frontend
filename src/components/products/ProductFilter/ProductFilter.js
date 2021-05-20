import React, { Component } from 'react';
import classes from './ProductFilter.module.css'

class ProductFilter extends Component
{

    state = {
        crop: "",
        pincode: ""
    }

    valueChangeHandler = (e) => {
        console.log(this.state)
        this.setState({[e.target.name]: e.target.value})
    }

    filterProducts = () => {
        console.log("I am here")
       this.props.filterProducts(this.state)
    }

    render(){
        return(<>
           <div className={classes["filter"]}>
                <div className={classes["city"]}>
                    <input 
                        placeholder="Crop Name" 
                        className={[classes["input"],classes["number"]].join(' ')} 
                        type="text" 
                        name="crop"
                        onChange={this.valueChangeHandler}
                        value={this.state.crop}
                        required 
                        />
                    <input 
                        placeholder="Pincode" 
                        className={[classes["input"],classes["number"]].join(' ')} 
                        type="number" 
                        name="pincode"
                        value={this.state.pincode}
                        required 
                        onChange={this.valueChangeHandler}
                        />
                    <div className={classes["button-container"]}>
                        <button className={classes["searchButton"]} onClick={this.filterProducts}>Search</button>
                    </div>
                </div> 
            </div>
        </>)
    }
}

export default ProductFilter