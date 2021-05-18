import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import classes from './product.module.css';
import land4 from './../../assets/images/land1.jpeg';
import land2 from './../../assets/images/land4.jpg';
import land3 from './../../assets/images/land5.jpg';
import land1 from './../../assets/images/land6.jpg';

class CardLayout extends Component{

   state = {
     crops: []
   }

   componentDidMount(){
      fetch(`${process.env.REACT_APP_API_URL}/products/crops`,{
        method: 'POST',
        headers : {
          'Content-Type' : 'Application/json'
        }
      }).then(res => {
        return res.json()
      })
      .then(data => {
         console.log("product data",data);
         this.setState({crops: data})
      })
      .catch(e => {
        alert(e);
      })

   }

    render() {
        return (
            <div className={classes["container"]}>
            <main className={classes.CardLayout}>
              {
                 this.state.crops.map((crop,index) => {
                   console.log(crop);
                  //  console.log(crop.images[0].buffer)
                   return (<article key={index}>
                    <Link to={`/land/${crop._id}`}>
                        <div className={classes.ImageContainer}>
                            <img src={`data:image/png;base64, ${crop.images[0].buffer}`} alt="tshirt photo" />
                        </div>
                    </Link>
                    <div className={classes.content}>
                        <h3>{crop.crop}</h3>
                        <h4>{crop.amount}<span>KG</span></h4>
                        <h4>MRP: Rs {crop.price}.00/-</h4>
                    </div>
                  </article>);
                 })
              }
              {this.state.crops.length === 0 ? <p style={{marginTop:'100px'}}>Waiting ...</p> : null}  
            </main>
          </div>
        );
    }
}

export default CardLayout;