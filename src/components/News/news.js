import React, {useEffect,useState} from 'react';
import swal from 'sweetalert';
import classes from './news.module.css';

const News = () => {

  const [news,setNews] = useState([])

  useEffect(() => {
    
    fetch(`${process.env.REACT_APP_API_URL}/crop/news`,{
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      }
    }).then(res => res.json())
    .then(data => {
      if(data.error){
        return swal(data.error)
      }
      setNews(data);
    })

  }, [news])

   return(<div className={classes["news-container"]}>
      <h1 style={{textAlign:'center'}}>News</h1>
      {(news.length > 0 && news.map((data,index) => {
        return(
                <div key={index} className={classes["news"]}>
                <h3>{data.commodity}</h3>
                <div className={classes["news-content"]}>
                   <p>State : {data.state}</p>
                   <p>District : {data.district}</p>
                   <p>market : {data.market}</p>
                   <p>Min Price: {data.min_price}</p>
                   <p>Max price: {data.max_price}</p>
                   <p>Modal Price: {data.modal_price}</p>
                   <p>Variety: {data.variety}</p>
                   <p>Arrival Date: {data.arrival_date}</p>
              </div></div>)
      }))}
   </div>)
}

export default News