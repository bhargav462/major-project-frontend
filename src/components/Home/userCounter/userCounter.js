import React, {useState,useEffect} from 'react';
import classes from './userCounter.module.css'

const UserCounter = () => {

   const [counter,setCounter] = useState(0)

   useEffect(() => {

    if(counter === 0)
    {
        function counter(start, end, duration) {
            let current = start,
             range = end - start,
             increment = end > start ? 1 : -1,
             step = Math.abs(Math.floor(duration / range)),
             timer = setInterval(() => {
              current += increment;
              setCounter(current)
              if (current == end) {
               clearInterval(timer);
              }
             }, step);
           }
           counter(0, 300, 3000);    
    }
       
   })

   return(
       <>
            <section>
                <div className={classes["container"]}>
                    <div className={classes["user-container"]}>
                        <div className={classes["buyers"]}>
                            <p style={{textAlign:'center',fontSize:'30px'}}>Number of Buyers registered</p>
                            <div className={classes["counter-container"]}>
                                <p className={classes["counter"]} style={{textAlign:'center'}}>{counter}</p>
                            </div>
                        </div>
                        <div className={classes["farmer"]}>
                            <p style={{textAlign:'center',fontSize:'30px'}}>Number of Farmers registered</p>
                            <div className={classes["counter-container"]}>
                                <p className={classes["counter"]} style={{textAlign:'center'}}>{counter}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
       </>
   )
}

export default UserCounter