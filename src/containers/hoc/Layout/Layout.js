import React, { Component } from "react";
import Aux from '../Auxiliary/Auxiliary';
import './Layout.css';

class Layout extends Component{

    render() {
        return (
             <Aux>
                <div>
                    <div className="Quote" >
                         <p className="QuoteText">Agriculture is our wisest pursuit, because it will in the end contribute most to real wealth, good morals & happiness</p>
                    </div>
                </div>
             </Aux>
        );
    }
}

export default Layout;