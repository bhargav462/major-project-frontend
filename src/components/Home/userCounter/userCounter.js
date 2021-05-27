import { set } from 'js-cookie';
import React, {useState,useEffect} from 'react';
import classes from './userCounter.module.css'

const UserCounter = () => {

   const [counter,setCounter] = useState({Farmers: 0,Buyers: 0})
   const [count,setCount] = useState(false)

   useEffect(() => {

    if(counter.Farmers === 0)
    {

        fetch(`${process.env.REACT_APP_API_URL}/users/count`,{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            }
        }).then(res => res.json())
        .then(data => {
            console.log("data",data)
            setCounter({Farmers:data.Farmers,Buyers:data.Buyers})
        })
    }       
   })

   useEffect(() => {
       console.log("counter in useEffect",counter)
    if(counter.Farmers !== 0 && count)
    {
        setCount(true)
        counterFunction("Farmers", 0, counter.Farmers, 3000); 
    }   
    if(counter.Buyers !== 0 && count)
    counterFunction("Buyers", 0, counter.Buyers, 3000); 

   },[counter])

   const counterFunction = (userType, start, end, duration) => {
    let current = start,
     range = end - start,
     increment = end > start ? 1 : -1,
     step = Math.abs(Math.floor(duration / range)),
     timer = setInterval(() => {
      current += increment;
      setCounter({[userType]:current})
      if (current == end) {
       clearInterval(timer);
      }
     }, step);
   }

   return(
       <>
            <section>
                <div className={classes["container"]}>
                    <div className={classes["user-container"]}>
                        <div className={classes["buyers"]}>
                            <p style={{textAlign:'center',fontSize:'30px'}}>Number of Buyers registered</p>
                            <div className={classes["counter-container"]}>
                                <p className={classes["counter"]} style={{textAlign:'center'}}>{counter.Buyers}</p>
                            </div>
                        </div>
                        <div className={classes["farmer"]}>
                            <p style={{textAlign:'center',fontSize:'30px'}}>Number of Farmers registered</p>
                            <div className={classes["counter-container"]}>
                                <p className={classes["counter"]} style={{textAlign:'center'}}>{counter.Farmers}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
       </>
   )
}

export default UserCounter