import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import swal from 'sweetalert';
import classes from './product.module.css';
import ProductFilter from './ProductFilter/ProductFilter'
import ReactPaginate from 'react-paginate';

class CardLayout extends Component{

   state = {
     crops: [],
     pageCount: 0,
     pageSize: 10
   }

   componentDidMount(){
    this.getProducts()
   }

    getProducts(){
      fetch(`${process.env.REACT_APP_API_URL}/products/crops?pageNumber=1&pageSize=${this.state.pageSize}`,{
        method: 'GET',
        headers : {
          'Content-Type' : 'Application/json'
        }
      }).then(res => {
        return res.json()
      })
      .then(data => {
         console.log("product data",data);
         this.setState({
           crops: data.products,
           pageCount: data.totalPages
          })
      })  
      .catch(e => {
        alert(e);
      })
    } 

   filterProducts = (filter) => {
    this.setState({pageSize: filter.pageSize},() => {
      this.getProducts()
    })
    console.log("call")
    // filter.crop = filter.crop.trim()
    // filter.pincode = filter.pincode.trim()
    //  fetch(`${process.env.REACT_APP_API_URL}/products/filter`,{
    //    method: 'POST',
    //    headers: {
    //      'content-type' : 'application/json'
    //    },
    //    body: JSON.stringify({
    //      filter
    //    })
    //  }).then(res => res.json())
    //  .then(data => {
    //    console.log("data",data)
    //    if(data.length)
    //    this.setState({crops:data})
    //    else
    //    swal("No data found")
    //  })

   }

   handlePageClick = (pageInfo) => {
     console.log("ok",pageInfo)
     this.setState({crops: []})
     fetch(`${process.env.REACT_APP_API_URL}/products/crops?pageNumber=${pageInfo.selected+1}&pageSize=${this.state.pageSize}`,{
      method: 'GET',
      headers : {
        'Content-Type' : 'Application/json'
      }
    }).then(res => {
      return res.json()
    })
    .then(data => {
       console.log("product data",data);
       this.setState({
         crops: data.products,
         pageCount: data.totalPages
        })
    })  
    .catch(e => {
      alert(e);
    })
   }

    render() {
        return (
          <div className={classes["container"]}>
            <ProductFilter filterProducts={this.filterProducts}/>
            <main className={classes.CardLayout}>
              {
                 this.state.crops.map((crop,index) => {
                   console.log(crop);
                  //  console.log(crop.images[0].buffer)
                   return (<article key={index}>
                    <Link to={`/crop/${crop._id}`}>
                        <div className={classes.ImageContainer}>
                            <img src={`${process.env.REACT_APP_API_URL}${crop.images[0]}`} alt="tshirt photo" />
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
            </main>
            { 
              this.state.crops.length === 0 ? 
                <div class="fa-5x" style={{textAlign:"center",minHeight:'70vh'}}>  
                  <i class="fas fa-spinner fa-spin"></i>
                </div> 
                : null
            }
            <ReactPaginate
              previousLabel={'<<'}
              nextLabel={'>>'}
              breakLabel={'...'}
              pageCount={this.state.pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={1}
              onPageChange={this.handlePageClick}
              containerClassName={classes['pagination']}
              pageClassName={classes['page-item']}
              pageLinkClassName={classes['page-link']}
              previousClassName={classes['page-item']}
              previousLinkClassName={classes['page-link']}
              nextClassName={classes['page-item']}
              nextLinkClassName={classes['page-link']}
              breakClassName={classes['page-item']}
              breakLinkClassName={classes['page-link']}
              activeClassName={classes['active']}
            />  
          </div>
        );
    }
}

export default CardLayout;