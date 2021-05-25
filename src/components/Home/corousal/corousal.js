import React, { Component } from 'react';
import classes from './corousal.module.css';
import swal from 'sweetalert';
import land1 from './../../../assets/images/land7.jpg'
import land2 from './../../../assets/images/land8.jpg'
import land3 from './../../../assets/images/car3.jpeg'

class Corousal extends Component{

    state = {
        x: 0,
        crop: [land1,land2,land3],
        farmer: null
    }

    componentDidMount(){
        setInterval(() => {
            this.goLeft()
        }, 4000);
    }

    goLeft = () => {
       this.setState((preProps) => {
        if(preProps.x === 0)
        {
            return {x:-100*(this.state.crop.length-1)}
        }else{
            return {x:preProps.x+100}
        }
       })
    }

    goRight = () => {
        // console.log(this.state.x);
        this.setState((preProps) => {
            if(preProps.x === -100*(this.state.crop.length-1))
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
                        this.state.crop.map((item,index) => {
                            // console.log("index",index)
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
            </>
       );
   }
}

export default Corousal;