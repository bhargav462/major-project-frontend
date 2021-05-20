import React, {Component} from 'react';
import classes from './showCrop.module.css';
import CropContent from './cropContent/cropContent';
import swal from 'sweetalert';
import { withRouter } from 'react-router-dom'    

class ShowCrop extends Component{

    state = {
        x: 0,
        crop: null,
        farmer: null
    }

    goLeft = () => {
       this.setState((preProps) => {
        if(preProps.x === 0)
        {
            return {x:-100*(this.state.crop.images.length-1)}
        }else{
            return {x:preProps.x+100}
        }
       })
    }

    goRight = () => {
        console.log(this.state.x);
        this.setState((preProps) => {
            if(preProps.x === -100*(this.state.crop.images.length-1))
            {
                return {x:0}
            }else{
                return {x:preProps.x-100}
            }
        })
    }

    openUpdatePage = () => {
        this.props.history.push(`/farmer/updateCrop/${this.state.crop._id}`)
    }

    openDeletePage = () => {
        this.props.history.push(`/farmer/deleteCrop/${this.state.crop._id}`)
    }

    componentDidMount(){
        console.log("params id",this.props.match.params.id)
        fetch(`${process.env.REACT_APP_API_URL}/products/id`,{
            method: 'POST',
            headers : {
                'Content-Type' : 'Application/json'
            },
            body:JSON.stringify({
                id: this.props.match.params.id
            })
        }).then(res => res.json())      
        .then(async (data) => {
            console.log("data",data)
            this.setState({crop: data.crop,farmer: data.farmer})
            }).catch(e => {
            console.log("error",e)
            swal(e);
        })
    }

   render() {
       return (
           <>
                {this.state.crop !== null ? (<>
                    <div className={classes.slider}>
                    {
                        this.state.crop.images.map((item,index) => {
                            console.log("index",index)
                            return (
                                <div key={index} className={classes.slide}
                                     style={{transform:`translateX(${this.state.x}%)`}}>
                                    <img src={`data:image/png;base64, ${item.buffer}`} className={classes.imageStyles}/>
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
                <CropContent crop={this.state.crop} farmer={this.state.farmer}/>
                <div className={classes["btn-container"]}>
                    <div className={classes.btnDiv}>
                       <button className={classes.btn} onClick={this.openUpdatePage}>Update</button>
                    </div>
                    <div className={classes.btnDiv}>
                        <button className={classes.btn} onClick={this.openDeletePage}>Delete</button>    
                    </div>
                 </div>    
            </>) : <p style={{textAlign:'center',marginTop:'200px'}}>Waiting...</p>}

            </>
       );
   }
}

export default withRouter(ShowCrop);