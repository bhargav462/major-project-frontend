import React, { Component } from 'react';

class Home extends Component 
{
    sessionCheck = () => {
       fetch(`${process.env.REACT_APP_API_URL}/loggedIn`,{
           method: 'POST',
           headers: {
               "Content-Type": 'Application/json',
               token: 'askjdkfasjkdfj'
           },
           body: JSON.stringify({data: "temporary data"})
       })
            .then(res => res.json())
            .then(data => {
                console.log("response data",data)
            })
    }

    render() {
        return (
             <>
             <p>Home Page</p>
             <p></p>
             <button onClick={this.sessionCheck}>Check</button>
             </>
        );
    }
}

export default Home;