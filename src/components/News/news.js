import React, {useEffect,useState} from 'react';
import classes from './news.module.css';

const News = () => {

  useEffect(() => {
    const API_URL = "https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json&offset=0&limit=10"
    
    fetch(`https://cors-anywhere.herokuapp.com/${API_URL}`,{
      method: 'GET',
      headers: {
        'content-type' : 'application/json'
      }
    }).then(res => res.json())
    .then(data => {
      console.log("data",data)
    })

  }, [])

   return(<>
      
   </>)
}

export default News