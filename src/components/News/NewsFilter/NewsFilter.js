import React, { Component } from 'react';
import classes from './NewsFilter.module.css'

class ProductFilter extends Component
{
    state = {
        commodity: "",
        district: "",
        state: ""
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
                        className={[classes["input"]].join(' ')} 
                        type="text" 
                        name="commodity"
                        onChange={this.valueChangeHandler}
                        value={this.state.commodity}
                        required 
                        />
                    <input 
                        placeholder="State" 
                        className={[classes["input"]].join(' ')} 
                        type="text" 
                        name="state"
                        onChange={this.valueChangeHandler}
                        value={this.state.state}
                        required 
                        />
                    <input 
                        placeholder="District" 
                        className={[classes["input"]].join(' ')} 
                        type="text" 
                        name="district"
                        value={this.state.district}
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