import classes from './Home.module.css';
import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import swal from 'sweetalert'
import UserCounter from './userCounter/userCounter'
import Corousal from './corousal/corousal'

class Home extends Component 
{

    state = {
        crops: [],
        count: null
    }

    componentDidMount()
    {
        fetch(`${process.env.REACT_APP_API_URL}/products/crops?pageNumber=1&pageSize=4`,{
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        }).then(res => res.json())
        .then(data => {
            console.log("data",data)
            if(data.error){
               return swal(data.error)
            }
            data =  data.products.slice(0,4)
            this.setState({crops: data})
        }).catch(e => {
            console.log("error",e)
            swal("Unable to connect to the server")
        })

    }

    mouseOverHandler = () => {
        const mrq = document.getElementById("mrq")
        mrq.stop()
    }

    mouseOutHandler = () => {
        const mrq = document.getElementById("mrq")
        mrq.start()
    }

    render() {
        return (
             <>
                <Corousal />
                <div className={classes["crop-scheme-container"]}>
                    <div>
                        <h1 style={{textAlign:'center',marginTop:'10px'}}>Popular Products</h1>
                    <main className={classes.CardLayout}>
                        {
                            this.state.crops.map((crop,index) => {
                            console.log(crop);
                            //   break;
                            //  console.log(crop.images[0].buffer)
                            return (<div><article key={index}>
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
                            </article></div>);
                            })
                        }
                    </main>
                    {this.state.crops.length === 0 ? <div class="fa-5x" style={{textAlign:"center"}}>  <i class="fas fa-spinner fa-spin"></i></div> : null}  
                    </div>
                    <div className={classes["mrq-container"]}>
                        <h2 style={{textAlign:'center'}}>Agricultural Schemes</h2>
                        <hr />
                        <marquee id={"mrq"} height={"300px"} width={"100%"} behavior={"scroll"} direction={"up"} scrollAmount={"4"} onMouseOver={this.mouseOverHandler} onMouseOut={this.mouseOutHandler}>
                            <ul>
                                <li className={classes["scheme-container"]}>
                                    <p className={classes["scheme"]}>
                                        <a className={classes["link"]} href={"https://www.pmkisan.gov.in/"} target={"_blank"}>Pradhan Mantri Kisan Maandhan Yojana</a>
                                    </p>
                                    <p className={classes["update"]}>Last Update On: 12/03/21</p>
                                </li>
                                <hr/>
                                <li className={classes["scheme-container"]}>
                                    <p className={classes["scheme"]}>
                                        <a className={classes["link"]} href={"https://pmkmy.gov.in/"} target={"_blank"}>Pradhan Mantri Kisan Scheme</a>
                                    </p>
                                    <p className={classes["update"]}>Last Update On: 12/03/21</p>
                                </li>
                                <hr/>
                                <li className={classes["scheme-container"]}>
                                    <p className={classes["scheme"]}>
                                        <a className={classes["link"]} href={"https://krishijagran.com/news/how-to-apply-for-kisan-credit-card-online-check-step-by-step-process/"} target={"_blank"}>Kisan Credit Card (KCC) Scheme</a>
                                    </p>
                                    <p className={classes["update"]}>Last Update On: 12/03/21</p>
                                </li>
                                <hr/>
                                <li className={classes["scheme-container"]}>
                                    <p className={classes["scheme"]}>
                                        <a className={classes["link"]} href={"https://krishijagran.com/agriculture-world/pashu-kisan-credit-card-yojana-eligibility-benefits-loan-amount-necessary-documents-methods-to-apply/"} target={"_blank"}>Pashu Kisan Credit Card Scheme</a>
                                    </p>
                                    <p className={classes["update"]}>Last Update On: 12/03/21</p>
                                </li>
                                <hr/>
                                <li className={classes["scheme-container"]}>
                                    <p className={classes["scheme"]}>
                                        <a className={classes["link"]} href={"https://krishijagran.com/agriculture-world/how-farmers-can-get-rs-50000-per-hectare-for-organic-farming-under-paramparagat-krishi-vikas-yojana/"} target={"_blank"}>Paramparagat Krishi Vikas Yojana (PKVY)</a>
                                    </p>
                                    <p className={classes["update"]}>Last Update On: 12/03/21</p>
                                </li>
                                <hr/>
                                <li className={classes["scheme-container"]}>
                                    <p className={classes["scheme"]}>
                                        <a className={classes["link"]} target={"_blank"}>Pradhan Mantri Krishi Sinchai Yojana (PMKSY)</a>
                                    </p>
                                    <p className={classes["update"]}>Last Update On: 12/03/21</p>
                                </li>
                                <hr/>
                                <li className={classes["scheme-container"]}>
                                    <p className={classes["scheme"]}>
                                        <a className={classes["link"]} href={"https://krishijagran.com/animal-husbandry/dairy-entrepreneurship-development-scheme-how-farmers-can-get-loans-up-to-rs-20-lakh-under-this-scheme/"} target={"_blank"}>Dairy Entrepreneurship Development Scheme</a>
                                    </p>
                                    <p className={classes["update"]}>Last Update On: 12/03/21</p>
                                </li>
                                <hr/>
                                <li className={classes["scheme-container"]}>
                                    <p className={classes["scheme"]}>
                                        <a className={classes["link"]} href={""} target={"_blank"}>Mission Organic Value Chain Development in North Eastern Region (MOVCDNER) - implemented by INM Division</a>
                                    </p>
                                    <p className={classes["update"]}>Last Update On: 12/03/21</p>
                                </li>
                                <hr/>
                                <li className={classes["scheme-container"]}>
                                    <p className={classes["scheme"]}>
                                        <a className={classes["link"]} href={"https://soilhealth.dac.gov.in/"} target={"_blank"}>National Mission for Sustainable Agriculture (NMSA)</a>
                                    </p>
                                    <p className={classes["update"]}>Last Update On: 12/03/21</p>
                                </li>
                                <hr/>
                                <li className={classes["scheme-container"]}>
                                    <p className={classes["scheme"]}>
                                        <a className={classes["link"]} href={"https://pmkmy.gov.in/"} target={"_blank"}>Rainfed Area Development (RAD) - implemented by RFS Division</a>
                                    </p>
                                    <p className={classes["update"]}>Last Update On: 12/03/21</p>
                                </li>
                            </ul>
                        </marquee>
                    </div>
                </div>
                <UserCounter />
             </>
        );
    }
}

export default Home;