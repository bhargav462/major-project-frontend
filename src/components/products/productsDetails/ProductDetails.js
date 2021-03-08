import React, { Component } from 'react';
import classes from './ProductDetails.module.css';
import land3 from './../../../assets/images/land5.jpg'
import land4 from './../../../assets/images/land4.jpg'
import land5 from './../../../assets/images/land1.jpeg'
import land6 from './../../../assets/images/land6.jpg'
// import land5 from './../../../assets/images/land7.jpg'
// import land6 from './../../../assets/images/land8.jpg'
// import land7 from './../../../assets/images/land9.jpg'
import CardContent from './ProductContent/ProductContent';

class CardDetails extends Component{
    sliderArr = [land5,land6,land3,land4];

    state = {
        x: 0
    }

    goLeft = () => {
       this.setState((preProps) => {
        if(preProps.x === 0)
        {
            return {x:-100*(this.sliderArr.length-1)}
        }else{
            return {x:preProps.x+100}
        }
       })
    }

    goRight = () => {
        console.log(this.state.x);
        this.setState((preProps) => {
            if(preProps.x === -100*(this.sliderArr.length-1))
            {
                return {x:0}
            }else{
                return {x:preProps.x-100}
            }
        })
    }

   render() {
       return (
           <>
                <div className={classes.slider}>
                    {
                        this.sliderArr.map((item,index) => {
                            return (
                                <div key={index} className={classes.slide}
                                     style={{transform:`translateX(${this.state.x}%)`}}>
                                    <img src={item} className={classes.imageStyles}/>
                                </div>
                            )
                        })
                    }

                <button className={classes.goLeft} onClick={this.goLeft}>
                    <i class="fas fa-chevron-left" style={{fontSize:'2vw',fontWeight:'bold'}}></i>
                </button>
                <button className={classes.goRight} onClick={this.goRight}>
                    <i class="fas fa-chevron-right" style={{fontSize:'2vw',fontWeight:'bold'}}></i>
                </button>
                </div>
                <CardContent />
            </>
       );
   }
}

export default CardDetails;